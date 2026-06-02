---
name: AgentField
slug: agentfield
homepage: http://www.agentfield.ai
repo: https://github.com/agent-field/agentfield
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Automation
  - Orchestration
description: 将 Kubernetes 的理念带入智能体运行时，提供可扩展、可观测且具身份感知的智能体微服务平台。
logo: ''
author: Agent Field
ossDate: '2025-11-05T02:04:44Z'
featured: false
status: tracked
---

## 简介

AgentField 支持像构建 API 和微服务一样构建、运行与扩展 AI 智能体，从第一天起即具备可观测、可审计与身份感知能力。它将智能体的生命周期、身份与通信抽象为云原生对象，使多智能体应用能够以可扩展的方式运行在集群上。

## 主要特性

- 基于 Kubernetes 的调度与运行时集成，内置横向扩缩支持。
- 身份感知与认证机制，保障多智能体间安全通信与细粒度访问控制。
- 内置可观测性，提供日志、指标与追踪数据用于行为分析与故障排查。

## 使用场景

- 将多智能体工作流部署为可扩展的后端服务，用于任务分派与复杂工作流编排。
- 在多租户或企业环境中确保智能体间安全通信与审计合规。
- 结合 RAG 与外部模型服务，为垂直领域提供长期运行的智能体服务。

## 技术特点

- 采用 Kubernetes 原生扩展与控制器模式，降低运维门槛。
- 语言与模型无关的运行时设计，支持通过 API 调用外部 LLM 与推理服务。
- 提供与现有云原生监控和安全工具链兼容的观测与认证接入点。
