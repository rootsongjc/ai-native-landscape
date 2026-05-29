---
name: OpenRLHF
slug: openrlhf
homepage: https://openrlhf.readthedocs.io/
repo: https://github.com/openrlhf/openrlhf
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - FineTune
  - ML Platform
  - Training
description: >-
  An easy-to-use, high-performance open-source RLHF framework built on Ray, vLLM and DeepSpeed, supporting distributed
  and hybrid-engine training.
logo: ''
author: OpenRLHF 团队
ossDate: '2023-07-30T02:20:13.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

OpenRLHF is an easy-to-use, high-performance open-source RLHF framework built on Ray, vLLM, DeepSpeed and Hugging Face Transformers. It simplifies RLHF training at scale and supports distributed and hybrid-engine scheduling for models from billions to tens of billions of parameters.

## Key features

- Distributed implementations for PPO, REINFORCE++, GRPO, RLOO and other RL algorithms, leveraging Ray for scalable scheduling.
- vLLM-based accelerated sampling, DeepSpeed ZeRO-3 and AutoTP for memory-efficient, high-throughput training.
- Support for QLoRA/LoRA, RingAttention, FlashAttention, and multi-node training scripts with Docker and example configurations.

## Use cases

- Large-scale RLHF training on multi-node GPU clusters (PPO / REINFORCE++ / DPO, etc.).
- Accelerating sample generation with vLLM to improve RLHF training throughput.
- Research and production use for model alignment, benchmarking and multi-node experiments.

## Technical details

- Architecture uses Ray for distributed scheduling and supports Hybrid Engine to colocate models and vLLM engines for better GPU utilization.
- Deep integration with the Hugging Face and vLLM ecosystems, with provided example scripts, Dockerfiles and detailed documentation at <https://openrlhf.readthedocs.io/>.
- Designed with performance tuning options (async training, packing samples, tensor parallelism, dynamic sampling) for large-model training.
