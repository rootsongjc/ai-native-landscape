---
name: Torchtune
slug: torchtune
homepage: https://pytorch.org/torchtune/main/
repo: https://github.com/meta-pytorch/torchtune
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: PyTorch 原生的后训练（post-training）和微调工具集，提供可复用的训练 recipes、优化器和量化支持，适用于大模型微调与评估。
author: torchtune maintainers
ossDate: '2023-10-20T21:10:49.000Z'
featured: false
status: tracked
---

## 简介

Torchtune 是一个由 PyTorch 团队维护的后训练与微调库，专注于大模型（LLM）在训练、微调和量化阶段的端到端工作流。它提供可复用的 YAML 配置（recipes）、命令行工具（tune CLI）和 PyTorch 原生实现，便于 SFT、LoRA/QLoRA、知识蒸馏、RLHF/DPO/GRPO 以及量化感知训练（QAT）等方法的实验与生产化。

## 主要特性

- 完整的后训练 recipes（SFT、LoRA/QLoRA、KD、RLHF、QAT 等）。
- 支持多种现代模型与配置（Llama、Llama4、Gemma2、Qwen、Mistral、Phi 等）。
- 强调内存效率与性能优化（activation checkpointing、activation offloading、8-bit 优化器等）。
- 提供 CLI（tune）与 YAML 配置，便于复制与共享实验设置。
- 支持单机与多节点训练，包含丰富的 recipes 库和示例配置。

## 使用场景

- 开展大模型微调实验（LoRA/QLoRA 与全量微调）。
- 在受限硬件下进行内存/速度优化与量化感知训练。
- 构建可复用的训练管道并分享给团队（YAML configs + CLI）。
- 用于知识蒸馏、RLHF 和分布式训练场景。

## 技术特点

- 基于 PyTorch 原生 API，易于集成与扩展。
- 提供多种优化开关与内存策略（optimizer_in_bwd、activation offloading、fused optimizer step 等）。
- 与 Hugging Face Hub、bitsandbytes、PEFT 等生态集成，方便模型加载与低秩微调。
- 开源许可：BSD-3-Clause。
