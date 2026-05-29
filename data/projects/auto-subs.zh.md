---
name: AutoSubs
slug: auto-subs
homepage: https://tom-moroney.com/auto-subs/
repo: https://github.com/tmoroney/auto-subs
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - Video
description: 在本地或与 DaVinci Resolve 集成，快速生成可编辑且精确的字幕。
logo: ''
author: Tom Moroney
ossDate: '2023-03-15T01:51:06Z'
featured: false
status: tracked
---

## 详细介绍

AutoSubs 是一款面向创作者的本地桌面应用，提供一键生成字幕的能力，既可以作为独立程序运行，也可与 DaVinci Resolve 深度集成。它支持多语言转录、说话人分离与英文翻译，提供可视化的字幕编辑器与多轨输出，旨在提升字幕制作效率与准确性。

## 主要特性

- 快速准确的多语言转录与说话人分离。
- 支持英文翻译与多行字幕显示。
- 现代化的字幕编辑器，支持每说话人样式与导出多种格式。
- 一键安装器覆盖 Windows、macOS（Intel / Apple Silicon）与 Linux。

## 使用场景

- 视频创作者需要快速生成并编辑字幕以便发布。
- 在 DaVinci Resolve 中直接生成并回写样式化字幕。
- 转录会议记录、播客或讲座音频并导出时间轴化文本。
- 在无网络或需隐私保护的本地环境中离线生成字幕。

## 技术特点

AutoSubs 使用 Rust 后端来提升性能并降低内存占用，同时在前端采用 Tauri/TypeScript 提供跨平台桌面体验。它集成了多种语音识别模型与说话人分离算法，提供灵活的模型选择与高效的字幕定时精调能力。
