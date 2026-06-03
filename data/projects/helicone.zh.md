---
name: Helicone
slug: helicone
homepage: null
repo: https://github.com/helicone/helicone
license: Unknown
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observation
description: Helicone 是一款面向 LLM 的开源可观测与分析平台，提供请求追踪、指标、提示管理与成本/延迟分析等功能，便于调试、评估与优化 AI 系统。
author: Helicone
ossDate: '2023-01-31T22:34:44.000Z'
featured: false
status: tracked
---

## 简介

Helicone 是一款面向 LLM 的开源可观测与分析平台（LLM observability platform），通过一行代码即可记录和追踪请求、会话与 trace，提供可视化调试工具、指标与成本分析，帮助开发者和运维团队提升模型调用的可观察性与质量。

## 主要特性

- 一行集成：支持 OpenAI、Anthropic、Gemini 等多家提供商与主流框架的一键接入。
- 可视化追踪：追踪请求与会话，方便回放与问题定位。
- 指标与分析：统计成本、延迟与质量指标，并支持导出到 PostHog 等平台。
- Prompt 管理：对提示进行版本控制与实验设计，支持 A/B 测试与评估。
- 多部署选项：提供 Helicone Cloud 与自托管（Docker/Helm）方案，适配不同需求。

## 使用场景

- 开发与调试：实时观察请求和上下文，快速定位问题并验证修复效果。
- 成本优化：分析不同模型和调用策略的成本/性能，指导选型与限流策略。
- 质量评估：对提示与模型效果进行对比评测与自动化评估。
- 合规审计：保存会话与 trace 以满足审计与治理需求。

## 技术特点

- 多语言 SDK：支持 JavaScript/TypeScript、Python 等 SDK 与示例工程。
- 分布式分析：利用 ClickHouse 等组件进行大规模日志分析与聚合。
- 云原生支持：提供 Docker Compose 和 Helm Chart，便于在 Kubernetes 上部署。
