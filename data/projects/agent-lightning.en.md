---
name: Agent Lightning
slug: agent-lightning
homepage: https://microsoft.github.io/agent-lightning/
repo: https://github.com/microsoft/agent-lightning
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Training
description: >-
  Agent Lightning is an open-source framework from Microsoft Research for training and improving AI agents with minimal
  code changes.
logo: ''
author: Microsoft Research
ossDate: '2025-06-18T07:28:45.000Z'
featured: false
status: tracked
---

## Overview

Agent Lightning is a Microsoft Research open-source project that enables teams to train and optimize AI agents using reinforcement learning, automatic prompt optimization, and supervised fine-tuning with minimal changes to existing agent code. It centralizes structured traces (prompts, tool calls, rewards) into the LightningStore and provides trainer components and pipelines that can produce improved policies or prompt templates.

## Key features

- Minimal integration effort: plug training loops into existing agents with little or no code rewrite.
- Supports multiple training approaches including RL, automatic prompt optimization, and supervised fine-tuning.
- Compatible with common agent frameworks (e.g., LangChain, AutoGen) and includes examples and pipelines.
- Structured trace collection and centralized storage for reproducible training and evaluation.

## Use cases

- Continuous policy improvement for multi-agent systems operating in real environments.
- Improving long-horizon task performance for task-oriented or dialogue agents.
- Research and benchmarking for agent RL algorithms and training pipelines.

## Technical highlights

- Event tracing and structured telemetry: captures prompts, tool usage, model responses and rewards.
- Pluggable trainers and algorithms: enables integration of custom RL algorithms and optimization loops.
- Framework interoperability and extensibility to fit various deployment and experimentation setups.
