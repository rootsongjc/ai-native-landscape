---
name: Cactus
slug: cactus
homepage: https://cactuscompute.com/docs
repo: https://github.com/cactus-compute/cactus
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Dev Tools
  - LLM
  - Product
description: 面向手机的能效推理引擎与数值计算框架，优化 ARM CPU 执行以在移动设备上高效运行大模型。
logo: ''
author: cactus-compute
ossDate: '2025-04-23T14:33:43.000Z'
featured: false
status: tracked
---

## 简介

Cactus 是一个针对移动设备（尤其 ARM CPU）的推理引擎与数值计算框架，旨在以极低的能耗和内存占用运行大模型，支持在手机上部署轻量化 LLM 推理。

## 主要特性

- CPU 优化：优先针对 ARM CPU 优化，减少能耗与发热，兼顾旧机型与新机型表现。
- 统一图与内核：Cactus Graph 与 Cactus Kernels 提供零拷贝计算图与高效 SIMD 实现。
- 多平台 SDK：提供 Flutter、React Native、Kotlin 等 SDK，便于集成到移动应用中。

## 使用场景

- 在手机端运行离线或混合模式的 LLM 推理，支持聊天、助手和轻量化生成任务。
- 将深度学习服务嵌入移动应用以实现低延迟响应与节能运行。
- 模型移植与研究：用于将 Hugging Face / 其他模型转换并验证在移动设备上的性能。

## 技术特点

- C API / FFI：提供与 OpenAI 兼容的 C 接口，便于在多语言环境中调用。
- 高效推理：在多项基准中对比 Llama.cpp 展现出更高的 CPU-only 性能与更小的模型文件体积。
- 可扩展工具链：包含 Python 工具用于模型转换、测试脚本与构建说明。
