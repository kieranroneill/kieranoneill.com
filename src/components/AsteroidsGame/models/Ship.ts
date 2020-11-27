// Constants.
import { GameConstants, ShipConstants } from '../constants';

// Types.
import { IEntity, ILaser, IThrust } from '../types';

export default class Ship implements IEntity {
  public angle: number;
  public blinkNum: number;
  public blinkTime: number;
  public canShoot: boolean;
  public dead: boolean;
  public explodeTime: number;
  public lasers: ILaser[];
  public radius: number;
  public rotation: number;
  public thrusting: boolean;
  public thrust: IThrust;
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.angle = (90 / 180) * Math.PI; // convert to radians
    this.blinkNum = Math.ceil(3 / ShipConstants.BLINK_DURATION);
    this.blinkTime = Math.ceil(
      ShipConstants.BLINK_DURATION * GameConstants.FPS
    );
    this.canShoot = true;
    this.dead = false;
    this.explodeTime = 0;
    this.lasers = [];
    this.radius = ShipConstants.SIZE / 2;
    this.rotation = 0;
    this.thrusting = false;
    this.thrust = {
      x: 0,
      y: 0,
    };
    this.x = x;
    this.y = y;
  }

  public shootLaser(): void {
    let laserSpeed: number; // Speed of lasers in pixels per second.

    if (this.canShoot && this.lasers.length < 10) {
      laserSpeed = 500;

      this.lasers.push({
        dist: 0,
        explodeTime: 0,
        x: this.x + (4 / 3) * this.radius * Math.cos(this.angle),
        xv: (laserSpeed * Math.cos(this.angle)) / GameConstants.FPS,
        y: this.y - (4 / 3) * this.radius * Math.sin(this.angle),
        yv: (-laserSpeed * Math.sin(this.angle)) / GameConstants.FPS,
      });
    }

    // Prevent further shooting.
    this.canShoot = false;
  }
}
