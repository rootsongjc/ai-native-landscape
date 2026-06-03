---
name: DeepSpeed
slug: deepspeed
homepage: https://www.deepspeed.ai/
repo: https://github.com/deepspeedai/deepspeed
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - ML Platform
description: >-
  A high-performance library for training and inference that dramatically speeds up large-scale deep learning while
  reducing cost.
author: DeepSpeed 团队
ossDate: '2020-01-23T18:35:18.000Z'
featured: false
status: tracked
---
## Overview

DeepSpeed is an open-source optimization library from Microsoft that focuses on distributed training, memory and inference efficiency (e.g., ZeRO, DeepSpeed-Inference, compression techniques). It enables researchers and engineers to train models from billions to trillions of parameters at much lower cost.

## Key features

- ZeRO family memory optimizations and parallelism strategies for massive model training.  
- High-performance inference and compression tools (ZeroQuant, XTC) to reduce latency and model size.  
- Wide hardware and framework integrations (PyTorch, Azure, NVIDIA/AMD/Huawei support).

## Use cases

- Training very large models on limited GPU resources to reduce infrastructure costs.  
- Large-scale distributed training and inference, such as LLM training, inference services, and research reproduction.  
- Deployments that require model compression and latency reduction for low-latency inference.

## Technical highlights

- Combines system-level and algorithmic optimizations (parallel strategies, communication compression, heterogeneous memory management).  
- Modular design to compose training, inference, and compression features for diverse workflows.  
- Active community with extensive papers and tutorials, suitable for both research and production adoption.
