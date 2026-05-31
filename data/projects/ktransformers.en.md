---
name: KTransformers
slug: ktransformers
homepage: https://kvcache-ai.github.io/ktransformers/
repo: https://github.com/kvcache-ai/ktransformers
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - AI Kernel Library
  - Inference
description: >-
  A flexible framework for LLM inference optimizations, offering kernel injection, prefix caching and multi-level
  acceleration strategies.
logo: ''
author: KVCACHE / MADSys
ossDate: '2024-07-26T00:00:00.000Z'
featured: false
status: tracked
---

## Introduction

KTransformers is an open-source framework focused on optimizing LLM inference through kernel injection, prefix caching and multi-level acceleration strategies. It aims to speed up generation and reduce memory usage across desktop and cluster deployments.

## Key features

- Kernel injection to replace native modules with optimized kernels.
- Multi-level prefix cache (GPU-CPU-Disk) to improve throughput for long contexts.
- Compatibility with Transformers API and multiple model formats (GGUF, safetensors).
- Extensive documentation, tutorials and demos for deployment and injection.

## Use cases

- Desktop inference: run large models efficiently on limited VRAM machines.
- Server-side deployment: accelerate inference on multi-GPU clusters.
- Research: prototype and benchmark new kernels, quantization and MoE strategies.

## Technical characteristics

- Python-first user API with C++/CUDA performance kernels under the hood.
- Support for ROCm, AMX, FP8 and other hardware features.
- Active development with frequent updates for new models and kernels.
