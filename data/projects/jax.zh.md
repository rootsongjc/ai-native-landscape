---
name: JAX
slug: jax
homepage: https://docs.jax.dev/
repo: https://github.com/jax-ml/jax
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Dev Tools
  - Optimization
  - Training
description: 用于加速数值计算与可微变换的高性能 Python 库，适用于规模化机器学习与研究。
logo: ''
author: JAX Community
ossDate: '2018-01-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

JAX 是一个面向加速器（GPU/TPU）的 Python 数值计算库，提供可组合的函数变换（如自动微分、向量化、JIT 编译等），使研究者和工程师可以将 NumPy 风格的代码无缝扩展到大规模训练与推理场景。它以轻量、可组合为设计目标，广泛用于模型训练、科学计算与高性能数值实验。

JAX 的设计强调函数式的变换组合，用户可以通过少量代码将标量/向量计算转为高效的加速器内核执行。社区生态完善，常与 Flax、Optax、jaxlib 等库配合使用，形成从模型定义到训练优化的完整流水线。JAX 既适合学术研究中的快速原型验证，也被用于需要可控性能调优的工程生产环境。

## 主要特性

- 自动微分（grad）与高阶导数支持。
- JIT 编译与 XLA 后端，可在 GPU/TPU 上高效执行。
- 批量化（vmap）、并行化与分布式分片（pmap、sharding）能力。
- 丰富的数值与线性代数算子，兼容 NumPy 风格 API。

## 使用场景

- 大规模模型训练与实验平台，用于研究新型优化与训练算法。
- 将现有 NumPy 代码迁移到加速器以提高性能与可扩展性。
- 科学计算与可微编程研究，如物理建模、微分方程求解等。

此外，JAX 常用于需要精细化控制并行化策略的场景，例如显存/算力受限时的显存分片、混合精度训练或自定义 XLA 优化路径。它对科研团队尤为友好，可以把研究论文中的数学表达直接转为可微、可编译的代码，加速从理论到可复现实验的过程。

## 技术特点

JAX 以函数变换为核心：通过组合 grad、jit、vmap 等变换，用户能构建高性能、可组合的数值程序。它依赖 XLA 编译器实现跨设备优化，并在社区生态中与 jaxlib、Flax、Optax 等库协同使用，适合需要低层可控性能优化的场景。

<!-- oss_date 为合理推断，必要时可进一步校正 -->
