---
name: ART (Agent Reinforcement Trainer)
slug: openpipe-art
homepage: https://art.openpipe.ai
repo: https://github.com/openpipe/art
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - AI Agent
  - RAG
description: Open-source reinforcement learning trainer from OpenPipe for training LLM-based agents.
logo: ''
author: OpenPipe
ossDate: '2025-03-10T18:25:47.000Z'
featured: false
status: tracked
---

## Overview

ART (Agent Reinforcement Trainer) is an open-source RL framework by OpenPipe that helps LLM-based agents learn from experience to improve reliability. The project decouples client and server for training, supports local or cloud GPU environments, and provides notebooks and examples for quick experimentation.

## Key Features

- RULER (Zero-shot rewards): Use an LLM as a judge to generate reward signals, avoiding manual reward engineering.
- GRPO training loop: Provides a reproducible, scalable training pipeline for multi-step agents and outputs LoRA checkpoints.
- Rich integrations: Compatible with vLLM, Unsloth, and supports monitoring/visualization tools like W&B and Langfuse.

## Use Cases

- Improve dialog or tool-using agents via online/offline RL to raise robustness and task completion rates.
- Research and teaching: reproduce experiments, validate reward designs, and explore agent training methods.
- Deploy training outputs as LoRA checkpoints to inference services for fast iteration.

## Technical Notes

- Client/server separation: decouples training from inference so training can run on GPU nodes independently.
- LoRA and vLLM support: training outputs are saved as LoRA checkpoints and can be hot-loaded into inference engines.
- Comprehensive notebooks and docs: many examples and benchmarks available to help reproduce results quickly.
