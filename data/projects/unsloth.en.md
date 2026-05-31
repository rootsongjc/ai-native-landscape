---
name: Unsloth
slug: unsloth
homepage: https://docs.unsloth.ai/
repo: https://github.com/unslothai/unsloth
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - FineTune
  - ML Platform
  - Training
description: >-
  High-performance toolkit for fine-tuning and reinforcement learning of large models, with memory-efficient kernels and
  wide model support.
logo: ''
author: Unsloth 团队
ossDate: '2023-11-29T16:50:09.000Z'
featured: false
status: tracked
---

## Introduction

Unsloth is a high-performance toolkit for fine-tuning and reinforcement learning of large language and multimodal models. It focuses on memory and compute efficiency to enable training and RL workflows on limited VRAM while supporting exports to common deployment formats.

## Key features

- Support for full fine-tuning, RL algorithms (DPO, GRPO, PPO) and pretraining.
- Efficient Triton-based kernels and 4-bit/8-bit quantization for reduced memory usage.
- Ready-to-run notebooks, Docker images and export paths to GGUF, Hugging Face and Ollama.

## Use cases

- Fine-tuning LLMs and VLMs on constrained GPUs using QLoRA or full-finetune pipelines.
- Applying reinforcement learning for alignment and policy optimization.
- Rapid experimentation via Colab/Kaggle notebooks or production runs with Docker/Blackwell images.

## Technical details

- Built on PyTorch and Triton with compatibility for TRL and vLLM ecosystems.
- Multiple installation options (pip, Docker) and detailed documentation at <https://docs.unsloth.ai/>.
- Models and datasets integrations with Hugging Face and model zoo exports for deployment.
