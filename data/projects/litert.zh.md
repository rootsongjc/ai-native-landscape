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
author: Google
ossDate: '2024-09-04T03:33:35Z'
featured: false
status: tracked
---

LiteRT 是 Google 的端侧 ML 推理框架，是 TensorFlow Lite 的继任者，专为在边缘平台上高性能部署机器学习和生成式 AI 模型而设计。LiteRT V1 保持与经典 TFLite API 的向后兼容性，V2 则引入了异步执行、自动加速器选择和高效 I/O 缓冲处理。

## 核心特性

- **跨平台支持**，覆盖 Android、iOS、Linux、macOS 和 Windows，并计划扩展到 Web 和 IoT 平台
- **统一的 GPU 和 NPU 加速路径**，V2 中的自动加速器选择可最大化硬件利用率
- **真正的异步执行**和零拷贝缓冲区互操作，减少延迟并提高吞吐量
- **模块化运行时架构**，支持多后端和自定义 delegate 以实现灵活扩展
- **向后兼容** TensorFlow Lite 的 V1 API，确保现有工作负载的平滑迁移

## 使用场景

- 在移动应用中以低延迟运行实时分割、检测和语音模型
- 在计算和功耗有限的嵌入式和边缘设备上部署优化的 ML 模型
- 量化或紧凑型生成式模型的端侧推理，支持 GPU 和 NPU 加速
- 构建在本地处理数据、不将数据上传到云端的隐私保护应用

## 技术特点

- 提供 Docker 和 Bazel/CMake 构建指南，便于交叉编译和产物生成
- 采用 Apache-2.0 许可证，包含示例应用和迁移指南以简化从 TFLite 工作流的过渡
- 硬件加速索引充分利用 CPU 和 GPU 资源，实现最优性能
