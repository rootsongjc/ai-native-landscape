---
name: Unified AI System
slug: unified-ai-system
homepage: https://github.com/happy520ai/unified-ai-system
repo: https://github.com/happy520ai/unified-ai-system
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - MCP
  - Model Routing
  - Agent Orchestration
  - Self-hosted
description: Unified AI System 是一个终端优先的自托管 AI 网关，提供模型路由基础、受治理的智能体工作流、包含八个工具的 Codex MCP Server，以及无需凭据的 Docker 演示。
author: happy520ai
ossDate: '2026-04-27T15:45:42.000Z'
featured: false
status: tracked
---

## 项目概述

Unified AI System 是一个采用 Apache-2.0 许可证的 AI 控制平面，用于通过终端优先的网关统一组织模型、智能体、知识、工具、权限与执行证据。其公开预览默认使用确定性的本地假 Provider，让用户能够在启用任何外部模型之前，通过干净克隆或公共容器验证完整的本地调用路径。

## 主要特性

- 提供终端、HTTP API、共享 SDK 与 MCP 接口，默认不依赖浏览器 UI。
- 提供包含八个工具的 stdio MCP Server，覆盖网关健康、就绪状态、假 Provider 对话、知识、工作流与智能体团队状态。
- 提供显式 Provider 选择与模型路由基础，真实 Provider 调用必须主动启用。
- 将审批、权限、中断控制与执行证据纳入受治理的执行路径。
- 提供无需账号或 API Key 的一条命令 Docker 演示。

## 使用场景

- 在配置付费或外部模型 Provider 之前，评估本地 AI 网关架构。
- 将 Codex 或其他 MCP 客户端连接到网关，检查知识、工作流与智能体团队的就绪状态。
- 构建自托管控制平面，使模型路由与智能体执行保持可观察、可中断和可追责。

## 技术特点

- 采用 JavaScript、TypeScript 与 pnpm 的 Monorepo，以模块化网关服务和可复用 Package 组织代码。
- 提供 Apache-2.0 源码、公开的多架构容器与官方 MCP Registry 分发条目。
- 无凭据公开克隆验证会检查健康状态、对话、示例、MCP 工具发现、假 Provider 使用以及托管进程清理。
