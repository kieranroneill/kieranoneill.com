// Constants.
import { GameConstants } from '../constants';

// Theme.
import { typography } from '../../../theme';

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
  ctx.font = `small-caps ${GameConstants.FONT_SIZE}px ${typography.primaryFontFamily}`;
  ctx.fillText(text, width / 2, height * 0.75);
}
