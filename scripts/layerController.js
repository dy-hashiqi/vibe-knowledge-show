export class LayerController {
  constructor(far, mid, near) {
    this.far = far;
    this.mid = mid;
    this.near = near;
    this.flashValue = 0;
  }

  pulse(strength = 1.3) {
    this.far.particles.forEach(p => {
      p.alpha = Math.min(1, p.baseAlpha * strength);
      p.r = Math.min(p.baseR * 2, p.baseR * strength);
    });
    this.near.particles.forEach(p => {
      p.alpha = Math.min(1, p.baseAlpha * strength);
      p.r = Math.min(p.baseR * 2.2, p.baseR * strength);
    });
    this.mid.lines.forEach(l => {
      l.alpha = Math.min(0.6, l.baseAlpha * strength);
    });
    setTimeout(()=>{
      this.far.particles.forEach(p => {
        p.alpha = p.baseAlpha;
        p.r = p.baseR;
      });
      this.near.particles.forEach(p => {
        p.alpha = p.baseAlpha;
        p.r = p.baseR;
      });
      this.mid.lines.forEach(l => l.alpha = l.baseAlpha);
    },300)
  }

  flash() {
    this.flashValue = 0.35;
  }

  update(cameraX, cameraY, theme) {
    this.far.update(cameraX, cameraY, theme);
    this.mid.update(cameraX, cameraY, theme);
    this.near.update(cameraX, cameraY, theme);

    if (this.flashValue > 0) {
      this.flashValue -= 0.025;
      this.drawFlash();
    }
  }

  drawFlash() {
    const ctx = this.near.ctx;
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.flashValue);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, this.near.canvas.width, this.near.canvas.height);
    ctx.restore();
  }
}
