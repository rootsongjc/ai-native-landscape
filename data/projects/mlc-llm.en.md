---
name: MLC LLM
slug: mlc-llm
homepage: https://llm.mlc.ai/
repo: https://github.com/mlc-ai/mlc-llm
license: Apache-2.0
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
description: >-
  MLC LLM is a machine learning compiler and deployment engine that enables high-performance LLM inference across
  platforms using compilation and runtime optimizations.
author: MLC AI
ossDate: '2023-04-29T01:59:25.000Z'
featured: false
status: tracked
---

## Overview

MLC LLM is a compiler-driven deployment engine for large language models. It compiles and runs models efficiently on a wide range of platforms, including servers, browsers, and mobile devices.

## Key features

- Cross-platform backends (CUDA, Vulkan, Metal, WebGPU) and mobile support.
- Compiler optimizations that produce efficient model execution code and runtime scheduling.
- OpenAI-compatible APIs and SDKs for Python, JavaScript, and mobile platforms.

## Use cases

- Deploying LLM services across heterogeneous hardware to improve throughput and latency.
- Running LLMs in-browser or on mobile devices for low-latency edge applications.

## Technical notes

- MLCEngine unifies compilation and runtime, offering extensible backends and deployment tooling; follow the documentation at <https://llm.mlc.ai/docs/> for build and integration steps.
