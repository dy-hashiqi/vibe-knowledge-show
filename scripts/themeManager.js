// 预设主题库
export const themes = {
  deepSpace: {
    bg: "#07080d",
    farParticle: [120, 170, 255],
    midLine: [160, 200, 255],
    nearPoint: [180, 220, 255],
    title: "#9fd1ff",
    content: "#e8edff",
    vignette: 0.55
  },
  warmGold: {
    bg: "#140f07",
    farParticle: [255, 200, 130],
    midLine: [255, 215, 160],
    nearPoint: [255, 228, 190],
    title: "#ffd29c",
    content: "#fff3e8",
    vignette: 0.6
  },
  monoDark: {
    bg: "#0c0c0c",
    farParticle: [160,160,160],
    midLine: [200,200,200],
    nearPoint: [230,230,230],
    title: "#cccccc",
    content: "#eeeeee",
    vignette: 0.65
  },
  cyberTeal: {
    bg: "#050b0e",
    farParticle: [80, 210, 200],
    midLine: [120, 230, 220],
    nearPoint: [160, 255, 245],
    title: "#70e6dd",
    content: "#d6fff9",
    vignette: 0.5
  }
};

export class ThemeManager {
  constructor(initialThemeKey = "deepSpace") {
    this.current = structuredClone(themes[initialThemeKey]);
    this.target = structuredClone(themes[initialThemeKey]);
    this.transitionSpeed = 0.018;
    this.flashOverride = null;
  }

  setTheme(themeKey, duration = 0.8) {
    const t = themes[themeKey];
    this.target = structuredClone(t);
    this.transitionSpeed = 1 / (duration * 60);
  }

  colorFlash(flashThemeKey, flashTime = 0.22) {
    this.flashOverride = themes[flashThemeKey];
    setTimeout(()=>{
      this.flashOverride = null;
    }, flashTime * 1000);
  }

  update() {
    if(this.flashOverride) {
      return this.flashOverride;
    }
    for(const key in this.current) {
      const val = this.current[key];
      const targetVal = this.target[key];
      if(Array.isArray(val)){
        for(let i=0;i<3;i++){
          this.current[key][i] += (targetVal[i] - val[i]) * this.transitionSpeed;
        }
      } else if(typeof val === "string" && val.startsWith("#")){
        this.current[key] = this.target[key];
      } else {
        this.current[key] += (targetVal - val) * this.transitionSpeed;
      }
    }
    return this.current;
  }
}
