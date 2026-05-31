---
name: Colossal-AI
slug: colossalai
homepage: https://www.colossalai.org/
repo: https://github.com/hpcaitech/colossalai
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Dev Tools
description: 面向大规模并行训练与推理的系统，提供多种并行策略、内存管理与高性能推理组件，旨在让大模型训练与推理更高效、可复现。
logo: ''
author: HPC-AI Tech / ColossalAI
ossDate: '2021-10-28T16:19:44.000Z'
featured: false
status: tracked
---

## 简介

Colossal-AI 是一个用于大规模分布式训练与高性能推理的开源系统，提供数据/张量/流水线等多种并行策略、异构内存管理和加速推理组件（Colossal-Inference），旨在降低大模型训练与部署的资源成本并提高可复现性。

## 主要特性

- 多重并行方案：支持数据并行、张量并行（1D/2D/2.5D/3D）、流水线并行和序列并行。
- 异构内存管理与优化：提供内存分配与调度策略，降低显存占用并支持更大模型训练。
- 高性能推理：Colossal-Inference 能显著提升大模型推理速度并减少内存占用。
- 丰富示例与文档：内置大量示例、教程和生产级文档，便于快速上手并在真实场景部署。

## 使用场景

- 大规模模型的分布式训练与微调（LLM、Transformer、MoE 等）。
- 生产环境下的高吞吐量推理与服务化部署。
- 教学与研究：并行策略与性能优化实验平台。

## 技术特点

- 支持 PyTorch，提供从单机到多机的扩展能力与示例工程。
- 包含优化器、调度与自动并行化工具，降低并行编程门槛。
- 活跃社区与丰富扩展（应用示例、Docker/云平台整合、第三方模型集成）。
