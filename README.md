# Vibe Knowledge Show v2.4

> MIT License | 1080P 科普短视频网页渲染模板，基于 Hyperframe + GSAP
> 鼓点同步动画 + 多层粒子背景 + 多主题色彩切换 + 图片素材插入

## ✨ Features

- 1920×1080 视频渲染，Hyperframe 导出无音频 MP4
- 三层视差粒子背景
- 时间线系统：字幕、镜头、图片，配置时间轴
- 鼓点事件系统，支持 6 种动画动作
- 4 套预设主题，支持段落平滑切换 + 鼓点瞬时色彩闪变
- 图片素材：段落自动淡入淡出，鼓点触发图片弹跳放大

### 🥁 全部鼓点动作

- `pushIn`：镜头微推进
- `textPop`：文字弹跳
- `pulse`：粒子脉冲爆发
- `flash`：画面白色闪光
- `colorFlash`：瞬时色彩闪变（附带 theme 参数）
- `imagePop`：图片弹跳放大

### 🎨 预设主题

- `deepSpace`：深空蓝（默认，科技科普）
- `warmGold`：暖金黄昏（人文历史）
- `monoDark`：黑白极简（硬核数据）
- `cyberTeal`：青冷赛博（AI 前沿科技）

## 📦 环境依赖

- Node.js >= 18
- FFmpeg（Hyperframe 渲染视频需要）

## 🚀 使用

```bash
# 安装依赖
npm install

# 本地预览实时动画
npm run dev

# 渲染导出 1080p MP4（无音频）
npm run render
```

## 📝 工作流

1. 在 `scripts/timeline.js` 编写字幕、镜头、图片配置
2. 在 `scripts/beatmap.js` 根据 BGM 标记鼓点时间和动画
3. 本地预览调试
4. 渲染视频，使用剪映合并 BGM 音频

## 📁 目录说明

- `index.html`：主入口
- `scripts/timeline.js`：时间线（字幕/镜头/图片）
- `scripts/beatmap.js`：鼓点动画事件
- `assets/`：存放图片素材
- `hyperframe.config.js`：渲染配置

## License

MIT
