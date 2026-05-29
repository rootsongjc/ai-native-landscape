---
name: Flash Linear Attention (fla)
slug: flash-linear-attention
homepage: https://pypi.org/project/flash-linear-attention/
repo: https://github.com/fla-org/flash-linear-attention
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
description: 基于 Triton 的 PyTorch 库，提供高效线性注意力内核与模型组件。
logo: ''
author: fla-org
ossDate: '2023-12-20T06:50:18.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

`fla` 提供一套 Triton 优化的线性注意力实现与模型组件，面向高效训练与推理，兼容 NVIDIA/AMD/Intel 平台，适用于需要长上下文或低内存占用的场景。

## 主要特性

- 丰富的线性注意力内核与模型（如 GLA、DeltaNet、Mamba 等）。
- Triton 和 fused 模块提升内存与计算效率。
- 与 Hugging Face `transformers` 集成，提供示例与基准工具。

## 使用场景

- 在大型模型中替换标准 Attention 以降低显存占用。
- 长上下文任务和高效生成的研究与工程部署。

## 技术特点

- Triton 内核、融合算子与高效损失实现。
- 支持混合模型（standard + linear attention）的灵活配置。
