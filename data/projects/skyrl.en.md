---
name: SkyRL
slug: skyrl
homepage: https://skyrl.readthedocs.io/en/latest/
repo: https://github.com/novasky-ai/skyrl
license: Apache-2.0
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
  - Simulator
  - Training
description: >-
  A modular full-stack reinforcement learning (RL) library for large language models (LLMs), designed for long-horizon,
  real-world tasks.
author: NovaSky-AI
ossDate: '2025-04-22T17:33:31Z'
featured: false
status: tracked
---

SkyRL is a modular full-stack reinforcement learning library from NovaSky-AI designed specifically for training large language models on long-horizon, real-world tasks. It bundles environment construction, a high-performance training stack, agent abstractions, and deployment tooling into a cohesive framework that supports reproducible research and production engineering.

## Key Features

- Organized into independent subpackages (skyrl-agent, skyrl-train, skyrl-gym) that can be composed and extended individually
- Configurable experiment management for large-scale distributed training across clusters and cloud infrastructure
- Rich suite of Gymnasium-compatible tool-use environments for realistic multi-step tasks
- Command-line and configuration-driven interfaces for straightforward experiment launching
- Comprehensive documentation and examples under the Apache-2.0 license

## Use Cases

- Training agents on multi-turn dialog and tool-use tasks requiring sustained reasoning over many interaction steps
- Benchmarking and comparing RL algorithms in realistic, long-horizon environments
- Reproducing published results and building new baselines in academic research
- Teaching reinforcement learning concepts through hands-on experimentation with LLM agents

## Technical Details

- Built in Python with integration for mainstream deep learning frameworks and distributed training toolchains
- Prioritizes performance and scalability for large-scale training workloads
- Built-in monitoring modules export metrics for full experiment reproducibility
- Supports both local cluster and cloud infrastructure deployment out of the box
