// constants
import { AsteroidConstants, GameConstants, ShipConstants } from './constants';

// Models.
import { Asteroid, Explosion, Ship } from './models';

// Themes.
import { palette } from '../../theme';

// utils
import { isLocalStorageAvailable } from '../../utils';
import {
  createAsteroidBelt,
  distanceBetweenPoints,
  drawAsteroid,
  drawBasicShip,
  drawExplosion,
  drawHighScore,
  drawLaser,
  drawScore,
  drawShip,
  drawSpace,
  drawText,
  moveAsteroids,
  moveLasers,
} from './utils';

export default class Game {
  private asteroids: Asteroid[];
  private readonly element: HTMLCanvasElement;
  private explosions: Explosion[];
  private readonly height: number;
  private highScore: number;
  private intervalId: number | null;
  private level: number;
  private lives: number;
  private score: number;
  private ship?: Ship;
  private text: string;
  private textOpacity: number;
  private readonly width: number;

  constructor(element: HTMLCanvasElement, height: number, width: number) {
    this.asteroids = [];
    this.element = element;
    this.explosions = [];
    this.height = height;
    this.highScore = 0;
    this.intervalId = null;
    this.level = 0;
    this.lives = 3;
    this.score = 0;
    this.text = 'Ready';
    this.textOpacity = 1.0;
    this.width = width;

    // Start the game.
    this.newGame();
  }

  private destroyAsteroid(index: number): void {
    const asteroid: Asteroid = this.asteroids[index];
    let newAsteroid: Asteroid;

    if (asteroid) {
      switch (asteroid.radius) {
        case Math.ceil(AsteroidConstants.SIZE / 2):
          newAsteroid = new Asteroid(
            asteroid.x,
            asteroid.y,
            Math.ceil(AsteroidConstants.SIZE / 4),
            this.level
          );

          this.asteroids.push(newAsteroid);
          this.asteroids.push(newAsteroid);

          this.score += AsteroidConstants.LARGE_POINTS;

          break;
        case Math.ceil(AsteroidConstants.SIZE / 4):
          newAsteroid = new Asteroid(
            asteroid.x,
            asteroid.y,
            Math.ceil(AsteroidConstants.SIZE / 8),
            this.level
          );

          this.asteroids.push(newAsteroid);
          this.asteroids.push(newAsteroid);

          this.score += AsteroidConstants.MEDIUM_POINTS;

          break;
        default:
          this.score += AsteroidConstants.SMALL_POINTS;

          break;
      }

      // check high score
      if (this.score > this.highScore) {
        this.highScore = this.score;

        if (isLocalStorageAvailable()) {
          window.localStorage.setItem(
            GameConstants.HIGH_SCORE_KEY,
            this.highScore.toString()
          );
        }
      }

      // Destroy asteroid.
      this.asteroids.splice(index, 1);

      // Update the level.
      if (this.asteroids.length <= 0) {
        this.level++;

        this.newLevel();
      }
    }
  }

  private newGame(): void {
    let highScore: string | null;

    this.highScore = 0;
    this.level = 0;
    this.lives = 3;
    this.score = 0;
    this.ship = new Ship(this.width / 2, this.height / 2);

    if (isLocalStorageAvailable()) {
      highScore = window.localStorage.getItem(GameConstants.HIGH_SCORE_KEY);

      if (highScore) {
        this.highScore = parseInt(highScore, 10);
      }
    }

    this.newLevel();
  }

  private newLevel(): void {
    if (this.ship) {
      this.text = `Level ${this.level + 1}`;
      this.textOpacity = 1.0;
      this.asteroids = createAsteroidBelt(
        this.ship,
        this.width,
        this.height,
        this.level
      );
    }
  }

  public onKeyDown(e: DocumentEventMap['keydown']): void {
    if (this.ship && !this.ship.dead) {
      switch (e.code) {
        case 'Space': // Space bar (shoot laser).
          this.ship.shootLaser();

          break;
        case 'ArrowLeft': // Left arrow (rotate ship left).
          this.ship.rotation = ((360 / 180) * Math.PI) / GameConstants.FPS;

          break;
        case 'ArrowUp': // Up arrow (thrust the ship forward).
          this.ship.thrusting = true;

          break;
        case 'ArrowRight': // Right arrow (rotate ship right).
          this.ship.rotation = ((-360 / 180) * Math.PI) / GameConstants.FPS;

          break;
      }
    }
  }

  public onKeyUp(e: DocumentEventMap['keyup']): void {
    if (this.ship && !this.ship.dead) {
      switch (e.code) {
        case 'Space': // Space bar (allow shooting again).
          this.ship.canShoot = true;

          break;
        case 'ArrowLeft': // Left arrow (stop rotating left).
          this.ship.rotation = 0;

          break;
        case 'ArrowUp': // Up arrow (stop thrusting).
          this.ship.thrusting = false;

          break;
        case 'ArrowRight': // Right arrow (stop rotating right).
          this.ship.rotation = 0;

          break;
      }
    }
  }

