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
logo: ''
author: Google
ossDate: '2024-09-04T03:33:35Z'
featured: false
status: tracked
---

## Overview

LiteRT is Google's on-device ML inference framework, succeeding TensorFlow Lite, designed for high-performance deployment of machine learning and generative AI models on edge platforms. LiteRT V1 maintains backward compatibility with the classic TFLite API, while V2 introduces asynchronous execution, automated accelerator selection, and efficient I/O buffer handling.

## Key Features

The framework supports Android, iOS, Linux, macOS, and Windows with planned extensions for Web and IoT platforms. It provides unified GPU and NPU acceleration paths with automated accelerator selection in V2 to maximize hardware utilization. True asynchronous execution and zero-copy buffer interoperability reduce latency and improve throughput for demanding on-device workloads.

## Use Cases

Developers use LiteRT to run real-time segmentation, detection, and speech models in mobile applications with low latency. It enables deployment of optimized ML models on embedded and edge devices where compute and power are limited. The framework also supports on-device inference for quantized or compact generative models, providing a runtime foundation for GPU and NPU acceleration.

## Technical Details

LiteRT features a modular runtime architecture supporting multiple backends and custom delegates. It provides Docker and Bazel/CMake build guides for cross-compilation and artifact generation. The project is Apache-2.0 licensed and includes sample applications and migration guides to ease the transition from existing TFLite workflows.
