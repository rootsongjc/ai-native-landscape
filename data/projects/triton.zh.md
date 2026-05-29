---
name: Triton
slug: triton
homepage: https://triton-lang.org/
repo: https://github.com/triton-lang/triton
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Framework
description: Triton 是一个面向高性能深度学习算子与编译器开发的语言与工具链，旨在简化 GPU 算子开发并提升性能。
logo: ''
author: Triton Team
ossDate: '2014-08-30T17:07:16.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Triton 是为高性能深度学习算子与编译器开发而生的语言与工具链，目标是让研究人员与工程师能够以更高层次的方式编写高效的 GPU 内核。它通过提供与 Python 风格相近的编程接口与自动化的编译优化，使得在 GPU 上实现定制算子变得更简单且性能优异。

## 主要特性

- 高层次的算子描述语言，降低手写 CUDA 的复杂度。
- 自动化编译与优化流程，生成适配不同 GPU 架构的高性能内核。
- 活跃的社区与完善的文档，以及与主流深度学习框架的互操作性。

## 使用场景

- 需要为深度学习模型实现定制、高性能的矩阵运算、卷积或注意力算子时。
- 在研究与工程中快速原型化 GPU 算子并评估性能改进。
- 将 Triton 生成的内核集成到训练或推理流水线以替换通用算子，获取性能提升。

## 技术特点

- 语言与编译器协同设计，通过静态分析与自动向量化提升并行度与内存利用率。
- 支持多种 GPU 架构的代码生成与调优，关注数值精度与执行效率的平衡。
- 提供与 Python 的良好集成，使研究人员能在熟悉的环境中进行高性能开发。
