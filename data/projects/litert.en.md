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

## Detailed Introduction

LiteRT is Google's lightweight inference runtime evolved from TensorFlow Lite, designed for deploying machine learning and generative models on resource-constrained edge devices. LiteRT V1 maintains compatibility with the classic TFLite API for existing apps, while LiteRT V2 introduces asynchronous execution, automated accelerator selection, and efficient I/O buffer handling to simplify integrating GPU and NPU acceleration across mobile, embedded, and desktop platforms.

## Main Features

- Cross-platform support: Android, iOS, Linux, macOS, Windows, with extensions planned for Web and IoT.
- Hardware acceleration: unified paths for GPU and NPU acceleration and automated accelerator selection in V2.
- Async and efficient I/O: true asynchronous execution and zero-copy buffer interoperability to reduce latency and improve throughput.
- Ecosystem compatibility: migration paths from TFLite and integrations with LiteRT-LM and ai-edge-torch tools.

## Use Cases

- Mobile real-time inference: run segmentation, detection, or speech models in Android/iOS apps with low latency.
- Embedded and edge devices: deploy optimized models where compute and power are limited.
- Generative model acceleration: support low-latency on-device inference for quantized or compact generative models.
- Performance tuning and hardware adaptation: serve as the runtime foundation when GPU/NPU acceleration is required.

## Technical Features

- Runtime architecture: modular design supporting multiple backends and custom delegates.
- Build & deployment: Docker and Bazel/CMake build guides for cross-compilation and artifact generation.
- Open-source license: Apache-2.0 licensed for enterprise and community adoption.
- Developer experience: sample applications and migration guides to ease transition from existing TFLite workflows.
