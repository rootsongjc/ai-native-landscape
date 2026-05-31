---
name: Megatron-LM
slug: megatron-lm
homepage: https://developer.nvidia.com/
repo: https://github.com/nvidia/megatron-lm
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - ML Platform
description: Reference implementation from NVIDIA for large-scale model training and inference with distributed optimizations.
logo: ''
author: NVIDIA
ossDate: '2019-03-21T16:15:52.000Z'
featured: false
status: tracked
---

## Detailed Introduction

Megatron-LM is NVIDIA's open-source reference implementation for training and running large language models at scale. The project focuses on delivering production-grade training recipes, modular components for tensor and pipeline parallelism, and performance-tuned kernels to maximize GPU utilization across large clusters.

## Main Features

- Support for multiple parallelism strategies (tensor, pipeline, context, FSDP) for flexible scaling.
- Optimized kernels and mixed-precision support (FP16/BF16/FP8) to improve throughput and memory efficiency.
- End-to-end training scripts and examples for reproducible performance benchmarks.

## Use Cases

- Research and engineering for training large-scale LLMs.
- Performance tuning, kernel validation, and scaling experiments on NVIDIA GPUs.
- Preparing model training pipelines for production deployments.

## Technical Features

- Built on PyTorch with modular Megatron Core components for composition and extension.
- Integrates with acceleration libraries such as Transformer Engine to leverage vendor optimizations.
- Documentation and examples aimed at reproducible performance and engineering adoption.
