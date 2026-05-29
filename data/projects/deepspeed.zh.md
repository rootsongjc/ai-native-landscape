---
name: DeepSpeed
slug: deepspeed
homepage: https://www.deepspeed.ai/
repo: https://github.com/deepspeedai/deepspeed
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - ML Platform
description: 一个高性能的深度学习训练与推理优化库，可显著加速大规模模型的训练与推理并降低成本。
logo: ''
author: DeepSpeed 团队
ossDate: '2020-01-23T18:35:18.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

DeepSpeed 是微软开源的深度学习优化套件，专注于分布式训练、内存与推理效率（如 ZeRO、DeepSpeed-Inference、压缩技术等），帮助研究者和工程师以更低成本训练数十亿到数万亿参数的模型。

## 主要特性

- ZeRO 系列内存优化与分布式并行策略，支持大规模模型训练。  
- 高性能推理与模型压缩工具（ZeroQuant、XTC 等），显著降低延迟与模型大小。  
- 广泛的硬件与框架集成（PyTorch、Azure、NVIDIA/AMD/华为等）。

## 使用场景

- 在有限 GPU 资源上训练高参数模型以降低硬件成本。  
- 大规模分布式训练与推理场景，如 LLM 训练、推理服务与科研复现。  
- 需要压缩与加速推理以进行低延迟部署的场景。

## 技术特点

- 结合系统级与算法级优化（并行策略、通信压缩、异构内存管理）。  
- 模块化设计，可组合训练、推理与压缩功能以适配不同工作流。  
- 活跃的社区与大量论文/教程支持，适合科研与工程化采纳。
