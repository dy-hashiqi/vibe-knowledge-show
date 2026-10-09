export class FarLayer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    for(let i=0;i<120;i++){
      this.particles.push({
        x:Math.random()*1920,
        y:Math.random()*1080,
        r:Math.random()*1.2+0.2,
        speedX:(Math.random()-0.5)*0.25,
        speedY:(Math.random()-0.5)*0.25,
        baseAlpha:Math.random()*0.4+0.15
      })
    }
  }

  update(cameraX = 0, cameraY = 0, theme) {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0,0,w,h);
    const [r,g,b] = theme.farParticle;

    for(const p of this.particles){
      p.x += p.speedX;
      p.y += p.speedY;
      if(p.x<0) p.x=w;
      if(p.x>w) p.x=0;
      if(p.y<0) p.y=h;
      if(p.y>h) p.y=0;

      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${r},${g},${b},${p.baseAlpha})`;
      ctx.fill();
    }
  }
}

export class MidLayer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.lines = [];
    for(let i=0;i<45;i++){
      this.lines.push({
        x1:Math.random()*1920,
        y1:Math.random()*1080,
        x2:Math.random()*1920,
        y2:Math.random()*1080,
        speed: (Math.random()-0.5)*0.15,
        baseAlpha:Math.random()*0.22+0.08
      })
    }
  }

  update(cameraX = 0, cameraY = 0, theme) {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0,0,w,h);
    const [r,g,b] = theme.midLine;

    for(const line of this.lines){
      line.x1 += line.speed;
      line.y1 += line.speed;
      line.x2 += line.speed;
      line.y2 += line.speed;
      if(line.x1>w) line.x1 = 0;
      if(line.y1>h) line.y1 = 0;
      if(line.x2>w) line.x2 = 0;
      if(line.y2>h) line.y2 = 0;

      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.strokeStyle = `rgba(${r},${g},${b},${line.baseAlpha})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }
  }
}

export class NearLayer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    for(let i=0;i<60;i++){
      this.particles.push({
        x:Math.random()*1920,
        y:Math.random()*1080,
        r:Math.random()*2.2+0.6,
        speedX:(Math.random()-0.5)*0.45,
        speedY:(Math.random()-0.5)*0.45,
        baseAlpha:Math.random()*0.5+0.2
      })
    }
  }

  update(cameraX = 0, cameraY = 0, theme) {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0,0,w,h);
    const [r,g,b] = theme.nearPoint;

    for(const p of this.particles){
      p.x += p.speedX;
      p.y += p.speedY;
      if(p.x<0) p.x=w;
      if(p.x>w) p.x=0;
      if(p.y<0) p.y=h;
      if(p.y>h) p.y=0;

      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${r},${g},${b},${p.baseAlpha})`;
      ctx.fill();
    }
  }
}
