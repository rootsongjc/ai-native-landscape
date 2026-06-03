---
name: DeepEval
slug: deepeval
homepage: null
repo: https://github.com/confident-ai/deepeval
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: >-
  DeepEval is an open-source LLM evaluation framework that provides modular metrics and tooling for testing LLM systems
  and RAG pipelines.
author: confident-ai
ossDate: '2023-08-10T05:35:04.000Z'
featured: false
status: tracked
---
DeepEval is a lightweight, extensible evaluation framework for large language models (LLMs). It offers a wide range of ready-made metrics (e.g., G-Eval, RAG metrics, hallucination detection) and supports both end-to-end and component-level testing, enabling reproducible benchmarks in local and CI environments.

## Key Features

- Rich metrics: G-Eval, RAG-focused metrics (Answer Relevancy, Faithfulness, RAGAS), agentic metrics, and conversational metrics.
- Flexible evaluation: supports dataset/bulk evaluation, pytest integration, and component tracing with decorators.
- Extensible: custom metrics, synthetic dataset generation, CI/CD integration, and integrations with LlamaIndex and Hugging Face.

## Use Cases

- Regression testing and benchmarking of LLM-powered products.
- Evaluating RAG retrieval quality and answer faithfulness.
- Assessing agent task completion and tool-calling correctness.

## Technical Highlights

- Python-based (requires Python >= 3.9), installable via pip.
- Integrations and examples for popular libraries; supports local NLP models and cloud LLMs.
- Outputs structured evaluation results suitable for analysis and reporting; optional cloud sync with Confident AI platform.
