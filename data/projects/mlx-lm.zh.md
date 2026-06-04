---
name: MLX LM
slug: mlx-lm
homepage: null
repo: https://github.com/ml-explore/mlx-lm
license: MIT
category: inference-serving
subCategory: inference-runtimes
tags:
  - LLM
  - Utility
description: 在 Apple Silicon 上运行与微调 LLM 的 Python 工具包，支持模型量化、分布式推理与 Hugging Face 集成。
author: ml-explore
ossDate: '2025-03-11T16:38:30.000Z'
featured: false
status: tracked
---

MLX LM 是一个面向 Apple Silicon 的 LLM 工具包，提供命令行与 Python API，用于生成、流式输出、模型量化与上传到 Hugging Face。它支持长上下文生成、缓存机制与低秩/全模型微调（包含量化模型的训练与分发），适合需要在本地高效运行/微调开源 LLM 的开发者与研究者。

## 主要特性

- 丰富的命令行与 Python API：`generate`、`chat`、`convert` 等命令与流式接口。
- 模型量化与上传：支持将模型量化为 4-bit 并上传到 Hugging Face 社区仓库。
- 长上下文与缓存：旋转固定大小的键值缓存与 prompt 缓存以优化长序列生成。

## 使用场景

- 在 Apple Silicon 上本地运行与微调 LLM（节省成本并保护数据隐私）。
- 研究与原型开发：快速试验量化、微调与不同采样策略。
- 生产化前的模型压缩与上传工作流。

## 技术特点

- 完整的 Python 包（`mlx_lm`），支持 streaming、sampling 与自定义 logits processors。
- 与 Hugging Face Hub 集成，支持批量转换、量化与上传流程。
- 针对大模型的内存优化和分布式支持，提升在受限硬件上的可用性。
