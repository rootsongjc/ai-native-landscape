---
name: AReaL
slug: areal
homepage: https://inclusionai.github.io/AReaL/
repo: https://github.com/inclusionai/areal
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Framework
  - RLHF
  - Training
description: >-
  A fully asynchronous reinforcement learning system for large reasoning and agentic models that emphasizes scalability
  and reproducibility.
logo: ''
author: 蚂蚁集团
ossDate: '2025-02-24T07:23:43Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

AReaL is an open-source, fully asynchronous reinforcement learning system designed for large reasoning and agentic models. Maintained by the inclusionAI community with contributions from Ant Group and academic partners, AReaL provides algorithm–system co-design to enable stable, high-throughput RL training that scales from a single node to thousands of GPUs while publishing reproducible research artifacts.

## Main Features

- Fully asynchronous training pipeline that improves throughput and scalability.
- A rich set of algorithms and examples (GRPO, GSPO, LitePPO, etc.) for reproducible experiments.
- Support for multiple model families and training backends, including distributed parameter training and LoRA fine-tuning.
- Apache-2.0 licensed with comprehensive documentation and examples for engineering integration.

## Use Cases

- Research and engineering teams training large reasoning or agentic models on clusters can use AReaL as an efficient training framework.
- Building multi-turn agents, search agents, or tool-integrated reasoning pipelines where asynchronous rollouts and scalability speed up iteration.
- Rapid prototyping with AReaL-lite for algorithm development and resource-constrained experimentation.

## Technical Features

- Algorithm-system co-design that stabilizes asynchronous RL and maximizes efficiency.
- Detailed tutorials and quickstart examples, supporting Ray, Megatron, PyTorch FSDP and other backends.
- Composable agentic rollout and tool-integration support for multi-step reasoning and RAG-style workflows.
- Focus on reproducibility and open science: datasets, models, and training recipes are published alongside code.
