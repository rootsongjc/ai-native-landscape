---
name: Megatron-LM
slug: megatron-lm
homepage: https://developer.nvidia.com/
repo: https://github.com/nvidia/megatron-lm
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - ML Platform
description: Megatron-LM 是 NVIDIA 提供的大规模语言模型训练参考实现，面向分布式训练与性能优化。
logo: ''
author: NVIDIA
ossDate: '2019-03-21T16:15:52.000Z'
featured: false
status: tracked
---

## 详细介绍

Megatron-LM 是 NVIDIA 开源的用于大规模语言模型训练与推理的参考实现，专注于在 GPU 集群上实现高效的分布式训练。项目提供了按需组合的核心模块、脚本与示例，覆盖张量并行、流水线并行与混合并行方案，适用于数十亿到万亿参数级模型的训练与性能测试。

## 主要特性

- 支持多种并行策略（tensor/pipeline/context/FSDP），便于按需组合。
- 集成混合精度和优化内核以提升吞吐与显存效率（FP16/BF16/FP8）。
- 完整的端到端训练例程与性能基准，便于复现与调优。

## 使用场景

- 大规模 LLM 的训练与实验室规模基准测试。
- 分布式训练性能分析、内核优化与内存调优研究。
- 训练流程的工程化与部署前性能验证。

## 技术特点

- 基于 PyTorch 构建，提供模块化 Megatron Core 组件。
- 针对 NVIDIA 硬件做了内核级优化，兼容 Transformer Engine 等加速库。
- 文档与示例覆盖性能复现的实践细节，便于工程化落地。
