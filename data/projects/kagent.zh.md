---
name: kagent
slug: kagent
homepage: https://kagent.dev/
repo: https://github.com/kagent-dev/kagent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Dev Tools
  - MCP
description: Kubernetes 原生的 Agent 框架，用于在 K8s 上声明式创建、运行与管理 AI agent。
author: Solo.o
ossDate: '2025-01-21T17:03:23.000Z'
featured: false
status: tracked
---

## 简介

kagent 是一个 Kubernetes 原生的 AI agent 框架，通过 CRD 将 agent、工具与模型配置纳入 K8s 管理，提供控制器、引擎、UI 与 CLI，便于在集群中部署、观测和调试 agent。

## 主要特性

- Kubernetes 原生 CRD（Agent、ToolServer 等）
- 多 LLM provider 支持（OpenAI、Azure、Anthropic、Vertex、Ollama 等）
- 内置 MCP 工具与 memory、支持 OpenTelemetry 观测

## 使用场景

- 在 K8s 集群中部署可管理的对话/代理服务
- 将外部工具以 MCP 形式接入 agent
- 在 CI/CD 或自动化工作流中运行 agent 驱动任务

## 技术特点

- 声明式资源管理、可热更新和可观测性集成
- 提供 UI 与 CLI，支持本地开发与集群部署
- 易扩展的插件与工具生态
