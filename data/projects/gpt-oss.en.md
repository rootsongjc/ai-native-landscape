---
name: gpt-oss
slug: gpt-oss
homepage: https://openai.com/open-models
repo: https://github.com/openai/gpt-oss
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Inference
  - LLM
description: >-
  gpt-oss is an open-weight model series released by OpenAI, designed for high-reasoning and customizable developer use
  cases.
logo: ''
author: OpenAI
ossDate: '2025-06-23T16:43:33.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

gpt-oss is OpenAI's open-weight model series (including gpt-oss-120b and gpt-oss-20b) that provides publicly available weights for research and engineering reproduction. The project is released under the Apache-2.0 license and targets high-reasoning, customizable deployments with support for multiple inference backends and tool integrations. This page summarizes its purpose, main features, and common application scenarios.

## Key features

- Open-weight release (Apache-2.0) enabling research and commercial deployment.
- Two scale options: designed for both high-performance single-GPU inference and lighter deployments (120B / 20B).
- Harmony response format and tool support (browser, python) with multiple inference backends (Transformers, vLLM, Triton, Metal).

## Use cases

- Research and large-scale inference: suitable for tasks that require strong reasoning capabilities and traceable outputs.
- Local and offline serving: examples and guidance for running with Ollama, vLLM and other local runtimes.
- Developer tooling and fine-tuning: reference implementations useful for tuning, benchmarking, and engineering integration.

## Technical highlights

- Harmony format: structured response format for composable tool calls and structured outputs.
- Multi-backend & quantization: support for MXFP4 quantization to reduce memory footprint and improve inference efficiency.
- Reference implementations: PyTorch, Triton and Metal examples provided to aid engineering portability and optimization.
