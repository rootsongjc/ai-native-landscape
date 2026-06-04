---
name: Cactus
slug: cactus
homepage: https://cactuscompute.com/docs
repo: https://github.com/cactus-compute/cactus
license: Other
category: inference-serving
subCategory: edge-local-inference
tags:
  - Dev Tools
  - LLM
  - Product
description: 面向手机的能效推理引擎与数值计算框架，优化 ARM CPU 执行以在移动设备上高效运行大模型。
author: cactus-compute
ossDate: '2025-04-23T14:33:43.000Z'
featured: false
status: tracked
---
Cactus 是一款面向手机和可穿戴设备的低延迟 AI 推理引擎与数值计算框架，由 cactus-compute 开发。它针对 ARM CPU 进行了深度优化，能够在极低功耗和内存占用下运行大语言模型，实现在终端设备上的本地 AI 推理而无需依赖云端连接。

## CPU 优先优化

- 针对 ARM 处理器深度调优，有效降低推理期间的电池消耗和发热
- 统一的 Cactus Graph 和 Cactus Kernels 提供零拷贝计算图
- SIMD 优化内核，在移动硬件上实现高吞吐推理
- 在部分工作负载中展现出优于 Llama.cpp 的 CPU-only 吞吐率和更小的模型体积

## 跨平台 SDK

- 提供 Flutter、React Native 和 Kotlin SDK，便于快速集成到各类移动应用中
- 在手机和可穿戴设备上直接运行聊天机器人、智能助手和快速生成任务，消除网络延迟
- 将高效深度学习推理嵌入移动应用，提供实时且保护隐私的 AI 体验
- 内置 Hugging Face 模型转换与基准测试工具，在发布前验证移动端性能

## API 与工具链

- 提供与 OpenAI 兼容的 C API 及 FFI 绑定，支持跨多种编程语言集成
- Python 工具链用于模型转换、测试脚本和完整的构建指南
- 完善的移动部署文档，显著降低上手门槛
