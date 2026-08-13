---
name: PR-AF
slug: pr-af
homepage: https://www.agentfield.ai
repo: https://github.com/Agent-Field/pr-af
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Code Review
  - Agent Framework
  - LLM
description: Open-source agentic code review engine that turns each PR into a task-specific review plan with focused reviewer agents.
author: Agent-Field
ossDate: '2026-03-11T15:35:35Z'
featured: false
status: tracked
---

## Overview

PR-AF is an open-source agentic code review system built on AgentField, ranked #1 open-source code reviewer on Martian Code-Review-Bench. Instead of shallow diff summaries, it builds a task-specific review plan per PR, spawns focused reviewer agents, grounds findings in code evidence, and challenges its own results. It is model-flexible, running cheaper models for routine PRs and frontier models for high-stakes reviews.

## Key Features

- Task-specific review plans with spawned focused reviewer agents.
- #1 open-source reviewer on Code-Review-Bench golden recall (0.706 with GLM-5.2).
- Self-hosted API with Docker; trigger reviews via CLI, curl, CI, or other agents.
- Model-flexible routing from cheap models to Opus-class frontier models.

## Use Cases

- Deep automated code review for pull requests in CI.
- Self-hosted review gates with open models for compliance.
- Agentic review intelligence grounded in code evidence.

## Technical Details

- Plan-then-review pipeline: per-PR review plan → spawned focused reviewer agents → evidence-grounded findings → self-challenge stage that verifies results.
- Model routing by PR stakes: cheaper models for routine reviews, GLM-5.2 for open-model CI gates, Opus-class frontier models for major PRs.
- Self-hosted Docker API; reviews triggered via CLI, curl, CI, or other agents.
- Reproducible benchmarking: public per-PR judge verdicts and reproduction scripts.
