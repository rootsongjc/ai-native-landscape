---
name: MLX
slug: mlx
homepage: https://ml-explore.github.io/mlx/
repo: https://github.com/ml-explore/mlx
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Framework
  - ML Platform
description: 针对 Apple Silicon 的高性能数组与机器学习框架，提供 NumPy 风格的 API 与多语言绑定。
author: ml-explore
ossDate: '2023-11-28T23:33:45.000Z'
featured: false
status: tracked
---

## 详细介绍

MLX 是由 Apple 机器学习研究推出的数组与机器学习框架，专为 Apple Silicon 优化。它为研究者提供类似 NumPy 的 Python API，并同时提供 C++、C 与 Swift 接口，支持懒计算、动态图、可组合函数变换与多设备执行。

## 主要特性

- NumPy 风格的易用 Python API，配套 C++/C/Swift 绑定。
- 支持可组合的函数变换（自动微分、向量化、图优化）。
- 懒执行与统一内存模型，减少跨设备数据拷贝。

## 使用场景

- 在 Apple Silicon（M 系列）上进行高效的研究型训练与推理。
- 需要多语言接口（Python/C++/Swift）与高性能数组操作的模型原型开发。
- 希望利用统一内存与懒计算优化内存/性能的应用场景。

## 技术特点

- 以 C++ 为核心实现，提供 Python 包与一系列示例与文档。
- 支持 GPU/CPU 多设备调度，并提供构建与安装指南（包括 PyPI 安装与从源码构建）。
- 丰富的示例仓库（`mlx-examples`）展示 Transformer、Stable Diffusion、Whisper 等任务的使用方法。
