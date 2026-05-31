---
name: LiveBench
slug: livebench
homepage: https://livebench.ai/
repo: https://github.com/livebench/livebench
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
  - Evaluation
description: >-
  LiveBench is a contamination-aware, objective LLM benchmark suite that provides reproducible question sets, automatic
  scoring, and an online leaderboard.
logo: ''
author: LiveBench
ossDate: '2024-06-12T12:13:57.000Z'
featured: false
status: tracked
---

## Introduction

LiveBench is a contamination-aware LLM benchmark platform focused on objective evaluation. It contains diverse tasks (reasoning, math, coding, language, data analysis, instruction following) and releases new questions regularly to reduce test-set contamination.

## Key features

- Objective, automatically scorable question sets that avoid LLM judging.
- Regularly released question sets and an online leaderboard for reproducible comparisons.
- Support for parallel evaluations, API/local model evaluation, and multiple parallelization strategies.
- Provides datasets, scoring scripts, task templates and Docker/ deployment examples.

## Use cases

- Research and engineering teams evaluating LLM performance across tasks.
- Benchmark pipelines for model comparison, regression testing and monitoring.
- Teaching and competitions requiring automated scoring and leaderboards.

## Technical highlights

- Evaluation and scoring logic implemented in Python with runnable scripts (e.g. `run_livebench.py`).
- Supports Hugging Face / API models and local GPU inference (recommend running local models via vLLM/OpenAI-compatible endpoint).
- Parallel evaluation options (tmux sessions, parallel requests) to scale to large benchmark runs.
