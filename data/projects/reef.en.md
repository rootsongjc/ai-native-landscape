---
name: reef
slug: reef
homepage: https://reefinfra.ai
repo: https://github.com/Human-Agent-Society/reef
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Agent Infrastructure
  - Self-Improving Agents
  - Reinforcement Learning
  - Serving
description: >-
  Open-source infrastructure for continually self-improving agents: it connects agent inference, feedback,
  learning, and versioned delivery, so agents improve model weights with Slime/SGLang training or evolve
  their harness — prompts, rules, and skills.
author: Human-Agent-Society
ossDate: '2026-08-31'
featured: false
status: tracked
---

## Overview

Reef is open-source infrastructure for continually self-improving agents. It connects agent inference, feedback, learning, and versioned delivery in one system: use it to train model weights with Slime and SGLang, or to improve an agent's harness — its prompts, rules, and skills — from how people actually interact with it. Unlike an inference engine or an RL training framework alone, Reef serves live traffic, records feedback, produces updates, and commits accepted updates to a version history while staying live.

## Key Features

- Two learning surfaces: model weights via GPU training recipes, or the agent harness (a tree of prompts, rules, and skills) using nothing but a model endpoint
- Four-step learning cycle — Serve, Observe, Grow, Commit — with feedback matched to recorded interactions via receipts
- OpenAI- and Anthropic-compatible inference endpoints (`/v1/chat/completions`, `/v1/responses`, `/v1/messages`); scenarios are selected with an `x-reef-scenario` header
- Versioned delivery: candidate updates are evaluated, winners are published as releases, and the runtime loads accepted checkpoints without restarting
- A recipe cookbook spanning offline tasks (SAO, SDPO, OPD, GEPA, Meta-Harness), open-ended discovery via test-time training (TTT-Discover), and online learning from usage (OpenClaw-RL, ACE, ReasoningBank)

## Use Cases

- Training model weights from user feedback on a served agent, with a trainable model and a supported GPU stack
- Evolving a coding agent's prompts, rules, and skills from scored task feedback — no local training GPUs needed
- Scientific discovery workloads using test-time training against a measurable objective

## Technical Details

- Python 3.12+ package (`reef-infra` on PyPI); each learning cycle runs through dedicated modules: Serve (`service/`, `runtime/`), Observe (`storage/records`, `record2sample/`), Grow (`recipe/`, `train/`), and Commit (`evaluation/`, `artifact/`, `surface/`)
- Inference responses carry an `x-reef-agent-record-id` receipt; feedback is reported to `/reef/report` with scores, text or structured feedback, and the receipts it evaluates, and `record2sample` decides which records are eligible before a recipe consumes them
- Harness evolution (`HarnessEvolutionRecipe`) keeps the harness as a tree of text files: a method edits a copy from the step's traces, evaluation runs the real agent on tasks with the candidate, and a winner is published at `GET /reef/harness`; published files carry no endpoint, key, or model so clients bind them safely outside the agent's project
- Artifacts and checkpoints are stored in Git repositories initialized with git-lfs; when a checkpoint passes evaluation, the inference runtime loads it as the new release and later requests use the new version without a restart
