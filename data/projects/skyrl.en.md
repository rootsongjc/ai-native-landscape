---
name: SkyRL
slug: skyrl
homepage: https://skyrl.readthedocs.io/en/latest/
repo: https://github.com/novasky-ai/skyrl
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
  - Simulator
  - Training
description: >-
  A modular full-stack reinforcement learning (RL) library for large language models (LLMs), designed for long-horizon,
  real-world tasks.
logo: ''
author: NovaSky-AI
ossDate: '2025-04-22T17:33:31Z'
featured: false
status: tracked
---

## Detailed Introduction

SkyRL is a modular full-stack reinforcement learning (RL) library maintained by NovaSky-AI, focused on building scalable training and evaluation pipelines for large language models (LLMs). The project includes subpackages such as `skyrl-agent`, `skyrl-train`, and `skyrl-gym`, covering environment construction, training stack, agent layers, and deployment tooling to support reproducible research and engineering for long-horizon, real-world tasks.

## Main Features

- Modular components: split into training, agent, and environment libraries for easy composition and extension.
- Reproducible training pipelines: high-performance training stack and configurable experiment management for large-scale training.
- Rich environment suite: `skyrl-gym` provides tool-use environments implemented with the Gymnasium API.
- Open collaboration: Apache-2.0 license with comprehensive docs and examples for community contributions.

## Use Cases

- Training long-horizon agents for multi-turn tool-use and dialog tasks.
- Benchmarking and evaluating training algorithms and model performance in realistic environments.
- Teaching and research: reproducing experiments, building baselines, and tuning performance.

## Technical Features

- Implemented in Python and compatible with common deep-learning and distributed training toolchains, with a focus on performance and scalability.
- Command-line and configuration-driven interfaces enable running large-scale training on cloud or local clusters.
- Integrated monitoring and evaluation modules export experiment metrics to support reproducibility.
