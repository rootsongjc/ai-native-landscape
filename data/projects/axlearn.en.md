---
name: AXLearn
slug: axlearn
homepage: https://apple.github.io/axlearn
repo: https://github.com/apple/axlearn
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Framework
  - ML Platform
description: >-
  An extensible deep learning library built on JAX/XLA, designed for developing, training and deploying large-scale
  models.
logo: ''
author: Apple
ossDate: '2023-02-25T01:33:06.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

AXLearn is an extensible library built on JAX and XLA to support development of large-scale deep learning models. It provides a configuration-based, modular approach to compose models and integrates with libraries like Flax and Hugging Face Transformers.

## Key Features

- Reusable model components and a declarative configuration system.  
- Support for large-scale distributed training using GSPMD-style global computation.  
- CLI and infra tooling for managing jobs, experiments and data.  

## Use Cases

- Training large language and vision models with billions of parameters.  
- Running distributed training jobs on cloud or private clusters.  
- Serving as a research-to-production framework for model development and baselines.  

## Technical Details

- Built on JAX/XLA for efficient compilation and execution.  
- Modular configuration for reproducibility and experiment management.  
- In-repo docs (docs/) provide guidance for getting started, concepts and CLI usage.
