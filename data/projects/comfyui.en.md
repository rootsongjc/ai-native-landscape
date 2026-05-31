---
name: ComfyUI
slug: comfyui
homepage: null
repo: https://github.com/comfyanonymous/comfyui
license: Unknown
category: models-modalities
subCategory: image-video-generation
tags:
  - Dev Tools
  - Image Generation
description: >-
  A node-based visual workflow builder for Stable Diffusion, enabling graphical assembly and debugging of
  image-generation pipelines.
logo: ''
author: comfyanonymous
ossDate: '2023-01-17T03:15:56.000Z'
featured: false
status: tracked
---

## Overview

ComfyUI is a node-based visual builder for Stable Diffusion workflows. Users create pipelines by connecting nodes that represent preprocessing, model inference, and post-processing steps, enabling rapid prototyping and debugging.

## Key Features

- Node-based pipelines: visually compose and debug complex flows.
- Extensible ecosystem: community nodes and plugins for rapid extension.
- Local-first: supports offline runs for privacy and custom deployments.

## Use Cases

- Prototyping generation pipelines and post-processing chains.
- Debugging sequence and preprocessing/postprocessing logic.
- Educational demos where visual flow aids comprehension.

## Technical Highlights

- Directed node-graph execution with parallel and async optimizations.
- Compatible with popular toolchains (Diffusers, ONNX, PyTorch) for integrating existing weights and runtimes.
