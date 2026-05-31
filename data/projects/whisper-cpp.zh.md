---
name: whisper.cpp
slug: whisper-cpp
homepage: null
repo: https://github.com/ggml-org/whisper.cpp
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - TTS
description: whisper.cpp 是 Whisper 的高性能本地实现，支持边缘设备与桌面平台上的语音识别部署。
logo: ''
author: ggml-org
ossDate: '2022-09-25T18:26:37.000Z'
featured: false
status: tracked
---

## 简介

whisper.cpp 是对 OpenAI Whisper 的轻量级 C/C++ 实现，强调无需复杂依赖即可在本地高效推理，支持从 Raspberry Pi 到 Apple Silicon 与多种 GPU 后端的广泛平台。

## 主要特性

- 纯 C/C++ 实现、零运行时依赖，便于嵌入式与跨平台部署。
- 支持多种后端加速（Vulkan / CUDA / Core ML / OpenVINO / Moore Threads 等）与量化模型以降低内存占用。
- 丰富示例（CLI、stream、wasm、bench、server）与可选绑定（Rust/JS/Java 等）。

## 使用场景

- 本地化语音转写与离线语音助手，适用于对隐私有严格要求的场景。
- 在资源受限设备（嵌入式、移动）上运行 ASR，或用于大规模离线批处理转写任务。
- 研究与工程试验：基准测试、量化实验与平台比较。

## 技术特点

- 采用 ggml 格式的模型权重，支持整数量化（Q5/Q4 等）与混合精度以降低内存与加速推理。
- 提供 C 风格 API 与多语言绑定，包含 Docker / CMake 构建流程与预构建二进制选项（XCFramework 等）。
- MIT 许可，社区活跃，持续维护与扩展平台支持。
