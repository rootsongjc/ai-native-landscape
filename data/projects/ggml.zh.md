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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

ggml 是一个专注于高效模型推理与张量运算的轻量级 C/C++ 库，目标是在多种硬件平台上提供低内存占用与高速推理能力。项目支持整数量化、自动微分以及多种后端（CUDA、HIP、SYCL 等），常被用于构建本地化的模型推理工具链与示例程序。

## 主要特性

- 轻量且高性能：面向边缘与本地部署进行了资源与内存优化。
- 多硬件支持：提供 CUDA、HIP、SYCL 等平台的加速选项。
- 量化友好：支持整数量化方案以降低模型体积与推理成本。
- 零依赖设计：尽量避免第三方运行时依赖，便于移植。

## 使用场景

- 本地推理：在桌面、移动或嵌入式设备上运行小型或量化模型。
- 工具链构建：作为自定义推理后端或模型转换流程的一部分。
- 研究与实验：验证量化策略、低内存推理与性能优化方法。

## 技术特点

- 支持自动微分与常用优化器，便于在本地做小规模训练与微调实验。
- 提供丰富示例程序（如 GPT 推理示例），方便快速上手与集成。
- 采用 MIT 许可证，适合社区驱动的生态构建与商业使用。
