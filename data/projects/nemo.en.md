---
name: NeMo
slug: nemo
homepage: https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/main/
repo: https://github.com/nvidia/nemo
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Framework
description: NVIDIA's NeMo framework for speech, TTS, multimodal and LLM training & fine-tuning.
author: NVIDIA
ossDate: '2019-08-05T20:16:42.000Z'
featured: false
status: tracked
---

NeMo is NVIDIA's open-source multi-domain AI framework focused on speech recognition (ASR), text-to-speech (TTS), multimodal, and large language model training and deployment. It provides end-to-end tooling from data preprocessing through model training to inference, helping researchers and engineers rapidly build production-grade AI applications.

## Model Collections

- Speech recognition models including Conformer and Citrinet for multilingual ASR tasks
- TTS models such as FastPitch and HiFi-GAN for natural-sounding speech synthesis
- NLP support for training, fine-tuning, and quantizing GPT, T5, BERT, and other LLM architectures
- Multimodal capabilities for vision-language tasks combining image understanding with text generation

## Training & Infrastructure

- Built on PyTorch Lightning for consistent API design and configuration management
- Multi-GPU and multi-node distributed training out of the box
- Mixed precision training, gradient accumulation, and checkpoint management for efficiency
- Container-friendly deployment with Docker images and Kubernetes configurations

## Ecosystem Integration

- Deep integration with NVIDIA TAO Toolkit and Triton Inference Server for complete AI workflows
- Pre-trained models and comprehensive tutorials for rapid onboarding
- Efficient data loaders and training management tools for large-scale experiments
- Supports billion-parameter model training and fine-tuning for enterprise LLM customization
