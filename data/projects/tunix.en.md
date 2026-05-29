---
name: Tunix
slug: tunix
homepage: https://pypi.org/project/tunix/
repo: https://github.com/google/tunix
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - FineTune
  - Framework
  - ML Platform
  - Training
description: >-
  Tunix is a JAX-native post-training library for LLMs providing efficient fine-tuning, RL training, and distillation
  tools.
logo: ''
author: Google
ossDate: '2025-09-30T00:00:00+08:00'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Tunix is a JAX-native library for post-training large language models. It aims to streamline fine-tuning, reinforcement learning, and distillation workflows while providing scalability and TPU-native optimizations.

## Key features

- Support for full-weight fine-tuning and parameter-efficient fine-tuning (LoRA/Q-LoRA).
- Reinforcement learning algorithms including PPO, GRPO and token-level GSPO, and preference fine-tuning with DPO.
- Modular, composable components and examples for building reproducible training pipelines.
- Optimizations for distributed training and TPU execution.

## Use cases

- Research and engineering for post-training LLMs and knowledge distillation.
- Large-scale fine-tuning and RL experiments on TPUs or multi-GPU clusters.
- Educational examples and reproducible training recipes.

## Technical details

- Built on JAX/Flax, compatible with common models and training paradigms, and provides comprehensive example notebooks.
- Supports installation from PyPI or running directly from GitHub source, licensed under Apache-2.0.
