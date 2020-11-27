// Types.
import { IEntity } from '../types';

export default class Particle implements IEntity {
  public angle: number;
  public radius: number;
  public x: number;
  public xv: number;
  public y: number;
  public yv: number;
  private readonly maxSize: number = 3;
  private readonly maxSpeed: number = 6;
  private readonly minSize: number = 1;
  private readonly minSpeed: number = 3;

  constructor(x: number, y: number) {
    this.angle = 0;
    this.radius = Math.floor(Math.random() * this.maxSize) + this.minSize;
    this.x = x;
    this.xv = this.randomVertice();
    this.y = y;
    this.yv = this.randomVertice();
  }

  /**
   * Returns a random vertice.
   * @return {number} a random vertice, positive or negative.
   */
  private randomVertice(): number {
    const multiplier: number = Math.floor(Math.random() * 2) === 1 ? 1 : -1;

    return (
      (Math.floor(Math.random() * this.maxSpeed) - this.minSpeed) * multiplier
    );
  }
}
