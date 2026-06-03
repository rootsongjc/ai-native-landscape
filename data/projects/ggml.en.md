---
name: ggml
slug: ggml
homepage: https://huggingface.co/blog/introduction-to-ggml
repo: https://github.com/ggml-org/ggml
license: MIT
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
description: ggml is a lightweight tensor library for machine learning optimized for efficient model inference across hardware.
author: ggml-org
ossDate: '2022-09-18T17:07:19Z'
featured: false
status: tracked
---
ggml is a lightweight C/C++ tensor library for machine learning that enables large model inference on commodity hardware. It focuses on low memory usage and high performance across diverse hardware platforms, supporting integer quantization, automatic differentiation, and multiple acceleration backends for building efficient local inference toolchains.

## Hardware Acceleration

- CUDA backend for NVIDIA GPU acceleration
- HIP backend for AMD GPU support
- SYCL backend for Intel GPU and accelerator hardware
- Optimized CPU kernels for ARM and x86 architectures

## Quantization and Efficiency

- Integer quantization support to reduce model size and inference cost
- Multiple quantization formats balancing precision vs. speed trade-offs
- Minimal runtime dependencies for easy portability across platforms
- Designed for edge and local deployments with constrained resources

## Training and Research

- Automatic differentiation with common optimizers for lightweight training experiments
- Experimentation platform for quantization strategies and low-memory inference techniques
- Ships with example programs such as GPT inference for quick onboarding

## Foundation and License

- Implemented in C/C++ with minimal external dependencies
- Serves as the foundation for projects like llama.cpp and whisper.cpp
- MIT-licensed for both community-driven ecosystem development and commercial use
