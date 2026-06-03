---
name: LiteRT
slug: litert
homepage: https://ai.google.dev/edge/litert/next/overview
repo: https://github.com/google-ai-edge/litert
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Edge
  - Inference
  - Runtime
description: A high-performance, scalable lightweight deep learning inference runtime for edge devices.
author: Google
ossDate: '2024-09-04T03:33:35Z'
featured: false
status: tracked
---

LiteRT is Google's on-device ML inference framework, succeeding TensorFlow Lite, designed for high-performance deployment of machine learning and generative AI models on edge platforms. LiteRT V1 maintains backward compatibility with the classic TFLite API, while V2 introduces asynchronous execution, automated accelerator selection, and efficient I/O buffer handling.

## Key Features

- **Cross-platform support** for Android, iOS, Linux, macOS, and Windows with planned extensions for Web and IoT platforms
- **Unified GPU and NPU acceleration paths** with automated accelerator selection in V2 to maximize hardware utilization
- **True asynchronous execution** and zero-copy buffer interoperability that reduce latency and improve throughput
- **Modular runtime architecture** supporting multiple backends and custom delegates for extensibility
- **Backward compatibility** with TensorFlow Lite through the V1 API, enabling smooth migration of existing workloads

## Use Cases

- Running real-time segmentation, detection, and speech models in mobile applications with low latency
- Deploying optimized ML models on embedded and edge devices where compute and power are limited
- On-device inference for quantized or compact generative models with GPU and NPU acceleration
- Building privacy-preserving applications that process data locally without sending it to the cloud

## Technical Highlights

- Docker and Bazel/CMake build guides for cross-compilation and artifact generation
- Apache-2.0 licensed with sample applications and migration guides for transitioning from TFLite workflows
- Hardware-accelerated indexing leverages both CPU and GPU resources for optimal performance
