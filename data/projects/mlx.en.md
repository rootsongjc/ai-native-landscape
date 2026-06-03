---
name: MLX
slug: mlx
homepage: https://ml-explore.github.io/mlx/
repo: https://github.com/ml-explore/mlx
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Framework
  - ML Platform
description: >-
  An array framework for machine learning optimized for Apple Silicon, offering NumPy-like Python APIs plus C++, C and
  Swift bindings.
author: ml-explore
ossDate: '2023-11-28T23:33:45.000Z'
featured: false
status: tracked
---

## Introduction

MLX is an array framework for machine learning optimized for Apple Silicon. It provides NumPy-like Python APIs and also offers C++, C and Swift bindings. MLX supports composable function transformations, lazy computation, dynamic graph construction, and multi-device execution.

## Key features

- Familiar NumPy-style Python API with higher-level packages like `mlx.nn` and `mlx.optimizers`.
- Composable function transforms for autodiff, vectorization, and graph optimization.
- Lazy computation and a unified memory model to minimize device data transfers.

## Use cases

- Research and prototyping on Apple Silicon (M-series) with efficient array operations.
- Multi-language projects requiring C++/Python/Swift interoperability.
- Applications that benefit from lazy execution and unified memory for performance.

## Technical details

- Core implemented in C++ with Python package and extensive examples.
- Supports installation via PyPI and source builds; detailed docs on ReadTheDocs.
- Example repositories (`mlx-examples`) demonstrate transformer LM, Stable Diffusion, Whisper, and LoRA finetuning.
