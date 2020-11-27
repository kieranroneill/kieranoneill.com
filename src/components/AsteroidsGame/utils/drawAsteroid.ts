// Constants.
import { ShipConstants } from '../constants';

// Models.
import { Asteroid } from '../models';

// Themes.
import palette from '../../../theme/palette';

export default function drawAsteroid(
  ctx: CanvasRenderingContext2D,
  asteroid: Asteroid
): void {
  ctx.strokeStyle = palette.ui.slateGrey;
  ctx.lineWidth = ShipConstants.SIZE / 30;

  // Draw the path.
  ctx.beginPath();
  ctx.moveTo(
    asteroid.x +
      asteroid.radius * asteroid.offsets[0] * Math.cos(asteroid.angle),
    asteroid.y +
      asteroid.radius * asteroid.offsets[0] * Math.sin(asteroid.angle)
  );

  // Draw the polygon.
  for (let i: number = 1; i < asteroid.vertices; i++) {
    ctx.lineTo(
      asteroid.x +
        asteroid.radius *
          asteroid.offsets[i] *
          Math.cos(asteroid.angle + (i * Math.PI * 2) / asteroid.vertices),
      asteroid.y +
        asteroid.radius *
          asteroid.offsets[i] *
          Math.sin(asteroid.angle + (i * Math.PI * 2) / asteroid.vertices)
    );
  }
  ctx.closePath();
  ctx.stroke();
}
