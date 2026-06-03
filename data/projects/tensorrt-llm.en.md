---
name: TensorRT-LLM
slug: tensorrt-llm
homepage: https://nvidia.github.io/TensorRT-LLM/
repo: https://github.com/nvidia/tensorrt-llm
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
  - LLM
  - Utility
description: >-
  NVIDIA's open-source toolbox for optimized LLM inference, designed for efficient GPU serving and enterprise
  deployment.
author: NVIDIA
ossDate: '2023-08-16T17:14:27.000Z'
featured: false
status: tracked
---

## Introduction

TensorRT-LLM is NVIDIA's open-source toolbox for optimizing large language model inference, designed for high-performance GPU serving and enterprise deployment. It supports mainstream models and advanced quantization techniques.

## Key Features

- Custom attention kernels, batch inference, distributed parallelism, and multiple quantization methods (FP8/FP4/INT4/INT8)
- High-level Python API for single-GPU, multi-GPU, and multi-node deployment
- Seamless integration with Triton Inference Server, PyTorch, and other ecosystems
- Modular architecture, easy to extend and customize

## Use Cases

- Enterprise-scale LLM inference and deployment
- Efficient GPU inference in cloud and on-premises
- Rapid prototyping for LLM applications
- Quantized model performance optimization

## Technical Highlights

- C++/Python/CUDA multi-language collaboration, extreme performance optimization
- Built-in KV cache, inference scheduling, structured output, and other advanced features
- Supports mainstream LLMs and quantized models, easy integration of new models
