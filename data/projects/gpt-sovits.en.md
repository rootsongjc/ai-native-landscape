---
name: GPT-SoVITS
slug: gpt-sovits
homepage: https://rentry.co/GPT-SoVITS-guide#/
repo: https://github.com/rvc-boss/gpt-sovits
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - TTS
description: >-
  GPT-SoVITS is an open-source few-shot voice conversion and TTS WebUI with cross-lingual inference and
  production-friendly tooling.
logo: ''
author: RVC-Boss
ossDate: '2024-01-14T18:05:21Z'
featured: false
status: tracked
---

## Detailed Introduction

GPT-SoVITS is an open-source WebUI project focused on few-shot voice conversion and text-to-speech (TTS). It supports zero-shot (5s) and few-shot (1min) modes, and includes tools for dataset slicing, Chinese ASR, text labeling, and more to help users prepare data, fine-tune models, and deploy locally or in containers. See the linked documentation and demos for examples and guides.

## Main Features

- Zero-shot / few-shot operation: perform instant conversion from short reference audio or fine-tune with small datasets for higher timbre similarity.  
- Cross-lingual inference: supports English, Japanese, Korean, Cantonese and Chinese.  
- WebUI toolset: integrated utilities such as vocal separation, automatic dataset segmentation, ASR and labeling to streamline data preparation.  
- Flexible deployment: local runs, Docker images and Hugging Face demos are supported for quick validation and production use.

## Use Cases

- Voice cloning prototyping and demos: generate target-voice samples quickly for presentation or testing.  
- Research and model development: evaluate fine-tuning strategies, front-end text processing, and model variants.  
- Media tooling integration: incorporate conversion and TTS into content production pipelines.

## Technical Features

- PyTorch-based implementation with Conda and Docker installation scripts supporting multiple CUDA and CPU environments.  
- Distributed pretrained models and public demos (Hugging Face) provided for rapid verification.  
- MIT-licensed, actively maintained repository with extensive README and Wiki documentation for installation, training and deployment.
