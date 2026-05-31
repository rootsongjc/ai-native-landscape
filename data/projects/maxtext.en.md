---
name: MaxText
slug: maxtext
homepage: https://maxtext.readthedocs.io/en/latest/
repo: https://github.com/ai-hypercomputer/maxtext
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Framework
  - LLM
  - ML Platform
description: >-
  A high-performance, highly scalable open-source LLM library and reference implementation built with Python and JAX,
  targeting Google Cloud TPUs and GPUs.
logo: ''
author: AI-Hypercomputer
ossDate: '2023-02-28T19:47:29.000Z'
featured: false
status: tracked
---

## Introduction

MaxText is a high-performance, highly scalable open-source LLM library and reference implementation written in Python and JAX. It is optimized for training on Google Cloud TPUs and GPUs and provides a collection of models, training pipelines, and reproducible examples for both research and production use.

## Key features

- JAX-based implementations that maximize model FLOPs utilization (MFU).
- Scalable pre-training and post-training pipelines for large models.
- A model library supporting various architectures and configurations for experimentation and production.

## Use cases

- Reference implementation for large-scale pre-training and research experiments.
- Supervised fine-tuning (SFT), reinforcement learning workflows (GRPO), and large-scale benchmarking.
- Production-oriented training and optimization on TPU/GPU clusters.

## Technical details

- Pure Python/JAX codebase leveraging the XLA compiler for performance.
- Support for a wide range of models (Gemma, Llama, Qwen, Mistral) and MoE variants.
- Comprehensive docs and examples hosted on ReadTheDocs with installation and getting-started guides.
