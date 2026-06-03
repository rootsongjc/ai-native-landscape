---
name: AReaL
slug: areal
homepage: https://inclusionai.github.io/AReaL/
repo: https://github.com/inclusionai/areal
license: Apache-2.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Framework
  - RLHF
  - Training
description: >-
  A fully asynchronous reinforcement learning system for large reasoning and agentic models that emphasizes scalability
  and reproducibility.
author: 蚂蚁集团
ossDate: '2025-02-24T07:23:43Z'
featured: false
status: tracked
---
AReaL is an open-source, fully asynchronous reinforcement learning system designed for large reasoning and agentic models, maintained by the inclusionAI community with contributions from Ant Group and academic partners. It provides algorithm-system co-design to enable stable, high-throughput RL training that scales from a single node to thousands of GPUs.

## Core Capabilities

- **Fully asynchronous training pipeline** that decouples rollout and training for maximum throughput
- **Algorithm zoo** including GRPO, GSPO, and LitePPO with reproducible experiment configs
- **Multi-backend support** for Ray, Megatron, and PyTorch FSDP distributed training
- **Composable agentic rollout** with tool integration for multi-step reasoning and RAG-style workflows
- **AReaL-lite** mode for rapid prototyping on resource-constrained environments

## Research & Reproducibility

- Published datasets, trained models, and training recipes alongside source code
- Standardized benchmark configurations for comparing RL algorithms
- Apache-2.0 licensed with comprehensive documentation for engineering integration
- Co-developed with Tsinghua University and other academic partners

## Use Cases

- Training large reasoning or agentic models on GPU clusters with high hardware utilization
- Building multi-turn agents and search agents with asynchronous rollouts
- Developing tool-integrated reasoning pipelines where fast iteration matters
- Experimenting with new RL algorithms using the lightweight AReaL-lite setup
