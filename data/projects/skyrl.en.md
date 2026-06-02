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

## Overview

SkyRL is a modular full-stack reinforcement learning library from NovaSky-AI designed specifically for training large language models on long-horizon, real-world tasks. It bundles environment construction, a high-performance training stack, agent abstractions, and deployment tooling into a cohesive framework that supports reproducible research and production engineering.

## Key Features

SkyRL is organized into independent subpackages including skyrl-agent, skyrl-train, and skyrl-gym, allowing researchers to compose and extend individual components without modifying the entire stack. It provides configurable experiment management for large-scale distributed training, a rich suite of Gymnasium-compatible tool-use environments, and comprehensive documentation under the Apache-2.0 license.

## Use Cases

Researchers and engineers use SkyRL to train agents on multi-turn dialog and tool-use tasks that require sustained reasoning over many interaction steps. It also serves as a benchmarking platform for comparing RL algorithms in realistic environments, and as a teaching tool for reproducing published results and building new baselines.

## Technical Details

Built in Python, SkyRL integrates with mainstream deep learning frameworks and distributed training toolchains while prioritizing performance and scalability. Its command-line and configuration-driven interfaces make it straightforward to launch experiments on both local clusters and cloud infrastructure, and built-in monitoring modules export metrics for full experiment reproducibility.
