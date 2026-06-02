---
name: LLaMA Factory
slug: llama-factory
homepage: https://llamafactory.readthedocs.io/
repo: https://github.com/hiyouga/llama-factory
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Data
  - LLM
description: >-
  A comprehensive framework for fine-tuning LLaMA models with multiple training methods, efficient algorithms, and
  easy-to-use interface for both research and production environments.
logo: ''
author: hiyouga
ossDate: '2023-05-28T10:09:12.000Z'
featured: false
status: tracked
---

## Overview

LLaMA Factory is a unified framework for fine-tuning large language models that supports over 100 pre-trained models and multiple training methods. It provides a no-code interface for local fine-tuning, making it accessible to both researchers and production engineers who need to adapt foundation models to specific tasks.

## Key Features

The framework supports a wide range of models including LLaMA, Qwen, Mistral, Gemma, and ChatGLM with training methods spanning pre-training, supervised fine-tuning, reward modeling, and preference alignment (PPO, DPO, KTO, ORPO). It offers flexible computation precision from 16-bit full-parameter tuning to 2-bit QLoRA, and integrates acceleration operators like FlashAttention-2 and Unsloth for efficient training.

## Use Cases

Researchers use LLaMA Factory to experiment with different fine-tuning strategies and optimization algorithms on cutting-edge models. Production teams rely on it to adapt foundation models for domain-specific tasks such as code generation, customer support, and content creation. The no-code interface also makes it accessible to non-engineers who need to customize model behavior.

## Technical Details

LLaMA Factory supports inference through both Transformers and vLLM backends. It integrates experiment monitoring tools including LlamaBoard, TensorBoard, Wandb, MLflow, and SwanLab. Optimization algorithms such as GaLore, DoRA, LongLoRA, and PiSSA are built in, and quantization methods including AQLM, AWQ, GPTQ, and HQQ enable efficient training on consumer hardware.
