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

## 简介

LiteRT 是 Google 的端侧 ML 推理框架，是 TensorFlow Lite 的继任者，专为在边缘平台上高性能部署机器学习和生成式 AI 模型而设计。LiteRT V1 保持与经典 TFLite API 的向后兼容性，V2 则引入了异步执行、自动加速器选择和高效 I/O 缓冲处理。

## 主要特性

该框架支持 Android、iOS、Linux、macOS 和 Windows，并计划扩展到 Web 和 IoT 平台。它提供统一的 GPU 和 NPU 加速路径，V2 中的自动加速器选择可最大化硬件利用率。真正的异步执行和零拷贝缓冲区互操作减少了延迟，提高了高要求端侧工作负载的吞吐量。

## 使用场景

开发者使用 LiteRT 在移动应用中以低延迟运行实时分割、检测和语音模型。它支持在计算和功耗有限的嵌入式和边缘设备上部署优化的 ML 模型。该框架还支持量化或紧凑型生成式模型的端侧推理，为 GPU 和 NPU 加速提供运行时基础。

## 技术特点

LiteRT 采用模块化运行时架构，支持多后端和自定义 delegate。它提供 Docker 和 Bazel/CMake 构建指南，便于交叉编译和产物生成。项目采用 Apache-2.0 许可证，包含示例应用和迁移指南，以简化从现有 TFLite 工作流的过渡。
