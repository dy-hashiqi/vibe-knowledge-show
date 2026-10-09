export class BeatController {
  constructor({ camera, layers, textWrap, themeManager, imageManager }) {
    this.camera = camera;
    this.layers = layers;
    this.textWrap = textWrap;
    this.themeManager = themeManager;
    this.imageManager = imageManager;
    this.fired = new Set();
  }

  reset() {
    this.fired.clear();
  }

  update(currentTime, beatmap) {
    beatmap.forEach((beat, index) => {
      if (this.fired.has(index)) return;
      if (currentTime >= beat.time) {
        this.fired.add(index);
        this.trigger(beat.action, beat.theme);
      }
    });
  }

  trigger(action, flashTheme) {
    switch (action) {
      case "pulse":
        this.layers.pulse(1.3);
        break;
      case "pushIn":
        this.camera.pushIn(1.04, 0.4);
        break;
      case "flash":
        this.layers.flash();
        break;
      case "textPop":
        this.textPop();
        break;
      case "colorFlash":
        this.themeManager.colorFlash(flashTheme, 0.22);
        break;
      case "imagePop":
        this.imageManager.popImageAll();
        break;
    }
  }

  textPop() {
    const items = this.textWrap.querySelectorAll(".text-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { scale: 1 },
        { scale: 1.06, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.out" }
      );
    });
  }
}
