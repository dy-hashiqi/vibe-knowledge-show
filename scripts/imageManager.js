export class ImageManager {
  constructor(container) {
    this.container = container;
    this.images = [];
  }

  addImage(config) {
    const imgObj = {
      src: config.src,
      x: config.x ?? 960,
      y: config.y ?? 540,
      width: config.width ?? 400,
      start: config.start,
      end: config.end,
      scaleStart: config.scaleStart ?? 0.7,
      scaleEnd: config.scaleEnd ?? 1,
      opacityStart: config.opacityStart ?? 0,
      opacityEnd: config.opacityEnd ?? 1,
      element: null
    };

    const imgEl = document.createElement("img");
    imgEl.src = imgObj.src;
    imgEl.style.position = "absolute";
    imgEl.style.left = `${imgObj.x}px`;
    imgEl.style.top = `${imgObj.y}px`;
    imgEl.style.width = `${imgObj.width}px`;
    imgEl.style.transform = `translate(-50%,-50%) scale(${imgObj.scaleStart})`;
    imgEl.style.opacity = imgObj.opacityStart;
    imgEl.style.pointerEvents = "none";
    imgEl.style.zIndex = "25";
    imgEl.style.willChange = "transform, opacity";
    this.container.appendChild(imgEl);
    imgObj.element = imgEl;
    this.images.push(imgObj);

    gsap.fromTo(imgEl,
      { scale: imgObj.scaleStart, opacity: imgObj.opacityStart },
      {
        scale: imgObj.scaleEnd,
        opacity: imgObj.opacityEnd,
        duration: 0.7,
        ease: "power2.out",
        delay: imgObj.start
      }
    );
    gsap.to(imgEl,
      {
        scale: 0.5,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in",
        delay: imgObj.end - 0.45
      }
    );
  }

  popImageAll() {
    this.images.forEach(imgObj => {
      const img = imgObj.element;
      gsap.fromTo(img,
        { scale: 1 },
        { scale: 1.15, duration:0.12, yoyo:true, repeat:1, ease:"power2.out" }
      )
    })
  }
}
