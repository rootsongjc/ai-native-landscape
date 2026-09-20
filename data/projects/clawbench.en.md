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
ossDate: '2026-04-10'
featured: false
status: tracked
---

## Overview

ClawBench evaluates whether browser agents can complete everyday online tasks on live production websites. Its V1 suite contains 153 tasks across 144 websites, V2 adds 130 tasks, and a 20-task Lite suite supports faster evaluation.

## Key Features

- Runs each task in an isolated container against a real website.
- Supports interchangeable agent harnesses for comparing model and browser-control stacks.
- Captures video, action screenshots, HTTP traffic, browser actions, and agent messages for each run.
- Uses request interception and task-specific evaluation schemas to score outcomes while blocking irreversible actions by default.

## Use cases

- Benchmark browser and computer-use agents on realistic online workflows.
- Compare models and harnesses using reproducible task definitions and inspectable traces.
- Diagnose failures caused by reasoning, browser control, website changes, or agent-harness behavior.

## Technical Details

- Distributed as the `clawbench-eval` package (installable via uv / pipx / pip) exposing `clawbench-run`, `clawbench-batch`, `clawbench-rescore`, `clawbench-analyze`, `clawbench-reproduce`, and `clawbench-harbor-adapt` CLI entry points; the repo root is a uv package with a one-command `./run.sh`
- Container-isolated harness execution that auto-detects Docker or Podman (force one with `CONTAINER_ENGINE`), running each task against a real website in its own container
- Every (task × model) pair yields five trace layers — video, action screenshots, HTTP traffic, browser actions, agent messages — with raw V1/V2 traces published as HuggingFace datasets (NAIL-Group/ClawBenchV1Trace, TIGER-Lab/ClawBenchV2Trace) and `rescore` re-grading of historical runs
- Scoring relies on request interception plus task-specific evaluation schemas, with irreversible actions blocked by default; new tasks are contributed as a JSON spec plus rubric
- Methodology published as arXiv:2604.08523; live leaderboard hosted on HuggingFace Spaces (TIGER-Lab) with a searchable, filterable task explorer
