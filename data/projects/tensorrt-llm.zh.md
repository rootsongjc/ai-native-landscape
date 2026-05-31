---
name: TensorRT-LLM
slug: tensorrt-llm
homepage: https://nvidia.github.io/TensorRT-LLM/
repo: https://github.com/nvidia/tensorrt-llm
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
  - LLM
  - Utility
description: NVIDIA 开源大模型推理优化工具箱，专为 GPU 高效推理和企业级部署设计。
logo: ''
author: NVIDIA
ossDate: '2023-08-16T17:14:27.000Z'
featured: false
status: tracked
---

## 简介

TensorRT-LLM 是 NVIDIA 推出的开源大语言模型推理优化工具箱，专为高性能 GPU 推理和企业级部署场景设计，支持多种主流模型和量化优化。

## 主要特性

- 支持自定义 attention 内核、批量推理、分布式并行与多种量化方式（FP8/FP4/INT4/INT8）
- 提供高层 Python API，支持单卡、多卡和多节点部署
- 与 Triton Inference Server、PyTorch 等生态无缝集成
- 模块化架构，易于扩展和定制

## 使用场景

- 企业级大模型推理与部署
- 云端和本地 GPU 高效推理
- LLM 应用快速原型开发
- 量化模型性能优化

## 技术特点

- C++/Python/CUDA 多语言协作，极致性能优化
- 内置 KV 缓存、推理调度、结构化输出等高级特性
- 支持主流 LLM 与量化模型，易于集成新模型
