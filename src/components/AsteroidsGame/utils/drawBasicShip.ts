// Constants.
import { AsteroidConstants } from '../constants';

// Themes.
import palette from '../../../theme/palette';

// Types.
import { IEntity } from '../types';

export default function drawBasicShip(
  ctx: CanvasRenderingContext2D,
  entity: IEntity,
  colour?: string
): void {
  ctx.strokeStyle = colour || palette.greyScale.white;
  ctx.lineWidth = AsteroidConstants.SIZE / 40;
  ctx.beginPath();
  ctx.moveTo(
    // Nose of the ship.
    entity.x + (4 / 3) * entity.radius * Math.cos(entity.angle),
    entity.y - (4 / 3) * entity.radius * Math.sin(entity.angle)
  );
  ctx.lineTo(
    // Rear left.
    entity.x -
      entity.radius *
        ((2 / 3) * Math.cos(entity.angle) + Math.sin(entity.angle)),
    entity.y +
      entity.radius *
        ((2 / 3) * Math.sin(entity.angle) - Math.cos(entity.angle))
  );
  ctx.lineTo(
    // Rear right.
    entity.x -
      entity.radius *
        ((2 / 3) * Math.cos(entity.angle) - Math.sin(entity.angle)),
    entity.y +
      entity.radius *
        ((2 / 3) * Math.sin(entity.angle) + Math.cos(entity.angle))
  );
  ctx.closePath();
  ctx.stroke();
}
