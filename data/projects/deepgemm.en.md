---
name: DeepGEMM
slug: deepgemm
homepage: null
repo: https://github.com/deepseek-ai/deepgemm
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Framework
description: >-
  Clean and efficient FP8 GEMM kernels with fine-grained scaling to support accurate and performant low-precision matrix
  computations.
logo: ''
author: DeepSeek
ossDate: '2025-02-13T09:09:21.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

DeepGEMM provides efficient FP8 and low-precision GEMM kernels focused on balancing numerical stability and performance. Fine-grained scaling strategies and optimized GPU kernels help reduce numerical errors while leveraging low-precision speedups.

## Key Features

- High-performance FP8 GEMM implementations optimized for deep learning training and inference.
- Fine-grained scaling strategies to improve numerical stability while maintaining performance.
- CUDA-based kernels designed for real-world GPU acceleration.

## Use Cases

- Using low-precision matrix operations to save memory and increase throughput in model training and inference.
- Replacing default GEMM operators with custom kernels to optimize hotspot performance.
- Integrating as a low-precision computation library when trading off precision and speed.

## Technical Details

- Fine-grained scaling to mitigate FP8 numerical bias.
- Optimized CUDA kernels and memory layouts for parallel efficiency on GPUs.
- Integration-friendly interfaces for PyTorch and other frameworks.
