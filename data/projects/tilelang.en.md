---
name: TileLang
slug: tilelang
homepage: https://tilelang.com/
repo: https://github.com/tile-ai/tilelang
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
  - Framework
description: >-
  TileLang is a domain-specific language for high-performance AI kernels that simplifies writing GPU/CPU/accelerator
  operators.
logo: ''
author: Tile AI
ossDate: '2024-10-03T09:25:45.000Z'
featured: false
status: tracked
---

## Overview

TileLang (tile-lang) is a DSL designed for implementing high-performance operators (e.g., GEMM, FlashAttention) on GPUs and CPUs. Built on top of TVM, it provides concise Pythonic syntax and tooling for performance engineering.

## Key features

- Concise DSL and Python API for operator expression and layout annotations.
- Multi-backend support (CUDA, HIP, CPU) with device-specific optimizations and examples.
- Comprehensive examples and benchmark suites, including MLA decoding, FlashMLA and dequantize GEMM.

## Use cases

- Implementing and optimizing kernels for deep learning workloads.
- Performance tuning on cloud GPUs and accelerators (H100, A100, MI300X, etc.).
- Research and engineering workflows connecting high-level models to low-level, optimized kernels.

## Technical details

- Core implementation uses C++ and Python; relies on TVM for compilation and JIT workflows.
- Offers source build instructions, pip packages and nightly builds for quick experimentation.
- Includes benchmark scripts and device-specific examples to reproduce reported performance results.
