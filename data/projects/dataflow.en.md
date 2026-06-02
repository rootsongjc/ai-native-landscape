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

## Overview

DataFlow is an open-source data preparation platform that uses the latest LLM-based operators and pipelines for AI data engineering. It transforms noisy data sources such as PDFs, plain text, and low-quality QA into high-quality datasets suitable for pre-training, supervised fine-tuning, and RAG workflows.

## Key Features

DataFlow provides modular operators that combine rule-based methods, deep models, and large language models into diverse data-processing units. It offers reusable pipeline orchestration from data extraction through quality evaluation, with multi-dimensional scoring and filtering to improve downstream model performance.

## Use Cases

DataFlow is used for data cleaning and labeling in domain-specific fields such as healthcare, finance, and legal. It supports constructing SFT and fine-tuning datasets, building high-quality knowledge entries for RAG systems, and embedding automated data pipelines into MLOps workflows.

## Technical Details

Implemented primarily in Python, DataFlow provides a broad operator library covering text processing, format extraction, and generation verification. It supports Docker deployment and GPU acceleration, interoperates with vLLM and Hugging Face dataset ecosystems, and is licensed under Apache-2.0.
