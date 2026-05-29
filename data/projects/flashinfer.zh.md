---
name: FlashInfer
slug: flashinfer
homepage: https://flashinfer.ai
repo: https://github.com/flashinfer-ai/flashinfer
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Inference
description: FlashInfer 是一个面向 LLM 推理与服务的高性能内核库，提供高效的 attention 与采样内核以提升 GPU 推理吞吐与延迟表现。
logo: ''
author: flashinfer-ai
ossDate: '2023-01-01T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

FlashInfer 是一个为 LLM 服务场景优化的内核库与 JIT 工具，提供高性能的注意力（Attention）与采样（Sampling）实现，旨在降低延迟并提升 GPU 带宽利用率，支持 PyTorch、TVM 等集成方式，适合构建高吞吐量的推理服务。

## 主要特性

- 高效的稀疏/稠密注意力内核与采样实现。
- 面向生产的内核定制与 JIT 编译流水线，支持 precompile/缓存机制。
- 与主流推理框架兼容（PyTorch/TVM/C++）。
- 面向 LLM-serving 的内存与算子优化策略。

## 使用场景

- 大规模 LLM 推理服务与低延迟在线推理。
- 自定义注意力或采样策略的研究与工程化部署。
- 与 vLLM、TGI 等推理栈结合以优化整体吞吐。

## 技术特点

- 提供 CUDA 与 C++ 级别的内核优化，支持多种 GPU 架构。
- 通过插件化与 JIT 机制支持快速实验与工程化打包。