  public update(): void {
    let ctx: CanvasRenderingContext2D;
    let isExploding: boolean;

    if (this.element && this.ship) {
      ctx = this.element.getContext('2d') as CanvasRenderingContext2D;
      isExploding = this.ship.explodeTime > 0;

      // Draw space.
      drawSpace(ctx, this.element.height, this.element.width);

      // Draw asteroids.
      for (const asteroid of this.asteroids) {
        drawAsteroid(ctx, asteroid);
      }

      // Draw ship.
      if (!this.ship.dead) {
        if (!isExploding) {
          if (this.ship.blinkNum % 2 === 0) {
            drawShip(ctx, this.ship);
          }

          // Handle blinking
          if (this.ship.blinkNum > 0) {
            // Reduce the blink time.
            this.ship.blinkTime--;

            // Reduce the blink number.
            if (this.ship.blinkTime === 0) {
              this.ship.blinkTime = Math.ceil(
                ShipConstants.BLINK_DURATION * GameConstants.FPS
              );
              this.ship.blinkNum--;
            }
          }
        } else {
          // this.explosions.push(new Explosion(this.ship.x, this.ship.y));
          // drawExplodingShip(ctx, this.ship);
        }
      }

      // Draw lasers.
      for (const laser of this.ship.lasers) {
        drawLaser(ctx, laser);
      }

      // Draw explosions.
      for (let i: number = 0; i < this.explosions.length; i++) {
        // If no more particles are in the explosion, we can just remove it.
        if (this.explosions[i].particles.length === 0) {
          this.explosions.splice(i, 1);

          return;
        }

        drawExplosion(ctx, this.explosions[i]);
      }

      // Draw text.
      if (this.textOpacity >= 0) {
        drawText(
          ctx,
          this.text,
          this.textOpacity,
          this.element.height,
          this.element.width
        );

        this.textOpacity -= 1.0 / 2.5 / GameConstants.FPS;
      }

      // Start a new game.
      if (this.ship.dead) {
        this.newGame();
      }

      // Draw the lives.
      for (let i: number = 0; i < this.lives; i++) {
        drawBasicShip(
          ctx,
          {
            angle: 0.5 * Math.PI,
            radius: this.ship.radius,
            x: ShipConstants.SIZE + i * ShipConstants.SIZE * 1.2,
            y: ShipConstants.SIZE,
          },
          isExploding && i === this.lives - 1
            ? palette.ui.red
            : palette.greyScale.white
        );
      }

      // Draw score.
      drawScore(ctx, this.score, this.element.width);

      // Draw high score.
      drawHighScore(ctx, this.highScore, this.element.width);

      // Detect laser hits on asteroids.
      for (let i: number = this.asteroids.length - 1; i >= 0; i--) {
        // Loop over the lasers.
        for (let j: number = this.ship.lasers.length - 1; j >= 0; j--) {
          // Detect hits
          if (
            this.ship.lasers[j].explodeTime === 0 &&
            distanceBetweenPoints(
              this.asteroids[i].x,
              this.asteroids[i].y,
              this.ship.lasers[j].x,
              this.ship.lasers[j].y
            ) < this.asteroids[i].radius
          ) {
            // Destroy the asteroid and activate the laser explosion.
            this.destroyAsteroid(i);

            this.ship.lasers[j].explodeTime = Math.ceil(
              0.1 * GameConstants.FPS
            );
            this.explosions.push(
              new Explosion(this.ship.lasers[j].x, this.ship.lasers[j].y)
            );

            break;
          }
        }
      }

      // Check for asteroid collisions (when not exploding).
      if (!isExploding) {
        // Only check when not blinking.
        if (this.ship.blinkNum === 0) {
          for (let i: number = 0; i < this.asteroids.length; i++) {
            if (
              distanceBetweenPoints(
                this.ship.x,
                this.ship.y,
                this.asteroids[i].x,
                this.asteroids[i].y
              ) <
              this.ship.radius + this.asteroids[i].radius
            ) {
              this.destroyAsteroid(i);

              this.ship.explodeTime = Math.ceil(0.3 * GameConstants.FPS);
              this.explosions.push(new Explosion(this.ship.x, this.ship.y));

              break;
            }
          }
        }

        // Rotate the ship.
        this.ship.angle += this.ship.rotation;

        // Move the ship.
        this.ship.x += this.ship.thrust.x;
        this.ship.y += this.ship.thrust.y;
      } else {
        // Reduce the explode time.
        this.ship.explodeTime--;

        // Reset the ship after the explosion has finished.
        if (this.ship.explodeTime === 0) {
          this.lives--;

          // Game over.
          if (this.lives <= 0) {
            this.ship.dead = true;
            this.text = 'Game Over';
            this.textOpacity = 1.0;
          } else {
            this.ship = new Ship(
              this.element.width / 2,
              this.element.height / 2
            );
          }
        }
      }

      // Handle edge of screen.
      if (this.ship.x < 0 - this.ship.radius) {
        this.ship.x = this.element.width + this.ship.radius;
      }

      if (this.ship.x > this.element.width + this.ship.radius) {
        this.ship.x = 0 - this.ship.radius;
      }

      if (this.ship.y < 0 - this.ship.radius) {
        this.ship.y = this.element.height + this.ship.radius;
      }

      if (this.ship.y > this.element.height + this.ship.radius) {
        this.ship.y = 0 - this.ship.radius;
      }

      // Move the lasers.
      moveLasers(this.ship.lasers, this.element.height, this.element.width);

      // Move the asteroids.
      moveAsteroids(this.asteroids, this.element.height, this.element.width);
    }
  }
}
