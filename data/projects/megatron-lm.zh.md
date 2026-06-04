---
name: Megatron-LM
slug: megatron-lm
homepage: https://developer.nvidia.com/
repo: https://github.com/nvidia/megatron-lm
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
description: Megatron-LM 是 NVIDIA 提供的大规模语言模型训练参考实现，面向分布式训练与性能优化。
author: NVIDIA
ossDate: '2019-03-21T16:15:52.000Z'
featured: false
status: tracked
---

## 简介

Megatron-LM 是 NVIDIA 开源的大规模语言模型训练框架，提供生产级训练方案、模块化并行组件和性能优化内核。它旨在最大化 GPU 集群的利用率，作为研究人员和工程师在数十亿到万亿参数规模模型上工作的参考实现。

## 主要特性

- 多种并行策略，包括张量并行、流水线并行、上下文并行和数据并行（FSDP），可灵活组合以实现跨 GPU 集群的可扩展训练。
- 高度优化的 CUDA 内核和混合精度支持（FP16、BF16、FP8），最大化 NVIDIA 硬件上的训练吞吐量和显存效率。
- 端到端的训练脚本、配置模板和基准测试示例，支持可复现的大规模实验。

## 使用场景

- 研究机构和工程团队在多节点 GPU 集群上从头训练大规模 LLM 或微调基础模型。
- 性能调优和扩展实验，用于验证分布式训练策略和 NVIDIA GPU 架构上的内核优化效果。
- 组织构建生产级模型训练管道，需要可复现的基准测试和经过验证的训练方案。

## 技术特点

- 基于 PyTorch 构建，提供模块化的 Megatron Core 库，暴露可组合的注意力、嵌入和 Transformer 层组件。
- 与 NVIDIA 的 Transformer Engine 和其他加速库集成，利用 FlashAttention 和 FP8 量化等硬件特定优化。
- 完整的文档和示例配置，覆盖预训练、微调和推理工作流，确保结果可复现。
