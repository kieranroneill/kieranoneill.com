// Classes.
import Particle from './Particle';

export default class Explosion {
  public particles: Particle[];
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.particles = [];
    this.x = x;
    this.y = y;

    for (let i: number = 0; i < 20; i++) {
      this.particles.push(new Particle(this.x, this.y));
    }
  }
}
