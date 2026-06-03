---
name: Vibe
slug: vibe
homepage: https://thewh1teagle.github.io/vibe/
repo: https://github.com/thewh1teagle/vibe
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Utility
description: 一款支持完全离线运行的跨平台音视频转录工具，强调隐私保护与批量处理能力。
author: thewh1teagle
ossDate: '2024-01-08T03:29:06.000Z'
featured: false
status: tracked
---

## 简介

Vibe 是一款面向隐私的跨平台音视频转录工具，支持在本地（Windows / macOS / Linux）离线运行，使用 Whisper 等模型实现多语言识别，并提供图形界面与命令行模式以适配不同使用场景。

## 主要特性

- 完全离线转录，确保音频/视频数据不出设备。
- 支持批量处理、多种导出格式（SRT/VTT/TXT/HTML/PDF 等）和实时预览。
- 提供 GUI、CLI 与 HTTP API，支持模型参数自定义与本地模型集成。

## 使用场景

- 隐私敏感的转录场景，例如会议记录、法律证据或医疗音频处理。
- 大批量音视频字幕生成与后期处理工作流自动化。
- 需要本地实时转录或嵌入式转录服务的产品原型。

## 技术特点

- 使用 OpenAI Whisper 等模型作为识别后端，同时支持 GPU 加速与多平台优化（Vulkan / CoreML）。
- 提供 TypeScript / Rust / Svelte 的跨平台桌面应用与可选的服务器模式，包含 Swagger 文档的 HTTP API。
- MIT 许可并由社区积极维护，包含丰富的文档与可配置的模型下载机制。
