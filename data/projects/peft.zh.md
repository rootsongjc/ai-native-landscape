---
name: PEFT
slug: peft
homepage: 'https://huggingface.co/docs/peft'
repo: https://github.com/huggingface/peft
license: Apache-2.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Fine-tuning
  - LoRA
  - Parameter-Efficient
  - LLM
  - PyTorch
description: 面向大语言模型的参数高效微调库，实现 LoRA、QLoRA 等方法，用极少 GPU 资源即可完成适配器训练。
author: Hugging Face
ossDate: '2022-11-25'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

PEFT (Parameter-Efficient Fine-Tuning) 是 Hugging Face 的参数高效微调库，使用少量参数即可适配大型预训练模型。实现了 LoRA、QLoRA、前缀调优、提示调优等方法，可在消费级 GPU 上以最小内存开销微调大模型。

## 主要特性

- LoRA、QLoRA、AdaLoRA 和 IA3 适配器方法
- 前缀调优、提示调优和 P-tuning v2
- 与 Hugging Face Transformers 和 Accelerate 无缝集成
- 适配器合并、混合和加载工具
- 支持在 Hugging Face Hub 保存和共享适配器

## 使用场景

- 通过 QLoRA 在单张消费级 GPU 上微调 LLM
- 创建领域适配器，无需全量模型训练
- 通过组合多个 LoRA 适配器实现多任务适配
- 快速实验不同的微调策略

## 技术特点

- 兼容任何 Hugging Face Transformers 模型
- 相比全量微调减少 90%+ 可训练参数
- 通过 bitsandbytes 集成支持 8-bit 和 4-bit 量化
- 适配器通常仅 10-100MB，便于共享和版本管理
