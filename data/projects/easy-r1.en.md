---
name: EasyR1
slug: easy-r1
homepage: https://verl.readthedocs.io/en/latest/index.html
repo: https://github.com/hiyouga/easyr1
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
  - Training
description: >-
  EasyR1 is an efficient, scalable RL training framework for multimodal models, based on veRL and optimized for
  large-model training.
logo: ''
author: hiyouga
ossDate: '2025-02-22T04:17:31Z'
featured: false
status: tracked
---

## Overview

EasyR1 is an efficient, scalable, multi-modality reinforcement learning training framework based on veRL, optimized for reasoning models. It incorporates engineering optimizations such as HybridEngine and vLLM SPMD support to enable RL training and evaluation for large language and vision-language models.

## Key Features

- Multimodal model support compatible with text and vision-text models and dataset formats.
- Scalable training engine leveraging HybridEngine and distributed strategies for multi-node training.
- Built-in algorithms including GRPO, DAPO, and Reinforce++ with optimizations like padding-free training.
- Monitoring integrations with Wandb, MLflow, and Tensorboard for experiment tracking.

## Use Cases

- Improving multimodal reasoning capabilities through RL-based policy optimization on large models.
- Training and evaluating reward models and reproducing RL baselines for research validation.
- Running large-scale multi-node experiments for performance benchmarking and production deployment.

## Technical Details

- vLLM SPMD and custom parallel strategies to reduce memory bottlenecks during training.
- Dataset examples and model merger scripts for Hugging Face checkpoint interoperability.
- Containerized deployment recipes with Ray multi-node examples for cloud-native execution.
