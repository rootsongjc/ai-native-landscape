---
name: Handy
slug: handy
homepage: https://handy.computer/
repo: https://github.com/cjpais/handy
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Utility
description: 一款开源、本地化且可扩展的跨平台语音转文本桌面应用，注重隐私并支持 Whisper 与 Parakeet 等离线模型。
author: cjpais
ossDate: '2025-02-13T02:42:29.000Z'
featured: false
status: tracked
---

## 简介

Handy 是一款面向桌面的开源语音转文本工具，支持在本地运行 Whisper 与 Parakeet 模型，强调隐私与可扩展性，适用于 macOS、Windows 与 Linux 平台。

## 主要特性

- 本地化转录，支持 Whisper（多种规模）与 Parakeet V3，能在不用云服务的情况下完成转录。
- 跨平台桌面应用（Tauri + React + Rust），提供快捷键启动、VAD（静音检测）与剪贴板粘贴功能。
- 活跃的开源社区与清晰的构建说明，便于定制与贡献。

## 使用场景

- 需要离线、隐私保护的语音转文本场景（会议记录、即时文本输入）。
- 在资源受限或无法使用云服务的环境中进行语音输入。
- 作为开发者的可扩展基础，用于构建更复杂的本地语音工具链。

## 技术特点

- 使用 Tauri 框架结合 Rust 后端与 React 前端实现本地性能与现代 UI。
- 采用 whisper-rs 与 transcription-rs 等本地推理库，支持 GPU 加速与 CPU 优化模型。
- MIT 许可证，仓库包含发行版与安装说明。
