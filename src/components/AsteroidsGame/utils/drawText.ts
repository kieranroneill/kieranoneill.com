// Constants.
import { GameConstants } from '../constants';

export default function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  textOpacity: number,
  height: number,
  width: number
): void {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = `rgba(255, 255, 255, ${textOpacity})`;
  ctx.font = `small-caps ${GameConstants.FONT_SIZE}px ${GameConstants.FONT_TYPE}`;
  ctx.fillText(text, width / 2, height * 0.75);
}
