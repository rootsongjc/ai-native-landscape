---
name: Ragas
slug: ragas
homepage: https://docs.ragas.io/
repo: https://github.com/explodinggradients/ragas
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: >-
  Ragas is an open-source toolkit for evaluating and optimizing LLM applications, offering objective metrics, test data
  generation, and production feedback loops.
author: ExplodingGradients
ossDate: '2023-05-08T17:48:04.000Z'
featured: false
status: tracked
---

Ragas is an open-source toolkit designed to evaluate and optimize LLM applications. It provides objective metrics, automated test-data generation, and production-aligned feedback loops to help teams measure and improve model behavior in real-world scenarios.

## Key features

- Objective metrics: combine LLM-driven and traditional metrics for fine-grained evaluation.
- Test data generation: automatically create diverse, production-aligned test sets.
- Integrations: works with popular LLM frameworks (e.g. LangChain) and observability tools for easy production adoption.

## Use cases

- Evaluation & regression testing: automate checks for model changes and regressions.
- Quality engineering: generate test datasets to surface real-world issues early.
- Continuous improvement: close the loop using production data to refine models.

## Technical notes

- Implementation: primarily Python, with examples and extension points.
- Extensible metrics: supports pluggable evaluators and LLM-based scorers (AspectCritic).
- Deployment: provides CLI and library APIs suitable for local installs and CI integration.
