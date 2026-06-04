---
name: TorchTitan
slug: torchtitan
homepage: https://pytorch.org/
repo: https://github.com/pytorch/torchtitan
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
description: A PyTorch-native platform for generative model pretraining and distributed optimization.
author: PyTorch
ossDate: '2023-12-13T01:51:37.000Z'
featured: false
status: tracked
---

TorchTitan is PyTorch's production-grade platform for large-scale generative model pretraining and distributed optimization. It provides a complete reference implementation that demonstrates how to leverage PyTorch's distributed training capabilities to build production-class model training systems, with built-in training recipes for mainstream models like Llama 3.1.

## Parallelism Strategies

- FSDP2 (Fully Sharded Data Parallel) for memory-efficient distributed training across thousands of GPUs
- Tensor Parallel for splitting individual model layers across devices
- Context Parallel for handling ultra-long sequence lengths in training
- Pipeline Parallel for partitioning model depth across multiple stages
- Composable parallelism allowing flexible combination of strategies per workload

## Training Infrastructure

- Complete training scripts and configuration system with flexible hyperparameter tuning
- Efficient data loaders and checkpoint management with resume-from-failure support
- Mixed precision training, gradient checkpointing, and activation checkpointing for memory optimization
- Performance monitoring and tuning tools to help optimize training throughput

## Engineering Design

- Deep integration with PyTorch 2.x distributed primitives for maximum performance
- Modular architecture allowing teams to select and combine parallelism strategies as needed
- Readable, maintainable codebase suitable as both a learning resource and a foundation for custom development
- Runs on single-machine multi-GPU, multi-node clusters, and cloud environments
