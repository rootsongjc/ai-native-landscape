---
name: ggml
slug: ggml
homepage: https://huggingface.co/blog/introduction-to-ggml
repo: https://github.com/ggml-org/ggml
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
description: ggml is a lightweight tensor library for machine learning optimized for efficient model inference across hardware.
logo: ''
author: ggml-org
ossDate: '2022-09-18T17:07:19Z'
featured: false
status: tracked
---

## Overview

ggml is a lightweight C/C++ tensor library for machine learning that enables large model inference on commodity hardware. It focuses on low memory usage and high performance across diverse hardware platforms, supporting integer quantization, automatic differentiation, and multiple acceleration backends for building efficient local inference toolchains.

## Key Features

ggml is optimized for edge and local deployments with minimal runtime dependencies for easy portability. It provides acceleration backends for CUDA, HIP, and SYCL hardware, supports integer quantization to reduce model size and inference cost, and includes automatic differentiation with common optimizers for lightweight training experiments.

## Use Cases

ggml is used for running small or quantized models on desktop, mobile, or embedded devices for local inference. It serves as a custom inference backend or model conversion pipeline component in larger toolchains, and provides a platform for experimenting with quantization strategies and low-memory inference techniques in research settings.

## Technical Details

The library is implemented in C/C++ with minimal external dependencies, shipping with example programs such as GPT inference for quick onboarding. It supports automatic differentiation and common optimizers for local training experiments, and is licensed under MIT for both community-driven ecosystem development and commercial use.
