---
name: OpenLIT
slug: openlit
homepage: https://docs.openlit.io/
repo: https://github.com/openlit/openlit
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Dev Tools
description: OpenLIT 是一个面向 AI 工程的开源平台，提供 LLM 可观测性、Prompt 管理、评估与 Guardrails 等工具与 SDK。
logo: ''
author: OpenLIT
ossDate: '2024-01-23T17:40:59.000Z'
featured: false
status: tracked
---

OpenLIT 是一个为 AI 工程（尤其是 LLM 应用）设计的开源平台，汇集了可观测性（OpenTelemetry）、Prompt 管理、评估（Evals）与密钥/机密管理等组件，支持快速从实验迁移到生产。

## 主要特性

- 可观测性与监控：OpenTelemetry 原生 SDK 与仪表盘，跟踪 LLM、向量数据库与 GPU 的运行指标。
- Prompt 管理：集中管理与版本控制 prompts 与模板。
- 评估与 Guardrails：内置评估流程与运行时护栏，便于质量与安全控制。

## 使用场景

- 在开发和生产环境中为 LLM 应用提供可观测性与成本监控。
- 管理 prompt 生命周期并统一测试与评估模型响应质量。
- 将 LLM 应用集成到现有监控与治理流程中。

## 技术特点

- 多语言 SDK（Python、TypeScript），可通过 Docker 或 Kubernetes 部署。
- 提供丰富的样例、可视化仪表盘与安装指南（文档位于 docs.openlit.io）。
- Apache-2.0 授权，社区活跃且更新频繁。
