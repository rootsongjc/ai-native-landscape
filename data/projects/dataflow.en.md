---
name: DataFlow
slug: dataflow
homepage: https://opendcai.github.io/DataFlow-Doc/
repo: https://github.com/opendcai/dataflow
license: Apache-2.0
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: A data preparation and pipeline platform for domain training and retrieval-augmented generation.
author: OpenDCAI
ossDate: '2024-10-13T14:45:45Z'
featured: false
status: tracked
---
DataFlow is an open-source data preparation platform that uses the latest LLM-based operators and pipelines for AI data engineering. It transforms noisy data sources such as PDFs, plain text, and low-quality QA into high-quality datasets suitable for pre-training, supervised fine-tuning, and RAG workflows.

## Modular Operators

- Operators combining rule-based methods, deep models, and large language models into diverse data-processing units
- Text processing operators covering cleaning, deduplication, normalization, and format extraction
- Generation verification operators to validate LLM-produced outputs against quality criteria
- Extensible operator framework for adding custom data processing logic

## Pipeline Orchestration

- Reusable pipeline definitions covering the full lifecycle from data extraction through quality evaluation
- Multi-dimensional scoring and filtering mechanisms to improve downstream model performance
- Support for GPU-accelerated processing and distributed execution of large-scale pipelines
- Integration points with vLLM and Hugging Face dataset ecosystems

## Use Cases

- Data cleaning and labeling in domain-specific fields such as healthcare, finance, and legal
- Constructing SFT and fine-tuning datasets from raw enterprise documents and web crawls
- Building high-quality knowledge entries for RAG systems with automatic quality scoring
- Embedding automated data pipelines into existing MLOps workflows

## Deployment

- Implemented primarily in Python with Docker support for reproducible environments
- GPU acceleration for LLM-based operators to maximize throughput
- Licensed under Apache-2.0 with an active community contributing new operators and pipeline templates
