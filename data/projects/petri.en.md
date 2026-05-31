---
name: Petri
slug: petri
homepage: https://safety-research.github.io/petri/
repo: https://github.com/safety-research/petri
license: Unknown
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Agents
  - Alignment
description: >-
  Petri is an alignment auditing agent designed to quickly explore alignment hypotheses and help researchers automate
  evaluation workflows.
logo: ''
author: Safety Research
ossDate: '2025-08-19T20:39:05.000Z'
featured: false
status: tracked
---

## Introduction

Petri is an agent-oriented tool for alignment research and auditing. It enables researchers to systematically explore and validate alignment hypotheses by constructing, running, and comparing experimental campaigns. Petri focuses on automating experiment orchestration, prompt generation, and result aggregation to surface failure modes and risks across models and strategies.

## Key Features

- Automated multi-run experiment orchestration with support for parallel testing and comparative analysis.
- Customizable prompt templates and policy modules for quickly building hypothesis scenarios.
- Reproducible audit pipelines with structured outputs for downstream analysis.

## Use Cases

- Alignment research: rapidly validate hypotheses and produce comparable experiment artifacts.
- Safety audits: discover model aberrations or biases under variant inputs and strategies.
- Model evaluation: provide a baseline for quantifying the impact of policy or prompt changes.

## Technical Highlights

- Agent-based task orchestration engine supporting multi-step decisions and rollbacks.
- Compatibility with common model stacks and tooling for easy integration into evaluation workflows.
- MIT licensed project that welcomes community contributions and extensions.
