// Constants.
import { GameConstants, ShipConstants, SpaceConstants } from '../constants';

// Models.
import { Ship } from '../models';

// Themes.
import palette from '../../../theme/palette';

// Utils.
import drawBasicShip from './drawBasicShip';

export default function drawShip(
  ctx: CanvasRenderingContext2D,
  ship: Ship
): void {
  const thrust: number = 5; // Acceleration of the ship in pixels per second per second.

  drawBasicShip(ctx, {
    angle: ship.angle,
    radius: ship.radius,
    x: ship.x,
    y: ship.y,
  });

  if (ship.thrusting) {
    ship.thrust.x += (thrust * Math.cos(ship.angle)) / GameConstants.FPS;
    ship.thrust.y -= (thrust * Math.sin(ship.angle)) / GameConstants.FPS;

    if (ship.blinkNum % 2 === 0) {
      ctx.fillStyle = palette.ui.red;
      ctx.strokeStyle = palette.ui.yellow;
      ctx.lineWidth = ShipConstants.SIZE / 10;
      ctx.beginPath();
      ctx.moveTo(
        // rear left
        ship.x -
          ship.radius *
            ((2 / 3) * Math.cos(ship.angle) + 0.5 * Math.sin(ship.angle)),
        ship.y +
          ship.radius *
            ((2 / 3) * Math.sin(ship.angle) - 0.5 * Math.cos(ship.angle))
      );
      ctx.lineTo(
        // rear centre (behind the ship)
        ship.x - ((ship.radius * 5) / 3) * Math.cos(ship.angle),
        ship.y + ((ship.radius * 5) / 3) * Math.sin(ship.angle)
      );
      ctx.lineTo(
        // rear right
        ship.x -
          ship.radius *
            ((2 / 3) * Math.cos(ship.angle) - 0.5 * Math.sin(ship.angle)),
        ship.y +
          ship.radius *
            ((2 / 3) * Math.sin(ship.angle) + 0.5 * Math.cos(ship.angle))
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  } else {
    // Apply friction (slow the ship down when not thrusting).
    ship.thrust.x -=
      (SpaceConstants.FRICTION * ship.thrust.x) / GameConstants.FPS;
    ship.thrust.y -=
      (SpaceConstants.FRICTION * ship.thrust.y) / GameConstants.FPS;
  }
}
