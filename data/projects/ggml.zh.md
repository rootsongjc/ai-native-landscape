---
name: ggml
slug: ggml
homepage: https://huggingface.co/blog/introduction-to-ggml
repo: https://github.com/ggml-org/ggml
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
description: ggml 是一个面向机器学习的轻量级张量库，适配多种硬件与量化方案。
logo: ''
author: ggml-org
ossDate: '2022-09-18T17:07:19Z'
featured: false
status: tracked
---

## 简介

ggml 是一个面向机器学习的轻量级 C/C++ 张量库，能够在通用硬件上实现大型模型推理。它专注于低内存占用和高性能，支持多种硬件平台的整数量化、自动微分和多种加速后端，是构建高效本地推理工具链的基础库。

## 主要特性

ggml 针对边缘和本地部署进行了优化，运行时依赖极少，便于移植。它提供 CUDA、HIP 和 SYCL 等硬件加速后端，支持整数量化方案以降低模型体积和推理成本，并内置自动微分和常用优化器，支持轻量级的训练实验。

## 使用场景

ggml 可用于在桌面、移动或嵌入式设备上运行小型或量化模型进行本地推理。它可作为自定义推理后端或模型转换管道组件集成到更大规模的工具链中，也为研究人员提供了验证量化策略和低内存推理技术的实验平台。

## 技术特点

该库以 C/C++ 实现，外部依赖极少，附带 GPT 推理等示例程序便于快速上手。它支持自动微分和常用优化器用于本地训练实验，采用 MIT 许可证，适合社区驱动的生态构建和商业使用。
