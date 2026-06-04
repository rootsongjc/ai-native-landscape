---
name: FlashMLA
slug: flashmla
homepage: null
repo: https://github.com/deepseek-ai/flashmla
license: MIT
category: inference-serving
subCategory: gpu-acceleration
tags:
  - Framework
description: 高效的多头潜在注意力（Multi-head Latent Attention）内核，旨在为大规模 Transformer 推理与训练提供更快、更节省内存的注意力实现。
author: DeepSeek
ossDate: '2025-02-21T06:31:27.000Z'
featured: false
status: tracked
---
## 简介

FlashMLA 是一个面向大规模 Transformer 的高性能注意力内核实现，提供高效的多头潜在注意力（Multi-head Latent Attention）算子。
它通过精细化内存与计算策略，减少注意力计算的内存占用并提升吞吐量，适合在训练和推理阶段对大模型进行加速优化。

## 主要特性

- 高效的多头潜在注意力内核，实现更低的显存占用。
- 面向 GPU 的优化实现，支持 C++/CUDA 代码路径。
- 与常见 Transformer 框架兼容，便于集成到训练与推理流水线中。

## 使用场景

- 大规模语言模型训练时的注意力算子替换与加速。
- 推理阶段在受限显存环境中提升吞吐量和降低延迟。
- 作为自研或开源模型推理栈中的优化组件，用于高性能推理服务。

## 技术特点

- 基于高性能 C++/CUDA 实现，关注内存布局与计算并行性优化。
- 采用精细尺度的数值与缩放策略以支持更高效的 FP16/FP8 运算。
- 提供清晰的接口与示例，便于在 PyTorch 等框架中封装与调用。
