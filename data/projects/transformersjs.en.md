---
name: Transformers.js
slug: transformersjs
homepage: https://huggingface.co/docs/transformers.js
repo: https://github.com/xenova/transformers.js
license: Unknown
category: inference-serving
subCategory: edge-local-inference
tags:
  - Dev Tools
description: >-
  Transformers.js: a JavaScript implementation of Hugging Face Transformers for the browser and Node, with WASM/ONNX
  backends for optimized on-device inference.
logo: ''
author: Xenova
ossDate: '2023-02-13T13:51:45.000Z'
featured: false
status: tracked
---

## Overview

Transformers.js enables running Hugging Face Transformer models directly in browsers and Node.js without a server, suitable for edge and client-side inference with good portability.

## Key features

- Run common NLP, vision and audio tasks client-side.
- Pipeline API compatible with Python Transformers and support for quantization and precompiled WASM/ONNX backends.
- Rich examples and demos for quick integration into web apps and demos.

## Use cases

- Privacy-preserving client-side inference without sending data to servers.
- Building interactive demos, browser extensions, or offline inference features.
- Reducing bandwidth and compute in constrained environments via quantized models.

## Technical details

- Multiple backends (WebGPU, WASM, ONNX) selectable by environment.
- Uses Hugging Face Hub models and precompiled binaries with options for local model paths.
- Frontend-optimized API designed to mirror the Python Transformers developer experience.
