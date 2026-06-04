---
name: huggingface diffusers
slug: huggingface-diffusers
homepage: https://huggingface.co/docs/diffusers
repo: https://github.com/huggingface/diffusers
license: Apache-2.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Image Generation
  - Inference
description: >-
  Diffusers: a modular toolbox for state-of-the-art pretrained diffusion models for image, audio and 3D generation,
  suitable for inference and training.
author: Hugging Face
ossDate: '2022-05-30T16:04:02.000Z'
featured: false
status: tracked
---

Diffusers is Hugging Face's flagship library providing state-of-the-art diffusion models for image, video, and audio generation in PyTorch. It offers a modular toolbox of pretrained models and pipelines designed for both inference and training, with a focus on usability and customizability.

## Key Features

- Ready-to-use pipelines for text-to-image, image-to-image, inpainting, and video generation tasks
- Interchangeable schedulers and modular model components for fine-tuning the balance between sampling quality and speed
- Deep integration with the Hugging Face Hub for access to a large collection of pretrained checkpoints
- Compatibility with popular hardware backends and optional hardware-specific optimizations
- Composable architecture where pipelines, schedulers, models, and utilities are independently extendable

## Use Cases

- Rapid prototyping of generative models in research and creative applications
- Building production inference pipelines for image and media generation at scale
- Training or fine-tuning diffusion models with custom schedulers and components for specialized use cases
- Experimenting with the latest generative AI techniques through a unified, easy-to-use API

## Technical Highlights

- Python-first library with strong PyTorch integration
- Leverages the Hugging Face Hub ecosystem for model discovery and distribution
- Maintained by an active community with extensive documentation and frequent releases
