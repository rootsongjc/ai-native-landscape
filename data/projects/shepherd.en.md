---
name: Shepherd
slug: shepherd
homepage: https://shepherd-agents.ai/
repo: https://github.com/shepherd-agents/shepherd
license: MIT
category: agents
subCategory: agent-orchestration
tags:
  - Agent Orchestration
  - Observability
  - Meta Agents
  - Runtime
description: Runtime substrate that turns agent execution into a reversible, Git-like trace so meta-agents can observe, fork, replay, and revert any run.
author: shepherd-agents
ossDate: '2026-06-24T17:26:46Z'
featured: false
status: tracked
---

## Overview

Shepherd is a runtime substrate that turns an agent's execution into a reversible, Git-like trace, so meta-agents can observe, fork, replay, and revert any run. It couples agent and environment in a copy-on-write fork roughly 5x faster than docker commit, with about 95% KV-cache reuse on replay. It is built for meta-agents that supervise, optimize, and train other agents.

## Key Features

- Reversible Git-like execution traces for agent runs.
- Copy-on-write fork of agent plus environment, ~5x faster than docker commit.
- ~95% KV-cache reuse on replay.
- Designed for meta-agent supervision, optimization, and training (MCTS/RL).

## Use Cases

- Supervise long-running agents with observe, fork, replay, and revert.
- Run tree-search and RL-style optimization over agent trajectories.
- Debug and audit agent behavior via reversible execution traces.

## Technical Details

- Execution is recorded as a reversible, Git-like trace: any point in an agent run can be forked, replayed, or reverted.
- Copy-on-write snapshots of agent plus environment make forking ~5x faster than docker commit.
- Replay achieves ~95% KV-cache reuse, making trajectory re-execution cheap enough for search.
- Positions itself as a substrate for meta-agent supervision and training, including MCTS and tree-based RL over trajectories.
