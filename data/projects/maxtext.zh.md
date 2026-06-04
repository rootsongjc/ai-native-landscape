---
name: MaxText
slug: maxtext
homepage: https://maxtext.readthedocs.io/en/latest/
repo: https://github.com/ai-hypercomputer/maxtext
license: Apache-2.0
category: training-optimization
subCategory: training-frameworks
tags:
  - Framework
  - LLM
  - ML Platform
description: 高性能、可扩展的 JAX+Python LLM 库与参考实现，面向 Google Cloud TPU 与 GPU。
author: AI-Hypercomputer
ossDate: '2023-02-28T19:47:29.000Z'
featured: false
status: tracked
---

## 详细介绍

MaxText 是一个高性能、可扩展的开源 LLM 库与参考实现，使用 Python 与 JAX 开发，针对 Google Cloud 的 TPU 与 GPU 进行了性能优化与大规模训练支持。它同时包含丰富的模型库与训练流水线示例，适合从研究到生产的场景。

## 主要特性

- 基于 JAX 的高吞吐量实现，优化了 MFU（Model FLOPs Utilization）。
- 支持大规模分布式训练与后训练（post-training）流水线。
- 提供多种开箱即用模型与可扩展的配置系统，便于实验与复现。

## 使用场景

- 预训练与大规模模型训练的参考实现与基线测试。
- 模型微调（SFT）、RL（GRPO）与大规模推理优化的研究与工程化。
- 在需要高性能 TPU/GPU 集群下进行大规模训练与基准测试的场景。

## 技术特点

- 纯 Python/JAX 实现，结合 XLA 编译器以提升性能。
- 支持多种模型（如 Gemma、Llama、Qwen、Mistral）与混合专家（MoE）架构。
- 提供可复现的依赖与安装说明，配套文档与示例在项目文档网站中维护。
