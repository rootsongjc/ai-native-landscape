---
name: LTX-2
slug: ltx-2
homepage: https://ltx.io
repo: https://github.com/Lightricks/LTX-2
license: Unknown
category: models-modalities
subCategory: image-video-generation
tags:
  - Video Generation
  - Audio Video
  - Diffusion
  - LoRA
description: >-
  Official Python inference and LoRA trainer package for LTX-2, the first DiT-based audio-video foundation
  model that generates synchronized audio and video in one model, from Lightricks.
author: Lightricks
ossDate: '2026-01-03'
featured: false
status: tracked
---

## Overview

LTX-2 is the first DiT-based audio-video foundation model from Lightricks that puts all core capabilities of modern video generation in one model: synchronized audio and video, high fidelity, multiple performance modes, and open access. This repository is the official Python inference and LoRA trainer package; it runs the LTX-2.5 weights published on Hugging Face with pipelines ranging from a fast distilled path to the production-quality DFR (Diffusion Fidelity Rendering) path.

## Key Features

- Synchronized audio and video generation from a single DiT-based model, with distinct fast and production-quality modes
- Multiple pipelines: DistilledPipeline for a few-step quick start, DFR for production quality, plus TI2Vid, Keyframe, A2Vid, IC-LoRA, and DubIt paths
- One-file-per-component weight distribution on Hugging Face — download only the transformer, text encoder, VAEs, upscalers, and LoRAs your pipeline needs
- Resolution defaults of 1024×1536 at 24 fps with UHD 4K output and temporal upscaling rounds
- LoRA training support alongside inference

## Use Cases

- Generating dialogue or talking-head video with synchronized audio from a text prompt
- Production text/image-to-video work via DFR with a detailing IC-LoRA and spatial upscaler
- Keyframe-conditioned video and dubbing workflows through dedicated pipelines

## Technical Details

- The 22B diffusion transformer ships in dev and distilled variants; the distilled transformer runs in far fewer steps and also powers the DFR, IC-LoRA, and DubIt pipelines
- Text encoding uses a Gemma 4 12B checkpoint fine-tuned for LTX with the projection bundled in; loading version-checks the encoder (`gemma4-12b-ltx-v1`) against the one the checkpoint was trained with
- Video decoding offers a diffusion VAE (`NADiffusionDecoder`) using neighborhood attention — fastest with the Linux/CUDA `natten` extra, falling back to Triton or eager implementations elsewhere — or a lighter convolutional decoder
- DFR reuses the distilled transformer and adds a detailing IC-LoRA with extra generated keyframes and a spatial detailing pass; memory-constrained runs can pass `--quantization fp8-cast` and `--offload cpu|disk`; dependencies managed with `uv sync --extra natten` and weights fetched via the Hugging Face CLI
