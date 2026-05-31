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

## Detailed Introduction

Chitu is a production-oriented inference engine focused on delivering high-performance, low-latency inference for large language models (LLMs). It supports deployments ranging from CPU-only and single-GPU setups to large-scale cluster environments, and provides compatibility with multiple hardware vendors to accommodate enterprise rollout.

## Main Features

- Multi-hardware support: optimized implementations for NVIDIA and various domestic accelerators.
- Scalable deployment: supports single-node, heterogeneous CPU/GPU setups and distributed clusters.
- Production stability: engineering efforts for long-term stable operation under concurrent loads.
- Tooling and docs: official images, developer guides and performance benchmarks for fast validation and adoption.

## Use Cases

Suitable for on-premise or edge LLM inference needs such as enterprise Q&A, realtime online inference services, batched model serving, and scenarios requiring domestic accelerator support or mixed-hardware optimization.

## Technical Features

Chitu combines high-performance operator implementations, quantization and mixed-precision support (e.g., FP4/FP8/BF16), streaming and batch optimizations, and provides local images and benchmark documentation to facilitate engineering adoption. The project emphasizes extensibility and compatibility with mainstream LLMs via adapters and plugins.
