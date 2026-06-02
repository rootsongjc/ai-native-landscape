---
name: huggingface diffusers
slug: huggingface-diffusers
homepage: https://huggingface.co/docs/diffusers
repo: https://github.com/huggingface/diffusers
license: Unknown
category: models-modalities
subCategory: image-video-generation
tags:
  - Image Generation
  - Inference
description: >-
  Diffusers: a modular toolbox for state-of-the-art pretrained diffusion models for image, audio and 3D generation,
  suitable for inference and training.
logo: ''
author: Hugging Face
ossDate: '2022-05-30T16:04:02.000Z'
featured: false
status: tracked
---

## Overview

Diffusers is Hugging Face's flagship library providing state-of-the-art diffusion models for image, video, and audio generation in PyTorch. It offers a modular toolbox of pretrained models and pipelines designed for both inference and training, with a focus on usability and customizability. The library makes it straightforward to experiment with, deploy, and customize the latest generative AI models.

## Key Features

Diffusers provides ready-to-use pipelines for text-to-image, image-to-image, inpainting, and video generation tasks. It features interchangeable schedulers and modular model components that allow users to fine-tune the balance between sampling quality and speed. The library integrates deeply with the Hugging Face Hub, offering access to a large collection of pretrained checkpoints and compatibility with popular hardware backends.

## Use Cases

Diffusers is ideal for rapid prototyping of generative models in research and creative applications, building production inference pipelines for image and media generation at scale, and training or fine-tuning diffusion models with custom schedulers and components for specialized use cases.

## Technical Details

Built as a Python-first library with strong PyTorch integration, Diffusers employs a modular design where pipelines, schedulers, models, and utilities are composable and extendable. It leverages the Hugging Face Hub ecosystem for model discovery and distribution, supports optional hardware-specific optimizations, and is maintained by an active community with extensive documentation and frequent releases.
