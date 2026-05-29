---
name: XLA
slug: xla
homepage: null
repo: https://github.com/openxla/xla
license: Unknown
category: inference-serving
subCategory: gpu-acceleration
tags:
  - Optimization
  - Performance
description: >-
  XLA (Accelerated Linear Algebra) is a compiler for machine learning that generates optimized code for CPUs, GPUs, and
  accelerators to improve model execution performance.
logo: ''
author: OpenXLA
ossDate: '2017-01-01T00:00:00.000Z'
featured: false
status: tracked
---

## Overview

XLA (Accelerated Linear Algebra) is a compiler framework for machine learning that compiles high-level model graphs into efficient code for different hardware targets, reducing memory footprint and improving execution speed.

## Key features

- Multi-backend support: generates optimized code for CPU, GPU, and accelerators.
- Operator fusion and optimizations: applies fusion and constant folding to improve runtime efficiency.
- Framework integrations: commonly used as a backend for TensorFlow and JAX to accelerate model execution.

## Use cases

- Performance optimization for model training and inference by compiling graphs into hardware-specific code.
- Edge and heterogeneous deployments by generating efficient execution plans for various devices.

## Technical details

- Uses compiler technologies like LLVM for backend code generation, focusing on numeric operation and memory access optimization.
