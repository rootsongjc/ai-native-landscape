---
name: Dingo
slug: dingo
homepage: https://huggingface.co/spaces/DataEval/dingo
repo: https://github.com/dataeval/dingo
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: A tool for automated data quality evaluation that combines rule-based and model-based assessments.
logo: ''
author: MigoXLab / DataEval
ossDate: '2024-12-24T05:59:24.000Z'
featured: false
status: tracked
---

## Introduction

Dingo is a comprehensive data quality evaluation tool that automatically detects
issues in datasets and produces visual reports. It supports both rule-based checks
and LLM-driven evaluation, suitable for pretraining, fine-tuning and evaluation datasets.

## Key Features

- Multi-source & multi-modal: supports text and image data from local files, Hugging Face and S3.
- Rule & model hybrid evaluation: ships with 20+ built-in rules and supports LLM-based assessments for hallucination, completeness and relevance.
- Visual reports: generates summaries and detailed reports, with local GUI and Gradio demos available.
- Flexible integration: offers CLI and SDK interfaces and can run on local or Spark execution engines.

## Use Cases

- Pretraining data filtering: detect and remove low-quality samples before training.
- Fine-tuning data auditing: check SFT datasets for consistency and harmful content.
- Evaluation pipelines: integrate into CI to automate dataset and model quality checks.

## Technical Highlights

- Extensible rule system: register custom rules and prompts for domain-specific checks.
- LLM-assisted evaluation: configure OpenAI or local models for semantic assessments.
- Traceable outputs: produces score summaries and per-sample diagnostics for easy triage.
