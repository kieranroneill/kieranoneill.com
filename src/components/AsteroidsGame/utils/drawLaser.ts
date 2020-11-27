// Constants.
import { ShipConstants } from '../constants';

// Themes.
import palette from '../../../theme/palette';

// Types.
import { ILaser } from '../types';

export default function drawLaser(
  ctx: CanvasRenderingContext2D,
  laser: ILaser
): void {
  ctx.fillStyle = palette.greyScale.white;
  ctx.beginPath();
  ctx.arc(laser.x, laser.y, ShipConstants.SIZE / 15, 0, Math.PI * 2, false);
  ctx.fill();
}
