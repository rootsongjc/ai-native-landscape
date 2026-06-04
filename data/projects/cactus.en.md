---
name: Cactus
slug: cactus
homepage: https://cactuscompute.com/docs
repo: https://github.com/cactus-compute/cactus
license: Other
category: inference-serving
subCategory: edge-local-inference
tags:
  - Dev Tools
  - LLM
  - Product
description: >-
  An energy-efficient inference engine and numerical computing framework for phones, optimized for ARM CPUs to run large
  models with low power and memory footprint.
author: cactus-compute
ossDate: '2025-04-23T14:33:43.000Z'
featured: false
status: tracked
---
Cactus is a low-latency AI inference engine and numerical computing framework designed for mobile devices and wearables. Developed by cactus-compute, it is optimized for ARM CPUs to run large language models with minimal power consumption and memory footprint, enabling on-device AI without relying on cloud connectivity.

## CPU-First Optimization

- Tuned for ARM processors to reduce battery drain and heat generation during inference
- Unified Cactus Graph and Cactus Kernels providing zero-copy computation graphs
- SIMD-optimized kernels for high throughput on mobile hardware
- Demonstrates higher CPU-only throughput and smaller model footprints compared to Llama.cpp on certain workloads

## Cross-Platform SDKs

- Flutter, React Native, and Kotlin SDKs for straightforward integration into any mobile application
- On-device inference for chatbots, assistants, and quick generation tasks without network latency
- Efficient deep learning inference embedded into mobile apps for real-time, privacy-preserving AI experiences
- Hugging Face model conversion and benchmarking utilities to validate performance before shipping

## API and Tooling

- OpenAI-compatible C API with FFI bindings for integration across multiple programming languages
- Python utilities for model conversion, testing scripts, and comprehensive build instructions
- Rapid onboarding with complete documentation for mobile deployment workflows
