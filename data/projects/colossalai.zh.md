---
name: Colossal-AI
slug: colossalai
homepage: https://www.colossalai.org/
repo: https://github.com/hpcaitech/colossalai
license: MIT
category: training-optimization
subCategory: training-frameworks
tags:
  - Dev Tools
description: 面向大规模并行训练与推理的系统，提供多种并行策略、内存管理与高性能推理组件，旨在让大模型训练与推理更高效、可复现。
author: HPC-AI Tech / ColossalAI
ossDate: '2021-10-28T16:19:44.000Z'
featured: false
status: tracked
---
Colossal-AI 是一个开源的大规模分布式训练与推理框架，致力于让大型 AI 模型更廉价、更快速、更易获取。它提供多种并行策略和异构内存管理能力，有效降低大模型训练与部署的资源成本。

## 并行策略

- **数据并行**，支持跨多 GPU 和多节点的扩展
- **张量并行**，提供 1D、2D、2.5D 和 3D 配置，实现细粒度模型分片
- **流水线并行**，在不同阶段间重叠计算与通信
- **序列并行**，面向需要分布式注意力机制的长上下文模型
- 支持多种策略的可组合搭配，最大化硬件利用率

## 内存与推理优化

- 异构内存管理，可将张量卸载至 CPU 和 NVMe，降低 GPU 显存占用
- 内置 Colossal-Inference 组件，加速模型推理并减少内存使用
- 支持混合精度训练和梯度检查点，最大化吞吐量

## 使用场景

- LLM、Transformer、MoE 等大规模模型的分布式训练与微调
- 低延迟要求下的高吞吐量生产推理部署
- 作为并行策略与性能优化的教学与研究平台

## 技术架构

- 基于 PyTorch 构建，提供定制优化器、调度器和自动并行化工具，显著降低分布式编程门槛
- 包含从单机到多机的丰富示例，支持 Docker 和云平台集成
- 拥有活跃的开源社区，提供生产级文档和定期版本发布
