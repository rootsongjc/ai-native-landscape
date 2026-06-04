---
name: TileLang
slug: tilelang
homepage: https://tilelang.com/
repo: https://github.com/tile-ai/tilelang
license: MIT
category: inference-serving
subCategory: gpu-acceleration
tags:
  - Benchmark
  - Framework
description: TileLang 是一个面向高性能 AI 工作负载的领域特定语言，用于简化 GPU/CPU/加速器核的开发。
author: Tile AI
ossDate: '2024-10-03T09:25:45.000Z'
featured: false
status: tracked
---

## 简介

TileLang（tile-lang）是为高性能算子开发设计的 DSL，基于 TVM 编译基础设施，允许开发者用简洁的 Python 风格语法实现高效的 GEMM、FlashAttention、LinearAttention 等算子。

## 主要特性

- 简洁的 DSL 与 Python API，专注算子表达与布局注释。
- 多设备后端支持（CUDA、HIP、CPU）与针对 NVIDIA/AMD 的性能优化示例。
- 丰富的示例与基准套件，包含 MLA 解码、FlashMLA、Dequantize GEMM 等。

## 使用场景

- 开发与调优高性能深度学习算子（GEMM、Attention、卷积等）。
- 在自定义硬件或云 GPU（H100、A100、MI300X 等）上进行性能调优与基准测试。
- 研究与工程团队将 TileLang 用作连接高层模型与底层高效核的工具链。

## 技术特点

- 以 C++/Python 为主的实现，结合 TVM 编译器后端，支持 JIT 与离线构建流程。
- 提供详尽的安装与源码构建指南，并支持 pip 安装与 nightly 轮子供快速试验。
- 包含基准脚本、测试套件与设备专用示例，便于复制性能结果。
