---
name: whisper.cpp
slug: whisper-cpp
homepage: null
repo: https://github.com/ggml-org/whisper.cpp
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - TTS
description: >-
  whisper.cpp is a high-performance local Whisper implementation for speech recognition across edge devices and desktop
  platforms.
author: ggml-org
ossDate: '2022-09-25T18:26:37.000Z'
featured: false
status: tracked
---

## Introduction

whisper.cpp is a lightweight C/C++ reimplementation of OpenAI's Whisper focused on efficient on-device inference. It runs across a wide range of platforms (from Raspberry Pi to Apple Silicon) and supports multiple acceleration backends.

## Key Features

- Pure C/C++ implementation with minimal runtime dependencies for easy integration.
- Multiple acceleration backends (Vulkan, CUDA, Core ML, OpenVINO, Moore Threads) and quantized model support to reduce memory usage.
- Rich examples (CLI, stream, wasm, bench, server) and language bindings (Rust, JS, Java, etc.).

## Use Cases

- Local speech-to-text and offline voice assistants for privacy-sensitive applications.
- ASR on resource-constrained devices or large-scale offline batch transcription.
- Research and engineering experiments: benchmarking, quantization studies, and backend comparisons.

## Technical Highlights

- Uses ggml-format model weights with integer quantization (Q5/Q4 variants) and mixed precision to trade off quality vs. memory/performance.
- Provides a C-style API and many bindings, Docker/CMake build flows, and prebuilt artifacts (XCFramework) for easy adoption.
- MIT license, actively maintained community with extensive platform support and CI.
