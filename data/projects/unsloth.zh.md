---
name: Unsloth
slug: unsloth
homepage: https://docs.unsloth.ai/
repo: https://github.com/unslothai/unsloth
license: Apache-2.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - FineTune
  - ML Platform
  - Training
description: 用于大规模模型微调与强化学习的高性能训练工具集，支持多种模型与记忆优化策略。
author: Unsloth 团队
ossDate: '2023-11-29T16:50:09.000Z'
featured: false
status: tracked
---

## 简介

Unsloth 是一个面向大规模模型微调与强化学习的高性能工具集，提供从数据准备、快速微调到评估的端到端支持。它以内存与算力优化著称，能在较少 VRAM 下训练并支持多种模型格式与导出选项。

## 主要特性

- 支持全量微调、RL（DPO、GRPO、PPO）与预训练流程。
- 提供多种量化/低位宽支持（4-bit/8-bit）与高效内核（Triton 实现）。
- 丰富的笔记本与 Docker 镜像，便于在 Colab、Kaggle 或本地快速开始。

## 使用场景

- 在受限显存环境下对 LLM 进行微调与 LoRA 训练。
- 使用强化学习方法（如 GRPO/DPO）进行对齐或策略优化。
- 将训练结果导出为 GGUF、Hugging Face 或 Ollama 格式以便部署。

## 技术特点

- 基于 PyTorch 与 Triton 实现高性能内核，兼容常见训练库（TRL、vLLM 等）。
- 提供多样化安装与运行方式：pip、Docker、黑盒硬件镜像（Blackwell）。
- 文档详尽（<https://docs.unsloth.ai/>），包含快速入门、模型列表与性能基准。
