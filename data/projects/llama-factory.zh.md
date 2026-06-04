---
name: LLaMA Factory
slug: llama-factory
homepage: https://llamafactory.readthedocs.io/
repo: https://github.com/hiyouga/llama-factory
license: Apache-2.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Data
  - LLM
description: 用于微调 LLaMA 模型的综合框架，支持多种训练方法、高效算法和易于使用的界面，适用于研究和生产环境。
author: hiyouga
ossDate: '2023-05-28T10:09:12.000Z'
featured: false
status: tracked
---

LLaMA Factory 是一个大语言模型统一微调框架，支持超过 100 种预训练模型和多种训练方法。它提供无代码的本地微调界面，使研究人员和生产工程师都能轻松地将基础模型适配到特定任务。

## 支持的模型与方法

- **超过 100 种预训练模型**，包括 LLaMA、Qwen、Mistral、Gemma 和 ChatGLM，开箱即用
- **完整的训练管道**，涵盖预训练、监督微调、奖励建模和偏好对齐
- **偏好对齐算法**，支持 PPO、DPO、KTO 和 ORPO 等 RLHF 风格训练
- **灵活的计算精度**，从 16 位全参数微调到 2 位 QLoRA，适配消费级硬件
- **加速算子集成**，如 FlashAttention-2 和 Unsloth，提升训练吞吐量

## 使用场景

- 在前沿模型上实验不同的微调策略和优化算法
- 将基础模型适配到代码生成、客户支持和内容创作等特定领域任务
- 非工程人员通过无代码界面自定义模型行为，无需编写训练脚本
- 利用内置监控和基准工具快速迭代模型对齐和评估

## 技术特点

- 支持 Transformers 和 vLLM 两种推理后端，灵活部署
- 集成 LlamaBoard、TensorBoard、Wandb、MLflow 和 SwanLab 等实验监控工具
- 内置 GaLore、DoRA、LongLoRA 和 PiSSA 等优化算法
- 量化方法包括 AQLM、AWQ、GPTQ 和 HQQ，可在消费级硬件上实现高效训练
