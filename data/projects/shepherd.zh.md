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
description: 运行时底座，将 Agent 执行变为可逆的类 Git 追踪，让元 Agent 可以观察、分叉、重放和回滚任意运行。
author: shepherd-agents
ossDate: '2026-06-24T17:26:46Z'
featured: false
status: tracked
---

## 简介

Shepherd 是一个运行时底座，将 Agent 的执行变成可逆的类 Git 追踪，让元 Agent（meta-agent）可以观察、分叉、重放和回滚任意一次运行。它以写时复制方式耦合 Agent 与环境，分叉速度约为 docker commit 的 5 倍，重放时 KV 缓存复用率约 95%。专为监督、优化和训练其他 Agent 的元 Agent 而构建。

## 主要特性

- Agent 运行的可逆类 Git 执行追踪。
- Agent 与环境写时复制分叉，约比 docker commit 快 5 倍。
- 重放时约 95% KV 缓存复用。
- 面向元 Agent 的监督、优化与训练（MCTS/RL）。

## 使用场景

- 通过观察、分叉、重放、回滚监督长时间运行的 Agent。
- 在 Agent 轨迹上运行树搜索与 RL 式优化。
- 通过可逆执行追踪调试和审计 Agent 行为。

## 技术特点

- 执行被记录为可逆的类 Git 追踪：Agent 运行的任意时点都可分叉、重放或回滚。
- Agent 与环境的写时复制快照，分叉速度约为 docker commit 的 5 倍。
- 重放实现约 95% KV 缓存复用，让轨迹重执行便宜到足以支撑搜索。
- 定位为元 Agent 监督与训练的底座，支持在轨迹上做 MCTS 与树式 RL。
