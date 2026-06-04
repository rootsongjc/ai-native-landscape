---
name: OpenCompass
slug: opencompass
homepage: https://opencompass.org.cn/
repo: https://github.com/open-compass/opencompass
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: >-
  A one-stop platform for evaluating large models, providing benchmarks, evaluation toolkits and leaderboards to
  reproduce and compare model capabilities.
author: OpenCompass Contributors
ossDate: '2023-06-15T12:42:58.000Z'
featured: false
status: tracked
---

## Introduction

OpenCompass is a one-stop platform for evaluating large language and vision-language models. It provides dataset preparation, evaluation scripts, configurable evaluators and leaderboards (CompassRank/CompassHub) to support reproducible and extensible evaluations across open-source and API models.

## Key features

- Predefined configurations for 70+ datasets and 20+ models, covering multi-dimensional capability evaluations.
- Distributed evaluation and one-line acceleration backend support (vLLM, LMDeploy) for fast large-model evaluation.
- Multiple evaluation paradigms (zero-shot, few-shot, LLM-judge, chain-of-thought) and extensible evaluator system.
- Includes examples, reproduction scripts, data splits and leaderboard integration for easy result sharing.

## Use cases

- Reproducing academic and engineering evaluations to compare models and backends on standard tasks.
- Building automated evaluation pipelines for regression testing and benchmark monitoring.
- Quickly validating in-house or third-party API models across multiple task collections.

## Technical details

- Implemented in Python, available via pip and source install, with optional acceleration dependencies (vLLM, LMDeploy, ModelScope).
- Configuration-based experiments, graders and tooling scripts to reproduce leaderboard results and extend with new tasks.
- Full documentation on ReadTheDocs and active community channels (Discord/WeChat); active releases and benchmark support.
