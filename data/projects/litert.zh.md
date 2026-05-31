---
name: LiteRT
slug: litert
homepage: https://ai.google.dev/edge/litert/next/overview
repo: https://github.com/google-ai-edge/litert
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Edge
  - Inference
  - Runtime
description: 面向边缘设备的高性能、可扩展轻量级深度学习推理运行时。
logo: ''
author: Google
ossDate: '2024-09-04T03:33:35Z'
featured: false
status: tracked
---

## 详细介绍

LiteRT 是 Google 在 TensorFlow Lite 基础上演进出的轻量级推理运行时，专为资源受限的边缘设备设计，提供高性能、低延迟的机器学习与生成式模型推理能力。LiteRT V1 兼容传统 TFLite API，适配现有应用；LiteRT V2 引入了异步执行、自动加速器选择与高效 I/O 缓冲等新特性，旨在简化在移动、嵌入式与桌面平台上利用 GPU/NPU 等硬件加速的集成流程。

## 主要特性

- 跨平台支持：覆盖 Android、iOS、Linux、macOS、Windows 等常见平台，逐步扩展到 Web 与 IoT 场景。
- 硬件加速：提供统一的 NPU/GPU 加速接入路径，并在 V2 中通过自动加速器选择降低集成复杂度。
- 异步与高效 I/O：V2 支持真异步执行与零拷贝缓冲区互操作，减少延迟并提升吞吐。
- 兼容性与生态：兼容 TFLite API 路径，同时与 LiteRT-LM、ai-edge-torch 等生态工具协同。

## 使用场景

- 移动端实时推理：在 Android/iOS 应用中运行图像分割、检测或语音模型，追求低延迟体验。
- 嵌入式与边缘设备：在有限算力设备上部署优化后的模型，兼顾能耗与性能。
- 生成式模型加速：为小型或经过量化的生成式模型提供更低延迟的本地推理方案。
- 性能优化与硬件适配：在需要利用 GPU/NPU 提升吞吐和响应速度的产品中作为运行时基础。

## 技术特点

- 运行时设计：模块化运行时架构，支持多后端替换与自定义 delegate。
- 构建与部署：提供 Docker 与 Bazel/CMake 构建说明，便于交叉编译与产物生成。
- 开源许可：采用 Apache-2.0 许可证，便于企业与开源社区采用与贡献。
- 面向开发者：包含样例工程与迁移路径，降低从现有 TFLite 生态迁移的成本。
