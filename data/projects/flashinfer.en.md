---
name: FlashInfer
slug: flashinfer
homepage: https://flashinfer.ai
repo: https://github.com/flashinfer-ai/flashinfer
license: MIT
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Inference
description: >-
  FlashInfer is a kernel library and JIT toolset for LLM serving that implements efficient attention and sampling
  kernels to improve GPU throughput and latency for inference serving.
author: flashinfer-ai
ossDate: '2023-01-01T00:00:00.000Z'
featured: false
status: tracked
---
## Introduction

FlashInfer is a kernel library and JIT toolset optimized for LLM serving scenarios. It provides high-performance implementations of attention and sampling, aiming to reduce latency and improve GPU bandwidth utilization. FlashInfer supports integration with PyTorch, TVM, and other frameworks, making it suitable for building high-throughput inference services.

## Key Features

- Efficient sparse/dense attention kernels and sampling implementations.
- Production-ready kernel customization and JIT compilation pipeline, supporting precompilation and caching mechanisms.
- Compatible with mainstream inference frameworks (PyTorch/TVM/C++).
- Memory and operator optimization strategies tailored for LLM serving.

## Use Cases

- Large-scale LLM inference services and low-latency online inference.
- Research and engineering deployment of custom attention or sampling strategies.
- Integration with inference stacks such as vLLM and TGI to optimize overall throughput.

## Technical Highlights

- Provides CUDA and C++ level kernel optimizations, supporting various GPU architectures.
- Enables rapid experimentation and engineering packaging through a plugin-based JIT mechanism.
