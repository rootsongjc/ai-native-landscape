---
name: Heretic
slug: heretic
homepage: null
repo: https://github.com/p-e-w/heretic
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - CLI
  - Fine Tuning
  - Optimization
  - Tool
description: >-
  Heretic is a fully automated tool that removes censorship (aka "safety alignment") from transformer-based language
  models without expensive post-training. It combines an advanced implementation of directional ablation, also known as
  "abliteration," with a TPE-based parameter optimizer powered by Optuna to automatically find high-quality ablation
  parameters by co-minimizing refusals and KL divergence from the original model.
logo: ''
author: Philipp Emanuel Weidmann
ossDate: '2025-03-16'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Heretic is an open-source Python tool designed to remove safety censorship mechanisms from language models. Based on advanced directional ablation techniques (also known as "abliteration"), it implements a fully automated parameter optimization workflow that eliminates the need for manual adjustment.

Key innovations include:
- **Fully Automatic**: No understanding of transformer internals required; anyone who can run a command-line program can use it
- **Intelligent Parameter Optimization**: Uses Optuna's TPE (Tree-structured Parzen Estimator) optimizer to automatically find optimal ablation parameters
- **Quality Assurance**: Co-minimizes refusals and KL divergence from original model to preserve model intelligence while removing censorship
- **Component-level Optimization**: Applies different ablation weights for different components like attention output projection and MLP down-projection

## Key Features

- **Broad Model Support**: Supports most dense models, including multimodal models and various MoE architectures
- **Quantization Support**: Integrated bitsandbytes quantization significantly reduces VRAM requirements
- **Built-in Evaluation**: Provides evaluation functionality to quantitatively compare model performance before and after ablation
- **Research Features**: Optional research mode installation supports residual vector visualization and geometric analysis
- **Flexible Configuration**: Rich configuration options with both CLI and configuration file support
- **Multiple Output Options**: After processing, save the model, upload to Hugging Face, or chat directly for testing

## Use Cases

- **Model Research**: Provides tools for researchers to explore model internal semantics
- **Model Customization**: Remove safety restrictions to obtain fully responsive models
- **Performance Optimization**: Automatically find the optimal balance between censorship removal and model quality
- **Interpretability Research**: Visualize residual vector transformations across layers
- **Educational Learning**: Understand language model safety alignment mechanisms and ablation techniques

## Technical Highlights

- **Directional Ablation Implementation**: Identifies relevant matrices for each supported transformer component and orthogonalizes them with respect to the relevant "refusal direction"
- **Refusal Direction Computation**: Computes difference-of-means between first-token residuals for "harmful" and "harmless" example prompts
- **Parameterized Control**:
  - `direction_index`: Refusal direction index, supports per-layer independent directions
  - `max_weight`/`min_weight`: Describe shape and position of ablation weight kernel
  - Supports non-integral direction indices, unlocking more directional space through linear interpolation
- **Benchmark**: On RTX 3090 with default configuration, decensoring Llama-3.1-8B-Instruct takes approximately 45 minutes
- **License**: AGPL-3.0
