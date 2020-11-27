// Constants.
import { GameConstants } from '../constants';

// Types.
import { IEntity } from '../types';

export default class Asteroid implements IEntity {
  public angle: number;
  public offsets: number[];
  public radius: number;
  public vertices: number;
  public x: number;
  public xv: number;
  public y: number;
  public yv: number;

  constructor(x: number, y: number, radius: number, level: number) {
    const jaggedness: number = 0.4; // Jaggedness of the asteroids (0 = none, 1 = lots);
    const multiplier: number = 1 + 0.1 * level;
    const speed: number = 30; // Starting speed of asteroids.
    const vertices: number = 10; // Average number of vertices on each asteroid.

    this.x = x;
    this.y = y;
    this.xv =
      ((Math.random() * speed * multiplier) / GameConstants.FPS) *
      (Math.random() < 0.5 ? 1 : -1);
    this.yv =
      ((Math.random() * speed * multiplier) / GameConstants.FPS) *
      (Math.random() < 0.5 ? 1 : -1);
    this.angle = Math.random() * Math.PI * 2; // in radians.
    this.radius = radius;
    this.offsets = [];
    this.vertices = Math.floor(Math.random() * (vertices + 1) + vertices / 2);

    for (let i: number = 0; i < this.vertices; i++) {
      this.offsets.push(Math.random() * jaggedness * 2 + 1 - jaggedness);
    }
  }
}
