---
name: XGrammar
slug: xgrammar
homepage: https://xgrammar.mlc.ai/docs/
repo: https://github.com/mlc-ai/xgrammar
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Utility
description: >-
  An efficient, flexible and portable structured generation engine that enforces syntactic correctness via constrained
  decoding.
logo: ''
author: MLC AI
ossDate: '2024-06-28T06:34:27.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

XGrammar is an open-source engine for structured generation that leverages constrained decoding to guarantee syntactic correctness for outputs such as JSON, regex-constrained text, and custom CFGs.

## Key features

- Constraint decoding with near-zero overhead for JSON generation.
- Multi-platform deployment (Linux, macOS, Windows) and multi-language APIs (Python, C++, JS).
- Integrations with inference backends (vLLM, TensorRT-LLM, MLC-LLM), examples, and benchmarks.

## Use cases

- Ensure structurally valid JSON or custom-format outputs in production (API responses, data extraction, function-call payloads).
- High-throughput batch generation and low-latency online inference.
- Use as a structured generation backend for inference engines or middleware.

## Technical details

- Implemented in C++ with Python bindings; repository includes documentation, examples, and test suites, licensed under Apache-2.0.
- Optimized algorithms for constrained decoding achieve minimal runtime overhead and broad model compatibility.
- Active community and integrations with multiple projects make it suitable for production and research.
