---
name: Giskard OSS
slug: giskard-oss
homepage: https://docs.giskard.ai/en/stable/getting_started/index.html
repo: https://github.com/giskard-ai/giskard-oss
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: An open-source evaluation and testing framework to detect performance, bias, and security issues in AI systems.
logo: ''
author: Giskard-AI
ossDate: '2022-03-06T21:45:37.000Z'
featured: false
status: tracked
---

## Introduction

Giskard is an open-source evaluation and testing framework that helps developers automatically detect performance, bias and security issues in LLM-based and traditional ML models. It includes tooling from RAG evaluation to vision model tests.

## Key Features

- Automated Scan: detect hallucinations, prompt injections, sensitive data leaks and robustness issues.
- RAGET: automatically generate evaluation datasets for RAG applications and evaluate generator/retriever components.
- Multi-model and environment support: works with any model via simple wrappers and runs locally, in Colab or in CI.
- Visualization & interaction: provides a web UI, documentation and examples to inspect and share results.

## Use Cases

- Pre-deployment safety checks: automatically detect harmful or risky outputs before release.
- Regression testing: monitor performance and fairness during model iteration.
- RAG evaluation: generate test sets and evaluate retrieval+generation pipelines.

## Technical Highlights

- CLI and Python API for scripted and interactive workflows.
- Active releases and community support, with extensive docs and examples.
- Modular design to extend custom checks and integrate into evaluation pipelines.
