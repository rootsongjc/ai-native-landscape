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

## 详细介绍

AgentField 将智能体（Agent，项目术语称“智能体”）的生命周期、身份与通信抽象为云原生对象，旨在把多智能体应用用可扩展、可观测且具身份感知的方式运行在集群上。它整合了调度、认证、监控与横向扩缩能力，使开发者可以像管理微服务一样部署与运维智能体。

## 主要特性

- 基于 Kubernetes 的调度与运行时集成，支持原生扩缩。
- 身份感知与认证机制，便于多智能体安全通信与权限管理。
- 内置可观测性：日志、指标与跟踪数据用于行为分析与故障排查。
- 面向微服务的生命周期管理，支持滚动更新与回滚。

## 使用场景

- 将多智能体工作流部署为可扩展的后端服务，适用于任务分派、自治运营与复杂工作流编排。
- 在需要严格身份与审计的场景（多租户、企业级应用）中保证智能体间安全通信。
- 结合检索增强生成（RAG）与外部模型服务，为垂直领域提供长期运行的智能体服务。

## 技术特点

- 采用 Kubernetes 原生扩展与控制器模式，降低学习与运维门槛。
- 语言与模型无关的运行时设计，支持以 API 调用外部 LLM 与推理服务。
- 开箱即用的观测与认证接入点，便于与现有云原生监控与安全工具链集成。
