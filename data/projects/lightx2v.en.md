---
name: LightX2V
slug: lightx2v
homepage: https://lightx2v-en.readthedocs.io/en/latest/
repo: https://github.com/modeltc/lightx2v
license: Apache-2.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Video Generation
  - Image Generation
  - Inference
  - Diffusion
  - Quantization
description: >-
  LightX2V is a lightweight inference framework for image and video generation models that speeds up diffusion
  inference with step distillation, quantization, and parallelism, and deploys across a wide range of hardware.
author: ModelTC
ossDate: '2025-03-24T10:27:56Z'
status: tracked
---

LightX2V is a lightweight inference framework for image and video generation, developed by ModelTC. It puts many generation models behind one inference stack and focuses on making them faster and cheaper to run, so that text-to-video, image-to-video, text-to-image, and image editing workloads fit on the hardware a team actually has.

## Key Features

- **One framework for many models**, including the Wan, HunyuanVideo, Qwen-Image, and LTX families, across text-to-video, image-to-video, text-to-image, and image editing
- **Step distillation**: 4-step and 8-step distilled models and LoRAs that run without classifier-free guidance
- **Quantization**, including FP8, NVFP4, and GGUF formats
- **Memory and throughput optimizations** such as block-level offloading, CFG parallelism, and disaggregated deployment
- **Service API** for running models as a server, with a Docker image for setup

## Use Cases

- Serving image and video generation with fewer inference steps and lower latency
- Running large video models on GPUs with limited memory
- Deploying generation models on non-NVIDIA accelerators and AI PCs

## Technical Highlights

- Supports autoregressive video generation as well as bidirectional diffusion inference
- Deploys beyond NVIDIA GPUs, including AMD ROCm, Ascend, Cambricon, Hygon, and Intel AI PC platforms
- Distilled and quantized weights are published on Hugging Face alongside the framework
