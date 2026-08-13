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
description: 开源的 Agent 化代码审查引擎，将每个 PR 转化为任务专属的审查计划并派出专注的审查 Agent。
author: Agent-Field
ossDate: '2026-03-11T15:35:35Z'
featured: false
status: tracked
---

## 简介

PR-AF 是基于 AgentField 构建的开源 Agent 化代码审查系统，在 Martian Code-Review-Bench 上排名第一。它不做浅层的 diff 摘要，而是为每个 PR 构建任务专属的审查计划，派出专注的审查 Agent，将发现的问题锚定在代码证据上，并对结果自我质询。支持模型灵活搭配，常规 PR 用便宜模型，重要审查用前沿模型。

## 主要特性

- 任务专属审查计划，派出专注的审查 Agent。
- Code-Review-Bench 开源审查器黄金召回率第一（GLM-5.2 下 0.706）。
- Docker 自托管 API，可通过 CLI、curl、CI 或其他 Agent 触发审查。
- 模型灵活路由，从便宜模型到 Opus 级前沿模型。

## 使用场景

- 在 CI 中对 Pull Request 进行深度自动化代码审查。
- 使用开源模型构建自托管审查门禁，满足合规要求。
- 基于代码证据的 Agent 化审查智能。

## 技术特点

- 先规划后审查的流水线：每个 PR 生成审查计划 → 派出专注审查 Agent → 锚定代码证据 → 自我质询验证结果。
- 按 PR 重要性路由模型：常规审查用便宜模型，开源模型 CI 门禁用 GLM-5.2，重大 PR 用 Opus 级前沿模型。
- Docker 自托管 API，可通过 CLI、curl、CI 或其他 Agent 触发审查。
- 基准可复现：公开每个 PR 的评判结论与复现脚本。
