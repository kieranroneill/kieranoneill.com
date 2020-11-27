// Models.
import { Explosion, Particle } from '../models';

// Themes.
import palette from '../../../theme/palette';

export default function drawExplosion(
  ctx: CanvasRenderingContext2D,
  explosion: Explosion
): void {
  const particles: Particle[] = explosion.particles.slice();

  for (let i: number = 0; i < explosion.particles.length; i++) {
    const particle: Particle = explosion.particles[i];

    if (particle.radius <= 0) {
      particles.splice(i, 1);

      continue;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, Math.PI * 2, 0, false);
    ctx.closePath();
    ctx.fillStyle = palette.greyScale.white;
    ctx.fill();

    // Update
    particle.x += particle.xv;
    particle.y += particle.yv;
    particle.radius -= 0.1;
  }

  explosion.particles = particles;
}
