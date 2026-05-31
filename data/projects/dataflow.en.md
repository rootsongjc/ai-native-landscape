---
name: DataFlow
slug: dataflow
homepage: https://opendcai.github.io/DataFlow-Doc/
repo: https://github.com/opendcai/dataflow
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: A data preparation and pipeline platform for domain training and retrieval-augmented generation.
logo: ''
author: OpenDCAI
ossDate: '2024-10-13T14:45:45Z'
featured: false
status: tracked
---

## Detailed Introduction

DataFlow is a data preparation and pipeline system designed for domain-specific training and retrieval-augmented generation (RAG). It composes modular `operator` components into reusable `pipelines` to parse, clean, augment, and evaluate data from noisy sources such as PDFs, plain text, and low-quality QA, producing high-quality datasets suitable for pre-training, supervised fine-tuning, or RAG workflows.

## Main Features

- Modular operators: combine rule-based methods, deep models and large language models (LLM) to build diverse data-processing units.
- Reusable pipelines: orchestrate operators to deliver end-to-end flows from extraction to quality evaluation.
- Data quality scoring: multi-dimensional evaluation and filtering to improve downstream model performance and reduce noise.

## Use Cases

DataFlow is suitable for scenarios that require improved domain model performance — e.g., data cleaning and labeling in healthcare, finance, and legal domains; constructing SFT/fine-tuning datasets; building high-quality knowledge entries for RAG; or embedding automated training pipelines into MLOps workflows.

## Technical Characteristics

Implemented primarily in Python, the project provides a broad operator library (text processing, format extraction, generation verification), supports Docker deployment and GPU acceleration, and interoperates with vLLM and Hugging Face dataset ecosystems; the repository is Apache-2.0 licensed for research and engineering use.
