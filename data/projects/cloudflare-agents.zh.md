---
name: Cloudflare Agents
slug: cloudflare-agents
homepage: https://developers.cloudflare.com/agents/
repo: https://github.com/cloudflare/agents
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Dev Tools
description: Cloudflare Agents：Cloudflare 提供的开源边缘 AI Agent 框架，支持状态管理、实时通信与扩展集成。
logo: ''
author: Cloudflare
ossDate: '2025-01-29T23:14:04.000Z'
featured: false
status: tracked
---

## 简介

Cloudflare Agents 是一个面向边缘部署的开源 AI Agent 框架，旨在让智能代理具备持久化状态、实时通信和可扩展的集成能力。该项目提供完整的开发套件、示例和文档，支持在 Cloudflare Edge 上构建和运行具备记忆、事件驱动与外部系统交互能力的代理应用。

## 主要特性

- 状态管理与持久化：支持长期或会话级状态管理，便于实现记忆型代理。
- 实时通信：内建 WebSocket 支持，可实现实时交互场景。
- 丰富示例与文档：提供入门模版、Playground 和集成指南。
- 可扩展集成：支持与外部 API、WebRTC、邮件等服务对接。

## 使用场景

- 聊天机器人与客服自动化，具备会话记忆与上下文保持。
- 实时协作工具与交互式体验（例如多人协作或游戏化交互）。
- 边缘事件驱动的自动化任务与工作流（快速响应、低延时）。

## 技术特点

- 语言与实现：主要使用 TypeScript，模块化包结构，便于前端/后端协作。
- 部署：支持通过 `npm` 包与 Cloudflare 工具链快速部署（包含示例与 CLI 引导）。
- 可观测性：提供指南与工具以便跟踪代理运行状态与诊断。
