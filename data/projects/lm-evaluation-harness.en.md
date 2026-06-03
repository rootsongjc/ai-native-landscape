---
name: lm-evaluation-harness
slug: lm-evaluation-harness
homepage: null
repo: https://github.com/eleutherai/lm-evaluation-harness
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: >-
  The Language Model Evaluation Harness is a framework for large-scale, reproducible evaluation of generative language
  models across many tasks and datasets.
author: EleutherAI
ossDate: '2020-08-28T00:09:15.000Z'
featured: false
status: tracked
---

## Overview

The lm-evaluation-harness provides a unified interface and a large collection of tasks (e.g. Hellaswag, LAMBADA) for evaluating generative LMs. It supports local models, Hugging Face models, and commercial APIs.

## Key features

- Extensive benchmark and task library covering common academic and engineering evaluations.
- Support for multiple backends (transformers, vLLM, GPT-NeoX) and deployment modes.
- Configurable evaluation pipelines for reproducible experiments and comparisons.

## Use cases

- Researchers comparing model performance and reproducing academic results.
- Engineering teams running regression tests and performance monitoring for models.
- Building leaderboard or benchmarking platforms (e.g. Open LLM Leaderboard).

## Technical notes

- Provides CLI `lm_eval` with documented interface and example configs.
- Supports batching, parallel evaluations, and caching of results for repeatability.
- Integrations for result visualization and reporting (W&B, Zeno, Hugging Face Hub).
