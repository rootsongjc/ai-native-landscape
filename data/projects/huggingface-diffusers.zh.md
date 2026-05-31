---
name: huggingface diffusers
slug: huggingface-diffusers
homepage: https://huggingface.co/docs/diffusers
repo: https://github.com/huggingface/diffusers
license: Unknown
category: models-modalities
subCategory: image-video-generation
tags:
  - Image Generation
  - Inference
description: Diffusers：Hugging Face 提供的模块化扩展库，包含用于图像、音频及 3D 生成的预训练扩散模型与流水线。
logo: ''
author: Hugging Face
ossDate: '2022-05-30T16:04:02.000Z'
featured: false
status: tracked
---

## 简介

Diffusers 是 Hugging Face 的模块化库，提供面向推理与训练的预训练扩散模型与管道，支持图像、音频与 3D 生成，强调可用性与可定制性，便于快速搭建生成式 AI 应用。

## 主要特性

- 开箱即用的文本到图像、图像到图像及修复（inpainting）流水线。
- 可替换的调度器和模块化组件，便于在速度与质量间权衡与自定义采样流程。
- 与 Hugging Face Hub 深度集成，拥有大量预训练检查点与活跃社区支持。

## 使用场景

- 研究与原型验证：快速试验不同模型与调度器组合，验证生成效果。
- 生产推理：构建图像/媒体生成服务并接入现有应用。
- 定制训练与微调：用于训练定制扩散模型或在现有组件上微调。

## 技术特点

- 基于 Python 与 PyTorch，支持多种硬件优化与运行时。
- 模块化设计（pipelines、schedulers、models），便于扩展与二次开发。
- 丰富的文档与示例，便于上手与贡献。
