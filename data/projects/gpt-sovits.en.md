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

## Overview

GPT-SoVITS is an open-source few-shot voice cloning and text-to-speech (TTS) project that can train a high-quality TTS model with as little as one minute of voice data. It supports zero-shot inference with just 5 seconds of reference audio and few-shot fine-tuning with one minute of data, making voice cloning accessible to a wide range of users. The project includes a comprehensive WebUI with integrated tools for dataset preparation, model training, and deployment.

## Key Features

GPT-SoVITS offers zero-shot and few-shot voice cloning capabilities with cross-lingual inference support for English, Japanese, Korean, Cantonese, and Chinese. Its WebUI integrates vocal separation, automatic dataset segmentation, ASR, and text labeling utilities to streamline the data preparation pipeline, while supporting flexible deployment through local execution, Docker containers, and Hugging Face demos.

## Use Cases

GPT-SoVITS is ideal for rapid voice cloning prototyping and demos where target-voice samples need to be generated quickly for presentations or testing. It also serves researchers evaluating fine-tuning strategies and model variants, as well as content producers looking to integrate high-quality voice synthesis into media production pipelines.

## Technical Details

Built on PyTorch with Conda and Docker installation scripts supporting multiple CUDA and CPU environments, GPT-SoVITS distributes pretrained models and public demos via Hugging Face for rapid verification. The project is MIT-licensed with an actively maintained repository featuring extensive documentation covering installation, training, and deployment workflows.
