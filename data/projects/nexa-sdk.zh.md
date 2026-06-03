---
name: Nexa SDK
slug: nexa-sdk
homepage: https://docs.nexa.ai/
repo: https://github.com/nexaai/nexa-sdk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Inference
  - ML Platform
description: 在设备上运行多模态与文本模型的统一推理 SDK，支持 CPU/GPU/NPU 与多种模型格式。
author: NexaAI
ossDate: '2024-08-16T20:13:07.000Z'
featured: false
status: tracked
---

## 简介

Nexa SDK 是一个面向多设备的一体化推理框架，支持在 CPU、GPU 与各类 NPU（如 Qualcomm、Intel、Apple ANE）上运行 GGUF、MLX 与 .nexa 等模型格式。它提供 OpenAI 兼容的 API 服务、命令行工具与多语言绑定（Python/Android/iOS），便于在本地或边缘设备上快速部署与推理。

## 主要特性

- 支持多后端（CUDA/Metal/Vulkan/NPU）和多种模型格式（GGUF/MLX/.nexa）。
- 内置 OpenAI 接口兼容层与流式输出，便于集成现有应用。
- 提供命令行工具与丰富绑定，支持离线推理、模型缓存与本地后端加速。

## 使用场景

- 在笔记本或边缘设备上做多模态交互与本地推理，降低云端依赖。
- 在需要低延迟或受限网络环境的产品中部署 LLM/VLM 推理服务。
- 开发者利用 CLI 与 SDK 快速验证模型并构建本地原型或演示。

## 技术特点

- 支持 NPU 优化与专用引擎（NexaML Turbo），提高在 NPU 上的推理效率。
- 兼容 Hugging Face 模型库（直接运行 GGUF/MLX 模型），并支持模型格式转换与加速插件。
- 提供统一接口抽象，屏蔽不同后端差异，简化跨平台部署流程。
