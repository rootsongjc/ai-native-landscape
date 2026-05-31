---
name: JAX
slug: jax
homepage: https://docs.jax.dev/
repo: https://github.com/jax-ml/jax
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Dev Tools
  - Optimization
  - Training
description: High-performance Python library for accelerator-oriented array computation and composable program transformations.
logo: ''
author: JAX Community
ossDate: '2018-01-01T00:00:00.000Z'
featured: false
status: tracked
---

## Overview

JAX is a high-performance Python library for accelerator-oriented array computation and composable transformations (automatic differentiation, JIT compilation, and vectorization). It enables researchers and engineers to scale NumPy-style code to GPUs and TPUs, providing a powerful foundation for model research and high-performance numerical computing.

## Key features

- Automatic differentiation (grad) and higher-order derivatives.
- JIT compilation via XLA for efficient GPU/TPU execution.
- Vectorization (vmap), batching and sharding primitives for scaling.
- NumPy-compatible APIs and an ecosystem with jaxlib, Flax, and Optax.

## Use cases

- Research and experimentation in optimization, training algorithms and scientific computing.
- Accelerating NumPy workloads on modern accelerators.
- Building differentiable systems and high-performance numerical pipelines.

## Technical notes

JAX centers on composable function transformations. Combining grad, jit and vmap yields concise, high-performance implementations. It uses XLA as the backend and is widely adopted in research and production for workloads requiring fine-grained control over performance.
