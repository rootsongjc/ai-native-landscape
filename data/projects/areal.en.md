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
status: tracked
---

## Overview

AReaL is an open-source, fully asynchronous reinforcement learning system designed for large reasoning and agentic models, maintained by the inclusionAI community with contributions from Ant Group and academic partners. It provides algorithm-system co-design to enable stable, high-throughput RL training that scales from a single node to thousands of GPUs while publishing reproducible research artifacts.

## Key Features

AReaL features a fully asynchronous training pipeline for improved throughput, a rich set of algorithms and examples (GRPO, GSPO, LitePPO) for reproducible experiments, and support for multiple model families and training backends including distributed parameter training and LoRA fine-tuning. It is Apache-2.0 licensed with comprehensive documentation for engineering integration.

## Use Cases

Research and engineering teams training large reasoning or agentic models on GPU clusters can use AReaL as an efficient training framework. It is also suited for building multi-turn agents, search agents, or tool-integrated reasoning pipelines where asynchronous rollouts accelerate iteration, as well as rapid prototyping with AReaL-lite for resource-constrained experimentation.

## Technical Details

AReaL employs algorithm-system co-design to stabilize asynchronous RL and maximize efficiency, with support for Ray, Megatron, and PyTorch FSDP backends. It offers composable agentic rollout and tool-integration for multi-step reasoning and RAG-style workflows, with a focus on reproducibility by publishing datasets, models, and training recipes alongside code.
