// Themes.
import palette from '../../../theme/palette';

export default function drawSpace(
  ctx: CanvasRenderingContext2D,
  height: number,
  width: number
): void {
  ctx.fillStyle = palette.greyScale.black;
  ctx.fillRect(0, 0, width, height);
}
