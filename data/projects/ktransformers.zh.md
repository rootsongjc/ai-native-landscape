---
name: KTransformers
slug: ktransformers
homepage: https://kvcache-ai.github.io/ktransformers/
repo: https://github.com/kvcache-ai/ktransformers
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - AI Kernel Library
  - Inference
description: 面向 LLM 推理优化的灵活框架，提供内核注入、前缀缓存与多种 GPU/CPU 加速策略。
logo: ''
author: KVCACHE / MADSys
ossDate: '2024-07-26T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

KTransformers（Quick Transformers）是一个专注于 LLM 推理内核优化的开源框架。通过“注入”优化内核、前缀缓存、以及多级缓存与并行策略，KTransformers 致力于在本地与集群环境中提升生成速度并降低显存占用，支持多种后端与量化/混合精度技术。

## 主要特性

- 内核注入：通过规则化模板将高性能内核替换原生模块，实现显著速度提升。
- 前缀缓存：支持 GPU-CPU-Disk 多层前缀缓存以提升长上下文的吞吐。
- 广泛兼容：与 Transformers 接口兼容，支持多种模型格式与后端（GGUF、safetensors 等）。
- 丰富示例与文档：提供安装、注入与部署的详细教程与演示。

## 使用场景

- 桌面级推理：在 24GB 显存桌面环境下运行大模型的实用加速方案。
- 服务端部署：在多 GPU 集群上做推理加速，配合并行/分布式策略。
- 研究与实验：试验新的内核、量化与 MoE 优化策略并验证效果。

## 技术特点

- 以 Python 为主的用户接口，核心包含 C++/CUDA 优化模块。
- 支持 ROСm、AMX、FP8 等硬件特性与专有优化。
- 活跃更新与兼容新模型（Qwen3、Llama4 等）。
