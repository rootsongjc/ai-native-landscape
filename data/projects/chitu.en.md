---
name: Chitu
slug: chitu
homepage: https://qc-ai.cn
repo: https://github.com/thu-pacman/chitu
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Model
description: >-
  A production-focused inference framework for large language models, offering high performance, multi-hardware support,
  and scalable deployment.
logo: ''
author: thu-pacman
ossDate: '2025-02-20T06:34:38Z'
featured: false
status: tracked
---

## Overview

Chitu is a high-performance inference framework for large language models developed by Tsinghua University, focusing on efficiency, flexibility, and availability. It delivers production-grade, low-latency LLM inference across a wide range of deployment scenarios from CPU-only and single-GPU setups to large-scale distributed clusters, with multi-vendor hardware compatibility for enterprise adoption.

## Key Features

Multi-hardware support with optimized implementations for NVIDIA GPUs and various domestic AI accelerators. Scalable deployment spanning single-node heterogeneous CPU/GPU configurations to full distributed cluster environments. Production stability engineering for long-term concurrent operation with comprehensive tooling including official container images, developer guides, and performance benchmarks.

## Use Cases

On-premise or edge LLM inference for enterprise Q&A systems, real-time online inference services, and batched model serving. Scenarios requiring domestic accelerator support or mixed-hardware optimization in regulated or cost-sensitive environments. Large-scale production deployments needing stable, high-throughput inference with flexible hardware configurations.

## Technical Details

Combines high-performance operator implementations with quantization and mixed-precision support including FP4, FP8, and BF16 formats. Streaming and batch optimizations for maximizing throughput in production serving scenarios. Extensible plugin and adapter architecture ensures compatibility with mainstream LLMs and diverse backend hardware.
