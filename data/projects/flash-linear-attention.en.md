---
name: Flash Linear Attention (fla)
slug: flash-linear-attention
homepage: https://pypi.org/project/flash-linear-attention/
repo: https://github.com/fla-org/flash-linear-attention
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
description: A Triton-based, PyTorch library of efficient linear-attention kernels and models for scalable sequence modeling.
logo: ''
author: fla-org
ossDate: '2023-12-20T06:50:18.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

`fla` (Flash Linear Attention) is a Triton-based PyTorch library providing efficient implementations of state-of-the-art linear attention kernels, fused modules, and model components. It targets high-performance training and inference across hardware (NVIDIA/AMD/Intel).

## Key Features

- Wide collection of linear attention kernels and models (GLA, DeltaNet, Mamba, etc.).
- Triton-optimized kernels and fused modules for memory and compute efficiency.
- Integration-ready layers for Hugging Face `transformers` and benchmarking tools.

## Use Cases

- Replace standard attention with linear variants in large-model training for lower memory footprint.
- Research and benchmarking of subquadratic attention mechanisms.
- Production deployment of memory-efficient attention layers.

## Technical Highlights

- Triton kernels for fused operations and efficient cross-entropy implementations.
- Support for hybrid models (mixing standard and linear attention layers).
- Extensive examples, benchmarks, and evaluation harness compatible with HF-style models.
