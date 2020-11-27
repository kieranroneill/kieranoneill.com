// Models.
import { Asteroid } from '../models';

export default function moveAsteroids(
  asteroids: Asteroid[],
  height: number,
  width: number
): void {
  for (const asteroid of asteroids) {
    asteroid.x += asteroid.xv;
    asteroid.y += asteroid.yv;

    // Handle asteroid edge of screen.
    if (asteroid.x < 0 - asteroid.radius) {
      asteroid.x = width + asteroid.radius;
    }

    if (asteroid.x > width + asteroid.radius) {
      asteroid.x = 0 - asteroid.radius;
    }

    if (asteroid.y < 0 - asteroid.radius) {
      asteroid.y = height + asteroid.radius;
    }

    if (asteroid.y > height + asteroid.radius) {
      asteroid.y = 0 - asteroid.radius;
    }
  }
}
