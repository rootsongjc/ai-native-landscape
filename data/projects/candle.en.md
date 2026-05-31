---
name: Candle
slug: candle
homepage: https://huggingface.github.io/candle/guide/installation.html
repo: https://github.com/huggingface/candle
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Framework
  - ML Platform
description: >-
  Candle by Hugging Face: a minimalist, high-performance ML framework in Rust designed for serverless inference and
  lightweight deployments.
logo: ''
author: Hugging Face
ossDate: '2023-06-19T16:06:31.000Z'
featured: false
status: tracked
---

## Introduction

Candle is a Rust-first, high-performance machine learning framework from Hugging Face. It targets serverless inference and lightweight deployments, with backends for CPU, CUDA, and WASM.

## Key features

- Minimalist, Rust-based core optimized for performance and small binaries.
- Multi-backend support (optimized CPU, CUDA, WASM) and model format compatibility (safetensors, npz, ggml, PyTorch).
- Extensive examples and browser demos covering LLaMA, Whisper, Stable Diffusion and more.

## Use cases

- Deploying models where Python runtime is undesirable or too heavy.
- Serverless or edge deployments that require fast startup and small footprints.
- Integrations that need Rust-native high-performance inference kernels.

## Technical details

- Repository is largely Rust (~80%) with CUDA and Metal kernels; it provides modular crates like candle-core, candle-nn, and candle-examples.
- Supports quantized inference and various model backends for fast, production-ready deployments.
