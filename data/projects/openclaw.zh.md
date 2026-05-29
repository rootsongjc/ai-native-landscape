---
name: OpenClaw
slug: openclaw
homepage: https://openclaw.ai
repo: https://github.com/openclaw/openclaw
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Gateway
  - Agent Framework
  - Agents
  - Assistant
  - CLI
description: 在你自己的设备上运行的本地优先个人智能体，支持多渠道消息与可编排的技能。
logo: ''
author: OpenClaw
ossDate: '2025-11-24T10:16:47Z'
featured: false
status: tracked
---

## 详细介绍

OpenClaw 是一个面向个人的、本地优先的智能体平台，旨在让用户在自己的设备上运行始终在线的个人智能体。它通过网关（Gateway）作为控制平面，连接 CLI、macOS/iOS/Android 节点与多渠道（如 WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage 等），并提供可视化的 Canvas 与技能管理。[官网](https://openclaw.ai) 与[文档](https://docs.openclaw.ai) 提供安装与入门指导。

## 主要特性

- 本地优先：将智能体与数据保留在用户设备或自管主机上，降低外部依赖。
- 多渠道支持：原生集成主流消息渠道与 WebChat，支持分发与路由规则。
- 可编排的技能与工作空间：通过技能仓库与工作区管理复杂流程与自动化。
- 开发者友好：提供命令行工具与 SDK，支持从源码构建、调试与扩展。

## 使用场景

OpenClaw 适用于希望拥有私有、可控且始终在线助理的个人与小型团队场景，例如：个人生产力助手（日程、任务、快速查找）、多渠道通知与自动化、开发者的本地测试与集成环境，以及需要低延迟语音/Canvas 交互的场景。安装引导会一步配置 Gateway 与通道，使上手流程更平滑。

## 技术特点

- 网关架构：Gateway 提供 WebSocket 控制面，统一会话、路由、工具与事件管理，便于运行时扩展与远程接入。
- 多节点支持：CLI、macOS 菜单栏应用与移动节点通过 RPC 模式协同，支持设备本地动作调用（如 `system.run`）。
- 模型与回退：支持多模型接入与凭据轮换，并提供模型失败切换（model failover）策略以提升稳健性。
- 安全与护栏：内置 DM 访问策略、权限控制与安全指南，帮助降低误用风险。
