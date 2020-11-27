// Types.
import { ILaser } from '../types';

export default function moveLasers(
  lasers: ILaser[],
  height: number,
  width: number
): void {
  for (let i: number = lasers.length - 1; i >= 0; i--) {
    // Check distance travelled.
    if (lasers[i].dist > 0.6 * width) {
      lasers.splice(i, 1);

      continue;
    }

    // Handle the explosion.
    if (lasers[i].explodeTime > 0) {
      lasers[i].explodeTime--;

      // Destroy the laser after the duration is up.
      if (lasers[i].explodeTime === 0) {
        lasers.splice(i, 1);

        continue;
      }
    } else {
      // Move the laser.
      lasers[i].x += lasers[i].xv;
      lasers[i].y += lasers[i].yv;

      // Calculate the distance travelled.
      lasers[i].dist += Math.sqrt(
        Math.pow(lasers[i].xv, 2) + Math.pow(lasers[i].yv, 2)
      );
    }

    // Handle the edge of screen.
    if (lasers[i].x < 0) {
      lasers[i].x = width;
    }

    if (lasers[i].x > width) {
      lasers[i].x = 0;
    }
    if (lasers[i].y < 0) {
      lasers[i].y = height;
    }

    if (lasers[i].y > height) {
      lasers[i].y = 0;
    }
  }
}
