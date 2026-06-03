---
name: Hugging Face Transformers
slug: transformers
homepage: 'https://huggingface.co/transformers'
repo: https://github.com/huggingface/transformers
license: Apache-2.0
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - NLP
  - LLM
  - PyTorch
  - Deep Learning
  - Model Hub
  - Multimodal
description: 面向文本、视觉、音频和多模态任务的模型定义框架，提供推理和训练能力，是现代 AI/ML 开发的事实标准库。
logo: ''
author: Hugging Face
ossDate: '2018-10-29'
featured: true
thumbnail: ''
source: ''
status: tracked
---

## 简介

Hugging Face Transformers 是现代 AI/ML 开发的基础框架，提供对文本、视觉、音频和多模态任务的数千个预训练模型的访问。它是使用 Transformer 模型的事实标准库，支持 PyTorch、TensorFlow 和 JAX 的推理和训练。

## 主要特性

- 统一 API 接入 200,000+ 预训练模型，覆盖文本、视觉、音频和多模态
- 支持 PyTorch、TensorFlow 和 JAX 后端
- 内置管道用于常见 NLP、计算机视觉和音频任务
- 与 Hugging Face Hub 无缝集成，支持模型共享与协作
- 原生支持量化、编译和优化技术

## 使用场景

- 使用预训练语言、视觉和音频模型构建 AI 应用
- 针对特定领域任务微调基础模型
- 创建结合文本、图像和音频的多模态 AI 管道
- 原型开发和生产部署 Transformer 系统

## 技术特点

- 纯 Python 库，包含丰富的模型架构实现
- 支持模型量化（bitsandbytes、GPTQ、AWQ）和编译（torch.compile）
- 与 Hugging Face 生态深度集成：Datasets、Tokenizers、Accelerate、PEFT、TRL
