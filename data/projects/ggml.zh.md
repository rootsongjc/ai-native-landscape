---
name: ggml
slug: ggml
homepage: https://huggingface.co/blog/introduction-to-ggml
repo: https://github.com/ggml-org/ggml
license: MIT
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
description: ggml 是一个面向机器学习的轻量级张量库，适配多种硬件与量化方案。
author: ggml-org
ossDate: '2022-09-18T17:07:19Z'
featured: false
status: tracked
---
ggml 是一个面向机器学习的轻量级 C/C++ 张量库，能够在通用硬件上实现大型模型推理。它专注于低内存占用和高性能，支持多种硬件平台的整数量化、自动微分和多种加速后端，是构建高效本地推理工具链的基础库。

## 硬件加速

- CUDA 后端支持 NVIDIA GPU 加速
- HIP 后端支持 AMD GPU
- SYCL 后端支持 Intel GPU 和加速器硬件
- 针对 ARM 和 x86 架构优化的 CPU 内核

## 量化与效率

- 整数量化方案降低模型体积和推理成本
- 多种量化格式，在精度与速度之间灵活权衡
- 运行时依赖极少，便于跨平台移植
- 面向资源受限的边缘和本地部署场景设计

## 训练与研究

- 内置自动微分和常用优化器，支持轻量级训练实验
- 验证量化策略和低内存推理技术的实验平台
- 附带 GPT 推理等示例程序便于快速上手

## 基础与许可

- 以 C/C++ 实现，外部依赖极少
- 是 llama.cpp 和 whisper.cpp 等项目的基础库
- 采用 MIT 许可证，适合社区驱动的生态构建和商业使用
