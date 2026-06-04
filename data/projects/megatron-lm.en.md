---
name: Megatron-LM
slug: megatron-lm
homepage: https://developer.nvidia.com/
repo: https://github.com/nvidia/megatron-lm
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
description: Reference implementation from NVIDIA for large-scale model training and inference with distributed optimizations.
author: NVIDIA
ossDate: '2019-03-21T16:15:52.000Z'
featured: false
status: tracked
---

## Overview

Megatron-LM is NVIDIA's open-source framework for training large language models at extreme scale, providing production-grade training recipes, modular parallelism components, and performance-optimized kernels. It is designed to maximize GPU utilization across large clusters and serves as a reference implementation for researchers and engineers working on models ranging from billions to trillions of parameters.

## Key Features

- Multiple parallelism strategies including tensor, pipeline, context, and data parallelism (FSDP) that can be composed for flexible scaling across GPU clusters.
- Highly optimized CUDA kernels and mixed-precision support (FP16, BF16, FP8) to maximize training throughput and memory efficiency on NVIDIA hardware.
- End-to-end training scripts, configuration templates, and benchmark examples for reproducible large-scale experiments.

## Use Cases

- Research institutions and engineering teams training large-scale LLMs from scratch or fine-tuning foundation models on multi-node GPU clusters.
- Performance tuning and scaling experiments to validate distributed training strategies and kernel optimizations on NVIDIA GPU architectures.
- Organizations preparing production-grade model training pipelines that require reproducible benchmarks and battle-tested training recipes.

## Technical Details

- Built on PyTorch with a modular Megatron Core library that exposes composable components for attention, embedding, and transformer layers.
- Integrates with NVIDIA's Transformer Engine and other acceleration libraries to leverage hardware-specific optimizations like FlashAttention and FP8 quantization.
- Comprehensive documentation and example configurations covering pre-training, fine-tuning, and inference workflows for reproducible results.
