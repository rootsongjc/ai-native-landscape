---
name: WebLLM
slug: web-llm
homepage: https://webllm.mlc.ai/
repo: https://github.com/mlc-ai/web-llm
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - LLM
description: >-
  High-performance in-browser LLM inference engine that leverages WebGPU for hardware-accelerated, privacy-preserving
  inference in the browser.
author: mlc-ai
ossDate: '2023-04-13T18:11:59.000Z'
featured: false
status: tracked
---

## Overview

WebLLM is a high-performance in-browser language model inference engine that uses WebGPU to run LLM inference directly in web browsers without server-side processing, enabling privacy-preserving deployments and low-latency experiences.

## Key Features

- In-browser inference with WebGPU acceleration.
- OpenAI API compatibility with streaming, JSON-mode, and experimental function calling support.
- Support for multiple prebuilt models and easy custom model integration.

## Use Cases

- Privacy-focused chat assistants and browser-based AI tools.
- Reducing backend costs and latency by moving inference to the client.
- Education, demos, and rapid prototyping using CDN or npm integration.

## Technical Highlights

- WebAssembly + WebGPU for efficient inference and streaming generation.
- WebWorker/ServiceWorker support for offloading computation and keeping UI responsive.
- Modular NPM/ CDN usage with extensive examples for quick integration.
