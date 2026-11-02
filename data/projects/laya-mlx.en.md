---
name: laya-mlx
slug: laya-mlx
homepage: https://pypi.org/project/laya-mlx/
repo: https://github.com/mizorewww/laya-mlx
license: Apache-2.0
category: inference-serving
subCategory: edge-local-inference
tags:
  - MLX
  - Apple Silicon
  - Decision Model
  - Local Inference
description: >-
  Native MLX runtime for Laya typed decision models: answers constrained questions (choice, rubric score,
  yes/no) with calibrated probabilities from a single bidirectional forward pass — 7–14 ms on M3 Max,
  no text generation, PyTorch, or cloud API.
author: mizorewww
ossDate: '2026-09-19'
featured: false
status: tracked
---

## Overview

laya-mlx runs the open-weight Laya typed decision models natively on Apple Silicon via MLX. Instead of generating tokens, Laya answers constrained questions — pick an option, score against a rubric, judge a proposition true or false — with calibrated probabilities from one bidirectional forward pass, so there is no JSON to parse. The port runs the original Laya weights without PyTorch, Transformers, or a cloud API, with a median 13.4 ms short English decision (421M checkpoint) and 7.4 ms with the multilingual checkpoint on an M3 Max in FP16.

## Key Features

- Typed decisions: `choice` (probability per option), `score` (probability per rubric level plus the expected level), and `noul` (P(true)), each with calibrated probabilities and confidence fields
- Millisecond local latency: 13.4 ms median for a short English decision, 7.4 ms multilingual on M3 Max FP16, with 50-question throughput of ~147–395 q/s
- Language routing with `Router()`: detects the language, picks a checkpoint, and keeps up to two resident; custom checkpoints can be registered
- Confidence gate (`min_confidence=`) flags low-confidence answers for review, and `predict_shortlist` (embedding pre-filter) or `predict_tournament` scale to large choice sets
- Ships a CLI (`laya-mlx predict`), an HTTP server (`laya-mlx-serve`), an MCP server, and LangChain/LlamaIndex/CrewAI/Agno integrations as extras; `laya-mlx convert` exports standalone checkpoints

## Use Cases

- Routing, classification, rubric scoring, and yes/no judgment inside agent pipelines where a full LLM call is overkill
- High-frequency local decisions — the bundled Snake demo asks three questions per move and reached 75.4 moves/s with zero deaths
- Batch scoring of long documents with answer attribution preserved

## Technical Details

- The encoder and decision heads from upstream Laya (pinned to v0.4.17) are reimplemented in Apple's MLX framework; prompt formatting, calibration, routing, and output schema follow upstream, with port fidelity verified at 63/63 validation questions in both FP32 and FP16 (378/378 comparisons)
- One bidirectional forward pass per question set returns calibrated probabilities directly — no autoregressive token generation and no JSON parsing; checkpoints are 322M/421M-parameter MLX FP16 weights published on Hugging Face with pinned revisions and checksums
- Throughput options include `compile=True`, `pad_to_multiple=16`, and `cache_prompts=True`; `predict_batch` shares forward passes across identical question schemas, and long-text scanning keeps answer attribution
- Scope boundaries: CUDA, ONNX, PyTorch backend controls, and training stay upstream; RLCD training and fine-tuning are out of scope for this port
