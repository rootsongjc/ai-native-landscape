---
name: LMFlow
slug: lmflow
homepage: https://optimalscale.github.io/LMFlow/
repo: https://github.com/optimalscale/lmflow
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Dev Tools
  - FineTune
  - ML Platform
description: An extensible, convenient, and efficient toolbox for fine-tuning and inference of large foundation models.
logo: ''
author: OptimalScale
ossDate: '2023-03-27T13:56:29.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

LMFlow is an extensible toolbox for fine-tuning and inference of large foundation models. It provides end-to-end support from dataset preparation, fine-tuning and benchmarking to deployment, and ships with templates, model zoo, and reproducible examples.

## Key features

- Multiple tuning methods (Full FT, LoRA, QLoRA, LISA) and support for custom optimizers.
- Acceleration and memory optimizations: Flash Attention, vLLM, DeepSpeed, gradient checkpointing, position interpolation.
- Model zoo, benchmark tools and Colab-ready tutorials for reproducible experiments.

## Use cases

- Research and reproducible fine-tuning pipelines and benchmarking.
- Memory-efficient fine-tuning in constrained environments using LISA/QLoRA.
- Deploying fine-tuned models as chat or inference services with Gradio and vLLM integrations.

## Technical details

- Primarily Python-based with extensive documentation at <https://optimalscale.github.io/LMFlow/>.
- Supports loading datasets from Hugging Face, S3, and other sources; provides installation scripts for multiple environments.
- Licensed under Apache-2.0; actively maintained with community contributions.
