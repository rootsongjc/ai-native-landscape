---
name: LLaMA Factory
slug: llama-factory
homepage: https://llamafactory.readthedocs.io/
repo: https://github.com/hiyouga/llama-factory
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Data
  - LLM
description: >-
  A comprehensive framework for fine-tuning LLaMA models with multiple training methods, efficient algorithms, and
  easy-to-use interface for both research and production environments.
author: hiyouga
ossDate: '2023-05-28T10:09:12.000Z'
featured: false
status: tracked
---

LLaMA Factory is a unified framework for fine-tuning large language models that supports over 100 pre-trained models and multiple training methods. It provides a no-code interface for local fine-tuning, making it accessible to both researchers and production engineers who need to adapt foundation models to specific tasks.

## Supported Models and Methods

- **Over 100 pre-trained models** including LLaMA, Qwen, Mistral, Gemma, and ChatGLM out of the box
- **Full training pipeline** spanning pre-training, supervised fine-tuning, reward modeling, and preference alignment
- **Preference alignment algorithms** including PPO, DPO, KTO, and ORPO for RLHF-style training
- **Flexible computation precision** from 16-bit full-parameter tuning down to 2-bit QLoRA for consumer hardware
- **Acceleration operators** like FlashAttention-2 and Unsloth integrated for efficient training throughput

## Use Cases

- Experimenting with different fine-tuning strategies and optimization algorithms on cutting-edge models
- Adapting foundation models for domain-specific tasks such as code generation, customer support, and content creation
- Non-engineers customizing model behavior through the no-code interface without writing training scripts
- Rapid iteration on model alignment and evaluation with built-in monitoring and benchmarking tools

## Technical Highlights

- Supports inference through both Transformers and vLLM backends for flexible deployment
- Integrates experiment monitoring tools including LlamaBoard, TensorBoard, Wandb, MLflow, and SwanLab
- Built-in optimization algorithms such as GaLore, DoRA, LongLoRA, and PiSSA
- Quantization methods including AQLM, AWQ, GPTQ, and HQQ enable efficient training on consumer hardware
