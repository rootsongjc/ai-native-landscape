---
name: LMFlow
slug: lmflow
homepage: https://optimalscale.github.io/LMFlow/
repo: https://github.com/optimalscale/lmflow
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Dev Tools
  - FineTune
  - ML Platform
description: LMFlow 是一个可扩展、便捷且高效的微调与推理工具箱，针对大规模基础模型的工程化训练与部署提供完整支持。
logo: ''
author: OptimalScale
ossDate: '2023-03-27T13:56:29.000Z'
featured: false
status: tracked
---

## 详细介绍

LMFlow 是一个面向大规模基础模型的可扩展微调与推理工具箱，提供从数据准备、微调、评估到部署的端到端解决方案。项目包含丰富的示例、模板与基准工具，支持多种加速与内存优化策略。

## 主要特性

- 支持多种微调方法（Full FT、LoRA、QLoRA、LISA 等）与自定义优化器。
- 加速与内存优化：Flash Attention、vLLM、Deepspeed、Gradient Checkpointing、Sequence/Position 插值等。
- 提供 Model Zoo、Benchmark 与可复现的教程与 Colab 示例。

## 使用场景

- 在研究与工程中搭建可复现的微调流水线与基准测试。
- 在资源受限的环境中使用 LISA/QLoRA 等技术进行高效微调。
- 快速将微调模型部署为聊天或推理服务（包括 Gradio 示例与 vLLM 集成）。

## 技术特点

- 以 Python 为主的实现并配套详细文档与示例（文档站点：<https://optimalscale.github.io/LMFlow/>）。
- 支持从 Hugging Face、S3 等加载数据，并提供多种硬件/软件环境的安装说明。
- 项目采用 Apache-2.0 许可证，社区活跃，更新频繁。
