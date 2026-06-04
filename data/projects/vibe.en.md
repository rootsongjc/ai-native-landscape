---
name: Vibe
slug: vibe
homepage: https://thewh1teagle.github.io/vibe/
repo: https://github.com/thewh1teagle/vibe
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Utility
description: >-
  A privacy-first, cross-platform audio/video transcription tool that supports fully offline operation and batch
  processing.
author: thewh1teagle
ossDate: '2024-01-08T03:29:06.000Z'
featured: false
status: tracked
---

## Introduction

Vibe is a privacy-focused, cross-platform audio/video transcription tool that can run fully offline on Windows, macOS, and Linux. It leverages Whisper and other models to provide multilingual transcription via both GUI and CLI interfaces.

## Key Features

- Fully offline transcription to keep audio and video data on-device.
- Batch processing, multiple export formats (SRT/VTT/TXT/HTML/PDF), and realtime preview.
- GUI, CLI, and HTTP API options with configurable model arguments and local model integration.

## Use Cases

- Privacy-sensitive transcription such as meeting minutes, legal recordings, or medical audio.
- Large-scale subtitle generation and downstream post-processing workflows.
- Prototyping embedded or local transcription services that require offline operation.

## Technical Highlights

- Uses Whisper as a recognition backend with GPU acceleration and cross-platform optimizations (Vulkan / CoreML).
- Desktop application built with TypeScript, Rust, and Svelte, plus an optional server mode with Swagger docs.
- Licensed under MIT and actively maintained; includes documentation and configurable model download mechanics.
