---
name: XLA
slug: xla
homepage: null
repo: https://github.com/openxla/xla
license: Unknown
category: inference-serving
subCategory: gpu-acceleration
tags:
  - Optimization
  - Performance
description: XLA（Accelerated Linear Algebra）是一个用于机器学习模型编译的高性能编译器，能够为 CPU、GPU 与专用加速器生成高效执行代码。
author: OpenXLA
ossDate: '2017-01-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

XLA（Accelerated Linear Algebra）是一个编译器项目，负责将来自 TensorFlow、PyTorch、JAX 等前端框架的计算图编译并优化为在 GPU、CPU 与各类加速器上高效执行的代码。它通过算子融合、内存优化与针对后端的特定变换来提升性能。

## 主要特性

- 框架整合：支持 TensorFlow、PyTorch/XLA、JAX 等前端接口。
- 后端优化：针对不同硬件进行算子融合与低级优化以减少内存与计算开销。
- 可扩展性：设计用于支持新的硬件后端与编译通路。

## 使用场景

- 在各类硬件上编译深度学习模型以提高执行效率与可移植性。
- 开发或调试编译器后端与硬件适配层。
- 用于需要跨硬件一致性与性能调优的生产部署场景。

## 技术特点

- 以 C++/MLIR 等技术实现，拥有长期维护的贡献者社群，适合深度优化与硬件集成工作流。
