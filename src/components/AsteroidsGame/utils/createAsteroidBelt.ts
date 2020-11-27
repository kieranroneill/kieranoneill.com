// Constants.
import { AsteroidConstants } from '../constants';

// Models.
import { Asteroid, Ship } from '../models';

// Utils.
import distBetweenPoints from './distanceBetweenPoints';

export default function createAsteroidBelt(
  ship: Ship,
  width: number,
  height: number,
  level: number
): Asteroid[] {
  const asteroids: Asteroid[] = [];
  let x: number;
  let y: number;

  for (let i: number = 0; i < 3 + level; i++) {
    do {
      x = Math.floor(Math.random() * width);
      y = Math.floor(Math.random() * height);
    } while (
      distBetweenPoints(ship.x, ship.y, x, y) <
      AsteroidConstants.SIZE * 2 + ship.radius
    );
    {
      asteroids.push(
        new Asteroid(x, y, Math.ceil(AsteroidConstants.SIZE / 2), level)
      );
    }
  }

  return asteroids;
}
