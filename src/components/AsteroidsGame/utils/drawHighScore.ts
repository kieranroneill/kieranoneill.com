// Themes.
import palette from '../../../theme/palette';

// Constants
import { GameConstants, ShipConstants } from '../constants';

export default function drawHighScore(
  ctx: CanvasRenderingContext2D,
  highScore: number,
  width: number
): void {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = palette.greyScale.white;
  ctx.font = `${GameConstants.FONT_SIZE * 0.75}px ${GameConstants.FONT_TYPE}`;
  ctx.fillText(`Highest: ${highScore}`, width / 2, ShipConstants.SIZE);
}
