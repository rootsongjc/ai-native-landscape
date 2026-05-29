---
name: Blades
slug: blades
homepage: null
repo: https://github.com/go-kratos/blades
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Framework
description: 一个用 Go 编写的多模态 AI Agent 框架，提供模型、工具、记忆与中间件的可插拔组件。
logo: ''
author: go-kratos
ossDate: '2025-09-15T16:43:22.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Blades 是一个用 Go 语言实现的多模态 AI Agent 框架，设计上强调高内聚低耦合与可扩展性。它通过统一的接口与可插拔组件（ModelProvider、Tool、Memory、Middleware 等）帮助开发者快速搭建多轮对话、链式推理与结构化输出的智能体应用。

## 主要特性

- Go 原生设计：遵循 Go 语言习惯，接口与实现风格对 Go 开发者友好。
- 可插拔模型提供者：通过 ModelProvider 适配不同 LLM 服务，实现灵活切换与集成。
- 中间件生态：借鉴 Kratos 的中间件设计，便于接入日志、监控、守护等功能。
- 支持同步与流式执行：提供 Run 与 RunStream 接口，适配实时和非实时场景。

## 使用场景

- 构建企业级聊天机器人与多轮问答系统。
- 设计链式工作流与多步骤推理的智能应用。
- 将外部 API、数据库等能力封装为工具供智能体调用。
- 在需要高性能、可部署的 Go 环境中集成 LLM 能力。

## 技术特点

- 统一的 Runner 抽象，支持 Agent、Chain、ModelProvider 等组件的组合与复用。
- 内置 InMemory 等记忆实现，支持按会话管理上下文信息并可扩展至持久化存储。
- 明确的输入模式与 schema（如 Tool 的 InputSchema），利于结构化调用与安全控制。
- 丰富示例与文档，仓库包含 examples、docs 以及多种扩展目录。
