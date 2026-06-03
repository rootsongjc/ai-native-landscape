---
name: OpenEnv — Agentic Execution Environments
slug: openenv
homepage: https://pypi.org/project/openenv-core/
repo: https://github.com/meta-pytorch/openenv
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Simulator
  - Training
description: >-
  An end-to-end framework for creating, deploying and using isolated execution environments, aimed at agentic RL
  training and environment development.
author: Meta PyTorch
ossDate: '2025-10-01T16:13:38.000Z'
featured: false
status: tracked
---

## Introduction

OpenEnv is an end-to-end framework designed for agentic reinforcement learning and environment development. It exposes simple Gymnasium-like APIs (step, reset, state), supports containerized deployment, and provides HTTP client interfaces to interact with isolated environments. OpenEnv helps environment authors package secure, reproducible environments and provides researchers with tools for training, debugging and deployment.

## Key features

- Standardized APIs for easy integration with RL training loops.
- Containerized isolation for safe execution and easy distribution.
- Built-in web interface for interactive inspection and debugging.
- Example environments and SDKs to accelerate adoption.

## Use cases

- Research and training in reproducible, isolated environments.
- Packaging and publishing custom environments as container images with HTTP access.
- Teaching and demos using the web UI and example environments.

## Technical highlights

- Strongly-typed action/observation/state models to reduce integration errors.
- Quick-start examples (Echo, Coding, Atari) covering debug and production scenarios.
- Local Docker support and planned Kubernetes provider for scale.
- BSD-3-Clause licensed open-source project maintained by the Meta PyTorch team.
