---
name: Chitu
slug: chitu
homepage: https://qc-ai.cn
repo: https://github.com/thu-pacman/chitu
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Deployment
  - Inference
  - Model
description: >-
  A production-focused inference framework for large language models, offering high performance, multi-hardware support,
  and scalable deployment.
author: thu-pacman
ossDate: '2025-02-20T06:34:38Z'
featured: false
status: tracked
---
Chitu is a high-performance inference framework for large language models developed by Tsinghua University, focusing on efficiency, flexibility, and availability. It delivers production-grade, low-latency LLM inference across a wide range of deployment scenarios from CPU-only and single-GPU setups to large-scale distributed clusters, with multi-vendor hardware compatibility for enterprise adoption.

## Multi-Hardware Support

- Optimized implementations for NVIDIA GPUs and various domestic AI accelerators
- Mixed-hardware optimization for regulated or cost-sensitive environments
- Quantization and mixed-precision support including FP4, FP8, and BF16 formats
- Extensible plugin and adapter architecture ensuring compatibility with diverse backend hardware

## Scalable Deployment

- Deployment spanning single-node heterogeneous CPU/GPU configurations to full distributed cluster environments
- Streaming and batch optimizations for maximizing throughput in production serving scenarios
- Production stability engineering for long-term concurrent operation
- Official container images and comprehensive deployment guides for enterprise adoption

## Performance Engineering

- High-performance operator implementations tuned for mainstream LLMs
- Batched serving optimizations for high-throughput inference endpoints
- Developer guides and performance benchmarks for hardware selection and capacity planning
- Compatible with enterprise Q&A systems, real-time online inference services, and batched model serving
