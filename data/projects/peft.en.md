---
name: PEFT
slug: peft
homepage: 'https://huggingface.co/docs/peft'
repo: https://github.com/huggingface/peft
license: Apache-2.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Fine-tuning
  - LoRA
  - Parameter-Efficient
  - LLM
  - PyTorch
description: State-of-the-art parameter-efficient fine-tuning methods for large language models, enabling adapter-based training with minimal GPU resources.
logo: ''
author: Hugging Face
ossDate: '2022-11-25'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

PEFT (Parameter-Efficient Fine-Tuning) is Hugging Face's library for adapting large pretrained models using a fraction of the parameters. It implements LoRA, QLoRA, prefix tuning, prompt tuning, and other PEFT methods, enabling fine-tuning of large models on consumer GPUs with minimal memory overhead.

## Key Features

- LoRA, QLoRA, AdaLoRA, and IA3 adapter methods
- Prefix tuning, prompt tuning, and P-tuning v2
- Seamless integration with Hugging Face Transformers and Accelerate
- Adapter merging, mixing, and loading utilities
- Support for saving and sharing adapters on Hugging Face Hub

## Use Cases

- Fine-tuning LLMs on single consumer GPUs via QLoRA
- Creating domain-specific adapters without full model training
- Multi-task adaptation by combining multiple LoRA adapters
- Rapid experimentation with different fine-tuning strategies

## Technical Details

- Works with any Hugging Face Transformers model
- Reduces trainable parameters by 90%+ compared to full fine-tuning
- Supports 8-bit and 4-bit quantization via bitsandbytes integration
- Adapters are typically 10-100MB, easily shared and versioned
