---
name: DeepEP
slug: deepep
homepage: null
repo: https://github.com/deepseek-ai/deepep
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Middleware
description: 用于专家并行（expert-parallel）的高效通信库，提供针对大规模分布式训练的低开销通信原语。
logo: ''
author: DeepSeek
ossDate: '2025-02-17T01:33:04.000Z'
featured: false
status: tracked
---

## 简介

DeepEP 是为专家并行（expert-parallel）训练场景设计的高效通信库，目标是在大规模分布式训练中显著降低通信延迟和带宽成本，从而提高整体训练吞吐量与资源利用率。它提供一组轻量但功能完备的通信原语，便于在复杂并行策略中替换或优化默认的通信层。

## 主要特性

- 针对 expert-parallel 场景优化的通信原语，减少点对点和聚合操作的冗余开销。
- 提供基于 CUDA 的高性能实现，兼顾异步通信与计算重叠策略以提升吞吐。
- 设计简洁、易集成的 API，方便在 PyTorch 等训练框架或自研训练管线中接入与替换。

## 使用场景

- 在专家并行或混合并行训练中，用于高效地传输专家参数与激活，从而降低通信瓶颈带来的性能损失。
- 面向多卡/多节点训练集群，在有限带宽环境下提升训练效率与规模扩展性。
- 作为通信层替代或优化模块，插入到自研训练平台以获得更好延迟与带宽利用率。

## 技术特点

- 关注通信 - 计算重叠与带宽利用，采用高效的数据打包、分发与异步传输策略以降低等待时间。
- 使用 CUDA 原语与高效内存布局，最大化 GPU 通信与计算并行性。
- 支持可组合的并行策略与容错考虑，便于在多样化硬件拓扑中部署与调优。
