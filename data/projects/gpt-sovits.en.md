---
name: GPT-SoVITS
slug: gpt-sovits
homepage: https://rentry.co/GPT-SoVITS-guide#/
repo: https://github.com/rvc-boss/gpt-sovits
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - TTS
description: >-
  GPT-SoVITS is an open-source few-shot voice conversion and TTS WebUI with cross-lingual inference and
  production-friendly tooling.
author: RVC-Boss
ossDate: '2024-01-14T18:05:21Z'
featured: false
status: tracked
---

GPT-SoVITS is an open-source few-shot voice cloning and text-to-speech (TTS) project that can train a high-quality TTS model with as little as one minute of voice data. It supports zero-shot inference with just 5 seconds of reference audio and few-shot fine-tuning with one minute of data, making voice cloning accessible to a wide range of users.

## Voice Cloning Capabilities

- Zero-shot inference using only 5 seconds of reference audio
- Few-shot fine-tuning with one minute of target voice data
- Cross-lingual inference supporting English, Japanese, Korean, Cantonese, and Chinese
- High-quality voice synthesis suitable for production use

## WebUI and Data Pipeline

- Comprehensive WebUI integrating all training and inference workflows
- Built-in vocal separation for isolating speech from mixed audio
- Automatic dataset segmentation for preparing training data
- ASR and text labeling utilities to streamline the data preparation pipeline

## Deployment Options

- Local execution for full control over the training and inference process
- Docker containers for reproducible and portable deployment
- Hugging Face demos for quick verification without local setup
- Conda and Docker installation scripts supporting multiple CUDA and CPU environments

## Research and Production

- Built on PyTorch with pretrained models distributed via Hugging Face
- Ideal for rapid voice cloning prototyping and demos
- Supports researchers evaluating fine-tuning strategies and model variants
- MIT-licensed with actively maintained documentation covering the full workflow
