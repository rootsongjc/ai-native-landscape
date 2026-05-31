---
name: DeepGEMM
slug: deepgemm
homepage: null
repo: https://github.com/deepseek-ai/deepgemm
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Framework
description: 实现干净且高效的 FP8 GEMM（矩阵乘加）内核，提供细粒度缩放以支持更高效的低精度矩阵计算。
logo: ''
author: DeepSeek
ossDate: '2025-02-13T09:09:21.000Z'
featured: false
status: tracked
---

## 简介

DeepGEMM 提供针对 FP8 与低精度矩阵乘加（GEMM）的高效内核实现，注重数值稳定性与性能之间的平衡。通过细粒度缩放策略与优化的 GPU 内核，DeepGEMM 在保持较低精度计算优势的同时，尽量降低数值误差。

## 主要特性

- 支持 FP8 的高性能 GEMM 实现，针对深度学习推理与训练中的低精度矩阵运算进行了优化。
- 采用细粒度缩放（fine-grained scaling）以改善数值稳定性并兼顾性能。
- 基于 CUDA 的实现，便于在 GPU 上获得实际加速效果。

## 使用场景

- 在模型训练或推理中使用低精度矩阵运算以节省内存并提升吞吐量。
- 作为定制算子替换默认矩阵乘加实现以优化特定算子性能。
- 在需要权衡精度与性能的场景中作为低精度计算库集成。

## 技术特点

- 细粒度缩放策略以减小 FP8 运算带来的数值偏差。
- 高性能 CUDA 内核与合理的内存布局以提升并行效率。
- 可与 PyTorch 等框架集成，作为自定义算子使用。
