---
name: Triton Inference Server
slug: triton-inference-server
homepage: https://developer.nvidia.com/nvidia-triton-inference-server
repo: https://github.com/triton-inference-server/server
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Inference Service
description: >-
  Triton Inference Server: NVIDIA's high-performance inference server supporting multiple model formats and deployment
  options.
author: NVIDIA
ossDate: '2018-10-04T21:10:30.000Z'
featured: false
status: tracked
---

## Overview

Triton Inference Server (formerly TensorRT Inference Server) is NVIDIA's production-ready inference server. It supports TensorRT, ONNX, PyTorch and other backends, optimized for GPU acceleration and scalable deployments.

## Key features

- Multiple backend support (TensorRT, ONNX Runtime, PyTorch, OpenVINO, Python, etc.).
- Dynamic batching, sequence batching, model ensembles and model management APIs.
- Tools for performance analysis (perf_analyzer, model_analyzer) and examples for deployment.

## Use cases

- Large-scale model serving in data centers and cloud environments.
- Edge and embedded deployments on NVIDIA Jetson devices.
- Performance-sensitive applications requiring batching, pipelining and GPU acceleration.

## Technical details

- Exposes HTTP/REST and gRPC inference protocols; provides C, C++, Java and Python client libraries.
- Supports model repositories, model configuration, and custom backends (C++/Python).
- Recommended deployment via Docker images; integrations for Kubernetes/Helm are provided.
