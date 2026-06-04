---
name: verl
slug: verl
homepage: https://verl.readthedocs.io/en/latest/
repo: https://github.com/volcengine/verl
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Data
  - Dev Tools
description: A reinforcement learning training framework for large models, designed for scalable RLHF and agent training.
author: 字节跳动
ossDate: '2024-10-31T06:11:15.000Z'
featured: false
status: tracked
---

## Introduction

verl is a reinforcement learning (RL) training framework for large models, offering high-performance RLHF/agent training pipelines and supporting distributed backends such as FSDP and Megatron.

## Key Features

- Supports multiple RL algorithms and training recipes, including PPO, GRPO, and DAPO
- Integrates with inference/model ecosystems like vLLM, SGLang, and Hugging Face
- Scalable implementation for large-scale multi-GPU and expert parallelism

## Use Cases

- Training alignment models (RLHF) and agents based on LLMs
- Research and reproduction of RL training recipes and baselines
- Model performance and throughput optimization on large clusters

## Technical Highlights

- Supports FSDP/FSDP2, Megatron, vLLM backends, and hybrid parallel strategies
- Extensible recipes and modular training pipelines
- Rich examples, documentation, and community contributions, suitable for production adaptation
