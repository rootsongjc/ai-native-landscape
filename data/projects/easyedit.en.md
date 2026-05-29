---
name: EasyEdit
slug: easyedit
homepage: https://zjunlp.github.io/project/KnowEdit
repo: https://github.com/zjunlp/easyedit
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Framework
description: >-
  An easy-to-use knowledge editing framework providing multiple editing methods, evaluation metrics and datasets;
  supports LLMs and some multimodal editing scenarios.
logo: ''
author: ZJUNLP
ossDate: '2023-05-09T07:48:02Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

EasyEdit is a toolkit for knowledge editing of large language models (LLMs). It aims to efficiently modify model behavior on specific queries with minimal data while preserving performance on unrelated inputs. The project implements various editing methods (ROME, MEND, MEMIT, WISE, etc.), evaluation metrics (reliability, generalization, locality, portability), and benchmark datasets (KnowEdit / CKnowEdit).

## Key Features

- Unified editing framework (Editor / Method / Evaluate)
- Multiple method implementations: locate-then-edit (ROME, MEMIT), memory/routing (SERAC, IKE), meta-learning (MEND), etc.
- Support for sequential/batched edits and rollback
- Rich examples, tutorial notebooks and benchmark datasets (KnowEdit / CKnowEdit)

## Use Cases

- Fix outdated facts or incorrect knowledge in a model
- Erase or correct sensitive information
- Fine-grained control of model behavior for product requirements
- Research platform to compare editing methods and costs

## Technical Highlights

- Supports multiple model families (GPT series, LLaMA, GPT-J, T5) and a variety of editing algorithms
- Evaluation scripts for edit metrics (rewrite_acc, rephrase_acc, locality, portability)
- Includes multimodal editing examples and tutorials (e.g. MMEdit)
