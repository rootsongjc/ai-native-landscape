---
name: ARIS (Auto-Research-In-Sleep)
slug: auto-claude-code-research-in-sleep
homepage: null
repo: https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - Research Automation
  - Autonomous Agent
  - Claude Code
  - ML Research
  - LLM
description: ARIS is a lightweight Markdown-only skills collection for autonomous ML research, enabling cross-model review loops, idea discovery, and experiment automation that works with any LLM agent.
author: wanshuiyin
ossDate: '2026-03-10'
featured: false
status: tracked
---

## Overview

ARIS (Auto-Research-In-Sleep) is a set of plain-Markdown skills that turn an LLM coding agent into an autonomous research assistant. Instead of a framework or runtime, it ships opinionated workflows for cross-model paper review, research idea generation, and experiment automation. The skills are model-agnostic and drop into Claude Code, Codex, OpenClaw, or any agent that reads Markdown instructions.

## Key Features

- Cross-model review loops where multiple LLMs critique and refine each other's outputs
- Research idea discovery and paper-review workflows for ML literature
- Experiment automation that runs and iterates on ML jobs hands-off
- Pure Markdown skills with no framework lock-in or extra dependencies
- Compatible with Claude Code, Codex, OpenClaw, and general LLM agents

## Use Cases

- Running overnight autonomous literature reviews and paper critiques
- Generating and stress-testing novel research ideas across models
- Automating repetitive ML experiment and ablation pipelines
- Building a self-improving research loop inside an existing coding agent

## Technical Details

- Markdown-only skill definitions — no daemon, runtime, or vendor SDK required
- Designed around cross-model orchestration and iterative agent loops
- Integrates via standard skill/tool-loading mechanisms in agents like Claude Code
