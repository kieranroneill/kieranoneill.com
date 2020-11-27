// Constants.
import { GameConstants, ShipConstants } from '../constants';

// Themes.
import { palette, typography } from '../../../theme';

export default function drawScore(
  ctx: CanvasRenderingContext2D,
  score: number,
  width: number
): void {
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = palette.greyScale.white;
  ctx.font = `${GameConstants.FONT_SIZE}px ${typography.primaryFontFamily}`;
  ctx.fillText(
    `Score: ${score.toString()}`,
    width - ShipConstants.SIZE / 2,
    ShipConstants.SIZE
  );
}
