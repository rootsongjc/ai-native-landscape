---
name: ClawBench
slug: clawbench
homepage: https://claw-bench.com
repo: https://github.com/TIGER-AI-Lab/ClawBench
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
  - Evaluation
  - AI Agent
  - Browser Automation
description: >-
  ClawBench is an open-source benchmark for evaluating browser AI agents on everyday tasks across live production
  websites, with isolated runs and five-layer execution traces.
author: TIGER-AI-Lab
ossDate: '2026-04-10T01:59:17.000Z'
featured: false
status: tracked
---

## Overview

ClawBench evaluates whether browser agents can complete everyday online tasks on live production websites. Its V1 suite contains 153 tasks across 144 websites, V2 adds 130 tasks, and a 20-task Lite suite supports faster evaluation.

## Key features

- Runs each task in an isolated container against a real website.
- Supports interchangeable agent harnesses for comparing model and browser-control stacks.
- Captures video, action screenshots, HTTP traffic, browser actions, and agent messages for each run.
- Uses request interception and task-specific evaluation schemas to score outcomes while blocking irreversible actions by default.

## Use cases

- Benchmark browser and computer-use agents on realistic online workflows.
- Compare models and harnesses using reproducible task definitions and inspectable traces.
- Diagnose failures caused by reasoning, browser control, website changes, or agent-harness behavior.
