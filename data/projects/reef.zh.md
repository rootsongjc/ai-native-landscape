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
  面向持续自我改进 Agent 的开源基础设施：把 Agent 推理、反馈、学习与版本化交付串联起来，
  既可以用 Slime/SGLang 训练模型权重，也能进化 Agent 的 harness——提示词、规则与技能。
author: Human-Agent-Society
ossDate: '2026-08-31'
featured: false
status: tracked
---

## 简介

Reef 是面向"持续自我改进 Agent"的开源基础设施。它把 Agent 推理、反馈、学习与版本化交付接入同一套系统：既可以用 Slime 和 SGLang 训练模型权重，也可以根据用户与 Agent 的真实交互来改进 Agent 的 harness——提示词、规则与技能。与单独的推理引擎或 RL 训练框架不同，Reef 既承载线上流量、记录反馈，又产出更新、把通过评估的更新提交进版本历史，全程保持在线。

## 主要特性

- 两种学习面：借助 GPU 训练配方更新模型权重，或仅凭一个模型端点进化 Agent 的 harness（提示词、规则、技能组成的文件树）
- 四步学习循环——Serve、Observe、Grow、Commit——通过"回执"把反馈与记录的交互精确对应
- OpenAI 与 Anthropic 兼容的推理端点（`/v1/chat/completions`、`/v1/responses`、`/v1/messages`）；用 `x-reef-scenario` 请求头选择场景
- 版本化交付：候选更新先评估，胜者发布为 release，运行时无需重启即可加载通过的检查点
- 配方手册覆盖离线任务（SAO、SDPO、OPD、GEPA、Meta-Harness）、测试时训练的开放式探索（TTT-Discover）以及从使用中在线学习（OpenClaw-RL、ACE、ReasoningBank）

## 使用场景

- 在可训练模型与 GPU 栈支持下，从线上 Agent 的用户反馈中训练模型权重
- 仅凭模型端点，用带评分的任务反馈进化编码 Agent 的提示词、规则与技能，无需本地训练 GPU
- 借助测试时训练，求解有可度量目标的科学发现问题

## 技术特点

- Python 3.12+ 包（PyPI 上的 `reef-infra`）；每个学习循环由专门模块承担：Serve（`service/`、`runtime/`）、Observe（`storage/records`、`record2sample/`）、Grow（`recipe/`、`train/`）、Commit（`evaluation/`、`artifact/`、`surface/`）
- 推理响应携带 `x-reef-agent-record-id` 回执；反馈经 `/reef/report` 上报，包含评分、文本或结构化反馈及所评估的回执，`record2sample` 先判定记录是否合格，配方才会消费样本
- Harness 进化（`HarnessEvolutionRecipe`）把 harness 维护为一棵文本文件树：方法基于该步轨迹编辑其副本，评估用候选在真实任务上运行真实 Agent，胜者经 `GET /reef/harness` 发布；发布文件不含端点、密钥与模型信息，客户端可安全地写到 Agent 项目之外
- 工件与检查点存放在以 git-lfs 初始化的 Git 仓库中；检查点通过评估后，推理运行时将其加载为新 release，后续请求无需重启即用新版本
