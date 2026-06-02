---
name: LLaMA Factory
slug: llama-factory
homepage: https://llamafactory.readthedocs.io/
repo: https://github.com/hiyouga/llama-factory
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Data
  - LLM
description: 用于微调 LLaMA 模型的综合框架，支持多种训练方法、高效算法和易于使用的界面，适用于研究和生产环境。
logo: ''
author: hiyouga
ossDate: '2023-05-28T10:09:12.000Z'
featured: false
status: tracked
---

## 简介

LLaMA Factory 是一个大语言模型统一微调框架，支持超过 100 种预训练模型和多种训练方法。它提供无代码的本地微调界面，使研究人员和生产工程师都能轻松地将基础模型适配到特定任务。

## 主要特性

该框架支持包括 LLaMA、Qwen、Mistral、Gemma 和 ChatGLM 在内的广泛模型，训练方法涵盖预训练、监督微调、奖励建模和偏好对齐（PPO、DPO、KTO、ORPO）。它提供从 16 位全参数微调到 2 位 QLoRA 的灵活计算精度，并集成 FlashAttention-2 和 Unsloth 等加速算子以实现高效训练。

## 使用场景

研究人员使用 LLaMA Factory 在前沿模型上实验不同的微调策略和优化算法。生产团队依赖它将基础模型适配到代码生成、客户支持和内容创作等特定领域任务。无代码界面也使非工程人员能够自定义模型行为。

## 技术特点

LLaMA Factory 支持 Transformers 和 vLLM 两种推理后端。它集成了 LlamaBoard、TensorBoard、Wandb、MLflow 和 SwanLab 等实验监控工具。内置 GaLore、DoRA、LongLoRA 和 PiSSA 等优化算法，以及 AQLM、AWQ、GPTQ 和 HQQ 等量化方法，可在消费级硬件上实现高效训练。
