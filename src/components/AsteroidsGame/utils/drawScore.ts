// Constants.
import { GameConstants, ShipConstants } from '../constants';

// Themes.
import palette from '../../../theme/palette';

export default function drawScore(
  ctx: CanvasRenderingContext2D,
  score: number,
  width: number
): void {
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = palette.greyScale.white;
  ctx.font = `${GameConstants.FONT_SIZE}px ${GameConstants.FONT_TYPE}`;
  ctx.fillText(
    `Score: ${score.toString()}`,
    width - ShipConstants.SIZE / 2,
    ShipConstants.SIZE
  );
}
