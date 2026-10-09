export const timelineData = [
  {
    start: 2,
    end: 6,
    text: "为什么海水看起来是蓝色的？",
    type: "title",
    theme: "deepSpace",
    camera: { action: "pushIn", scale: 1.06, duration: 1.4 }
  },
  {
    start: 7,
    end: 12,
    text: "太阳光包含多种颜色的光",
    type: "content",
    theme: "deepSpace",
    camera: { action: "move", x: -12, y: -18, duration: 2 }
  },
  {
    start: 13,
    end: 19,
    text: "红光和橙光更容易被海水吸收",
    type: "content",
    theme: "cyberTeal",
    camera: { action: "pushIn", scale:1.1, duration:1.6 },
    image:{
      src: "./assets/redlight.png",
      x:960,
      y:600,
      width:380
    }
  },
  {
    start: 20,
    end: 26,
    text: "蓝光和紫光更容易被水分子散射",
    type: "content",
    theme: "cyberTeal",
    camera: { action: "move", x:18, y:14, duration:2 },
    image:{
      src: "./assets/bluelight.png",
      x:960,
      y:600,
      width:420
    }
  },
  {
    start: 27,
    end: 34,
    text: "我们接收到的散射光偏蓝",
    type: "content",
    theme: "monoDark",
    camera: { action: "pushIn", scale:1.04, duration:1.2 }
  },
  {
    start: 35,
    end: 42,
    text: "近海偏黄绿，与泥沙和浮游生物有关",
    type: "content",
    theme: "warmGold",
    camera: { action: "move", x:-10, y:20, duration:2 },
    image:{
      src: "./assets/sea_coast.png",
      x:960,
      y:600,
      width:460
    }
  },
  {
    start: 43,
    end: 50,
    text: "海水本身其实是透明的",
    type: "content",
    theme: "deepSpace",
    camera: { action: "pushIn", scale:1.12, duration:1.8 }
  },
  {
    start: 51,
    end: 58,
    text: "Vibe Knowledge Show",
    type: "ending",
    theme: "deepSpace",
    camera: { action: "pullOut", scale:1.0, duration:1.4 }
  }
];
