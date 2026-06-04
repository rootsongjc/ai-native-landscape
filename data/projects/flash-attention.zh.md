---
name: Flash Attention
slug: flash-attention
homepage: null
repo: https://github.com/dao-ailab/flash-attention
license: BSD-3-Clause
category: inference-serving
subCategory: inference-runtimes
tags:
  - Framework
description: 高性能且节省内存的精确注意力实现，专为大规模 Transformer 的训练与推理场景优化。
author: Dao-AI Lab
ossDate: '2022-05-19T21:22:06.000Z'
featured: false
status: tracked
---
## 简介

Flash Attention 是一个致力于在训练与推理阶段提供快速且节省内存的精确注意力（exact attention）实现的开源项目。它通过算法与实现层面的优化，显著降低 Transformer 注意力计算的显存占用，同时保持数值精度，适合用于大规模模型的场景中以减少资源瓶颈。

## 主要特性

- 内存友好的注意力实现，降低峰值显存需求。
- 高吞吐量的 GPU 内核与多种数值格式支持。
- 开源实现与社区维护，便于与主流深度学习框架集成。

## 使用场景

- 在训练大规模语言模型时替换标准注意力以降低显存占用并增加 batch 大小。
- 推理场景希望在受限显存设备上获得更高吞吐与更低延迟时使用。
- 作为研究与工程团队优化注意力性能的基线实现与参考。

## 技术特点

- 采用优化的数据访问与分块策略以减少内存读写开销。
- 基于高性能 CUDA 实现，关注并行度与内存带宽利用率的提升。
- 支持多种精度与集成路径，便于按需在训练或推理管线中使用。
