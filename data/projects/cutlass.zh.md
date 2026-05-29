---
name: CUTLASS
slug: cutlass
homepage: null
repo: https://github.com/nvidia/cutlass
license: Unknown
category: inference-serving
subCategory: gpu-acceleration
tags:
  - Framework
description: CUDA Templates for Linear Algebra Subroutines（CUTLASS），NVIDIA 提供的高性能矩阵运算模板库。
logo: ''
author: NVIDIA
ossDate: '2017-11-30T00:11:24.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

CUTLASS 是 NVIDIA 提供的一套用于线性代数子例程（GEMM 等）的 CUDA 模板库，旨在帮助开发者构建高性能、可重用的矩阵运算内核。它包含多种优化策略与示例，便于在不同 GPU 架构上实现高效计算。

## 主要特性

- 模板化的 GEMM 与线性代数构建块，方便定制与扩展。
- 面向多种 GPU 架构的性能优化与示例实现。
- 完善的文档与示例，便于集成与调优。

## 使用场景

- 实现自定义高性能矩阵乘加与线性代数算子。
- 通过 CUTLASS 的模板与示例快速构建针对特定硬件的内核。
- 在训练与推理管线中替换默认算子以获取更好性能。

## 技术特点

- 使用 CUDA 与模板元编程实现高度可定制的算子构建块。
- 提供针对不同数据类型与内存布局的优化路径。
- 支持集成到深度学习框架与研究原型中。
