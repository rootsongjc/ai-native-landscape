---
name: AutoSubs
slug: auto-subs
homepage: https://tom-moroney.com/auto-subs/
repo: https://github.com/tmoroney/auto-subs
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - Video
description: 在本地或与 DaVinci Resolve 集成，快速生成可编辑且精确的字幕。
author: Tom Moroney
ossDate: '2023-03-15T01:51:06Z'
featured: false
status: tracked
---
AutoSubs 是一款 AI 驱动的本地字幕生成工具，可直接连接 DaVinci Resolve、Premiere 和 After Effects。它支持多语言转录、说话人分离以及可视化字幕编辑器，所有功能均在设备本地运行，无需云端依赖，最大程度保护隐私。

## 转录与翻译

- 快速准确的多语言语音转文字，支持自动语言检测
- 说话人分离，自动识别并区分不同说话人
- 英文翻译，支持灵活的多行字幕显示
- 多种语音识别与说话人分离模型可选

## 可视化字幕编辑器

- 按说话人自定义样式，支持字体、颜色与位置调整
- 精确时间轴调整，配合波形可视化
- 多种导出格式，包括 SRT、ASS、VTT 及 DaVinci Resolve 原生格式
- 支持长内容与多集项目的批量处理

## 视频编辑器集成

- 直接连接 DaVinci Resolve，将样式化字幕发送到时间线
- Premiere Pro 和 After Effects 插件支持
- 往返工作流，保留字幕样式与时间轴
- 在编辑环境中实时预览

## 技术设计

- Rust 后端，高性能、低内存占用
- Tauri/TypeScript 跨平台前端，覆盖 Windows、macOS（Intel / Apple Silicon）与 Linux
- 一键安装，无需 Python 或命令行配置
- 全部本地处理，数据不发送至外部服务器
