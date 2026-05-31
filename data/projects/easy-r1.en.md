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

## Detailed Introduction

EasyR1 is an efficient, scalable reinforcement learning (RL) training framework for multimodal models. Built as a clean fork of veRL, EasyR1 incorporates engineering optimizations—such as HybridEngine and vLLM SPMD support—to enable RL training and evaluation for large language and vision-language models. The project includes Docker images, example scripts, and dataset templates to simplify experimentation and deployment.

## Main Features

- Multimodal model support: compatible with text and vision-text models and dataset formats.
- Scalable training engine: leverages HybridEngine and distributed strategies for multi-node training.
- Algorithms and training tricks: supports GRPO, DAPO, Reinforce++, and optimizations like padding-free training.
- Engineering and monitoring: provides Docker images, and integrations with Wandb, Mlflow and Tensorboard.

## Use Cases

EasyR1 is suitable for research and engineering that require RL-based policy optimization on large or multimodal models: improving multimodal reasoning, training reward models, reproducing RL baselines, and running large-scale multi-node experiments for performance validation.

## Technical Features

- vLLM SPMD and custom parallel strategies to reduce memory bottlenecks.
- Dataset examples and model merger scripts for Hugging Face checkpoint interoperability.
- Containerized deployment recipes and Ray multi-node examples for cloud-native execution.
- Open-source under Apache-2.0 with an active ecosystem and multiple reproduction projects.
