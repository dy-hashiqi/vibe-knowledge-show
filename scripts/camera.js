export class Camera {
  constructor(container) {
    this.container = container;
    this.x = 0;
    this.y = 0;
    this.scale = 1;
  }

  pushIn(targetScale, duration, delay=0) {
    gsap.to(this, {
      scale: targetScale,
      duration,
      delay,
      ease:"power2.out",
      onUpdate:()=>{
        this.container.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
      }
    })
  }

  pullOut(targetScale, duration, delay=0) {
    gsap.to(this, {
      scale: targetScale,
      duration,
      delay,
      ease:"power2.inOut",
      onUpdate:()=>{
        this.container.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
      }
    })
  }

  moveTo(x,y,duration,delay=0){
    gsap.to(this,{
      x,y,
      duration,
      delay,
      ease:"power2.inOut",
      onUpdate:()=>{
        this.container.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
      }
    })
  }
}
