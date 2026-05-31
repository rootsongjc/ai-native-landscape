---
name: OpenRLHF
slug: openrlhf
homepage: https://openrlhf.readthedocs.io/
repo: https://github.com/openrlhf/openrlhf
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - FineTune
  - ML Platform
  - Training
description: 基于 Ray、vLLM 与 DeepSpeed 的高性能开源 RLHF 框架，提供分布式训练与多种 RL 算法支持。
logo: ''
author: OpenRLHF 团队
ossDate: '2023-07-30T02:20:13.000Z'
featured: false
status: tracked
---

## 简介

OpenRLHF 是一个易用且高性能的开源 RLHF 框架，基于 Ray、vLLM、DeepSpeed 与 Hugging Face Transformers，旨在简化大规模模型的 RLHF 训练与部署流程，支持分布式与混合引擎调度以扩展至数十亿到数千亿参数模型。

## 主要特性

- 支持分布式 PPO、REINFORCE++、GRPO、RLOO 等多种 RL 算法，兼容 Ray 的调度能力。
- 集成 vLLM 加速采样、DeepSpeed ZeRO-3 与 AutoTP 以实现内存高效训练与高吞吐量。
- 支持 QLoRA/LoRA、RingAttention、FlashAttention 等性能优化与多种导出/检查点策略。

## 使用场景

- 在多节点 GPU 集群上进行 RLHF 训练（PPO / REINFORCE++ / DPO 等）。
- 使用 vLLM 加速大模型样本生成以提升 RLHF 训练效率。
- 用于学术研究、企业化模型对齐与多机大模型基准测试。

## 技术特点

- 架构基于 Ray 分布式调度，支持 Hybrid Engine 共享资源以减少 GPU 空闲时间。
- 与 Hugging Face、vLLM、DeepSpeed 等生态深度集成，并提供详尽示例脚本与 Dockerfile。
- 文档与示例集中在 <https://openrlhf.readthedocs.io/>，包含快速上手、示例脚本与性能调优建议。
