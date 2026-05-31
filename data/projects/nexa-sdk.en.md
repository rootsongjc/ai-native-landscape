---
name: Nexa SDK
slug: nexa-sdk
homepage: https://docs.nexa.ai/
repo: https://github.com/nexaai/nexa-sdk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Inference
  - ML Platform
description: >-
  An on-device inference SDK that runs multimodal and text models across CPU, GPU and NPUs, with support for multiple
  model formats.
logo: ''
author: NexaAI
ossDate: '2024-08-16T20:13:07.000Z'
featured: false
status: tracked
---

## Introduction

Nexa SDK is an on-device inference framework that runs text, image and audio models across CPU, GPU and various NPUs (Qualcomm, Intel, Apple ANE). It supports GGUF, MLX and .nexa model formats, offers an OpenAI-compatible API server, a CLI and bindings for Python, Android and iOS for easy local and edge deployments.

## Key features

- Multi-backend support (CUDA/Metal/Vulkan/NPU) and multiple model formats (GGUF/MLX/.nexa).
- OpenAI-compatible interface and streaming responses for easy integration.
- CLI tools and rich bindings for local inference, model caching and hardware acceleration.

## Use cases

- Local multimodal interaction and offline inference on laptops and edge devices.
- Low-latency LLM/VLM serving in network-constrained environments.
- Rapid prototyping and validation of models using the CLI and SDK.

## Technical highlights

- NPU optimizations and the NexaML Turbo engine for improved performance on NPUs.
- Compatibility with Hugging Face model ecosystem and support for format conversion and acceleration plugins.
- Unified interface abstraction to simplify cross-platform deployment.
