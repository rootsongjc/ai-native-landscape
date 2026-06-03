---
name: nanochat
slug: nanochat
homepage: null
repo: https://github.com/karpathy/nanochat
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
description: >-
  A lightweight, reproducible ChatGPT-like project designed to train and run an end-to-end LLM pipeline on a modest
  budget.
author: Andrej Karpathy
ossDate: '2025-10-13T13:46:35.000Z'
featured: false
status: tracked
---

## Overview

nanochat is an open-source full-stack project by Andrej Karpathy that implements a compact, readable pipeline to train, fine-tune, evaluate, and serve a ChatGPT-like conversational model. It aims to enable reproducible experiments and interactive demos on constrained budgets, using scripts like `speedrun.sh` to run a complete training-and-inference loop.

## Key Features

- End-to-end pipeline covering tokenization, pretraining, finetuning, evaluation, and a simple web UI for conversational interaction.
- Reproducible "speedrun" scripts to quickly bootstrap training runs and produce evaluation report cards.
- Minimal, hackable codebase that is easy to read and modify for experiments or teaching purposes.

## Use Cases

- Research and teaching: serves as a practical baseline for LLM courses and small-scale experiments.
- Rapid prototyping: build and test conversational models on limited budgets.
- Reproducible benchmarking: generate report cards to document training outcomes and baselines.

## Technical Highlights

- PyTorch-based training with support for multi-GPU and single-GPU execution modes.
- Includes a Rust-based BPE tokenizer and lightweight dependencies for easier deployment.
- Configurable model depth and batch parameters to scale training cost and capability.
