---
name: xLLM
slug: xllm
homepage: https://xllm.readthedocs.io/zh-cn/latest/
repo: https://github.com/jd-opensource/xllm
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Agents
  - Application
  - Model
  - Multimodal
  - Training
description: >-
  xLLM is an open-source framework for vision-language models, providing tools and documentation for training and
  inference.
logo: ''
author: jd-opensource
ossDate: '2025-08-12T13:16:07.000Z'
featured: false
status: tracked
---

## Overview

xLLM is an open-source framework developed by JD Open Source for building, training, and deploying vision-language models and other large-scale AI models. It provides a unified toolchain covering training, fine-tuning, and inference with comprehensive documentation and example code to help research and engineering teams bring multimodal systems from experimentation to production.

## Key Features

Joint training and inference pipelines support LLM, VLM, DiT, and REC model architectures, with optimizations tailored for diverse AI accelerators including GPUs and domestic chips. The framework includes multimodal data processing utilities and evaluation tooling out of the box. Detailed ReadTheDocs documentation and runnable examples lower the learning curve for engineering adoption.

## Use Cases

Research and product teams building visual question answering, image captioning, and multimodal retrieval systems can use xLLM as their foundational training and inference platform. Organizations needing to deploy models across heterogeneous hardware accelerators benefit from the framework's cross-device optimization layer. The toolchain also supports large-scale fine-tuning workflows for adapting foundation models to domain-specific tasks.

## Technical Details

xLLM emphasizes multimodal feature fusion and cross-modal alignment through extensible model components and composable training strategies. It supports distributed training with efficient parallelism and memory management to handle large-scale parameter counts. The inference engine is optimized for throughput across multiple accelerator types, enabling cost-effective deployment on mixed hardware clusters.
