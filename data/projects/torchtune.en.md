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
description: >-
  A PyTorch-native post-training and fine-tuning toolkit providing reusable recipes, optimizations, and quantization
  support for LLM training and evaluation.
logo: ''
author: torchtune maintainers
ossDate: '2023-10-20T21:10:49.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

Torchtune is a PyTorch-native library for post-training and fine-tuning, focusing on end-to-end workflows for large models. It provides reusable YAML recipes, a CLI (tune), and native PyTorch implementations for SFT, LoRA/QLoRA, knowledge distillation, RLHF/DPO/GRPO, and quantization-aware training.

## Key features

- Reusable post-training recipes (SFT, LoRA/QLoRA, KD, RLHF, QAT, etc.).
- Support for modern models and configurations (Llama, Llama4, Gemma2, Qwen, Mistral, Phi, etc.).
- Memory and performance optimizations (activation checkpointing, offloading, 8-bit optimizers).
- CLI-driven workflow and YAML configs for reproducible experiments.
- Single-node and multi-node training support with extensive example configs.

## Use cases

- Conducting LLM fine-tuning experiments (LoRA/QLoRA and full fine-tuning).
- Memory and speed optimization and quantization-aware training for constrained hardware.
- Building reusable training pipelines and sharing configs across teams.
- Knowledge distillation, RLHF, and distributed training scenarios.

## Technical details

- Built on native PyTorch APIs for easy integration and extension.
- Exposes multiple optimization levers and memory strategies (optimizer_in_bwd, activation offloading, fused optimizer step).
- Integrates with Hugging Face Hub, bitsandbytes, PEFT, and other ecosystem tools for model loading and low-rank adaptation.
- License: BSD-3-Clause.
