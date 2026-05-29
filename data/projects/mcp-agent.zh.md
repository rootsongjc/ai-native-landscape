---
name: mcp-agent
slug: mcp-agent
homepage: null
repo: https://github.com/lastmile-ai/mcp-agent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Workflow
description: 基于 Model Context Protocol 的轻量级可组合代理框架，提供多种工作流模式以快速构建可编排的智能体应用。
logo: ''
author: lastmile-ai
ossDate: '2024-12-18T01:55:10.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

mcp-agent 是一个以 Model Context Protocol (MCP) 为中心的轻量可组合代理框架，旨在通过标准化的服务器抽象和工作流模式让开发者快速搭建多代理、多工具互操作的应用。

## 主要特性

- 内置多种工作流模式（Parallel、Router、Evaluator-Optimizer、Swarm 等）。
- 自动管理 MCP 服务器连接与工具调用，支持持久化与信号控制。
- 丰富的示例与集成（Streamlit、Claude Desktop、Marimo、Python 脚本等）。

## 使用场景

- 构建多代理协作（Swarm/Parallel）的生产级 Agent 应用。
- 将现有工具通过 MCP 接入到 LLM 工作流中进行编排与治理。
- 在 CI/CD 或研究中复用工作流模式以做评估与自动化任务。

## 技术特点

- 与 MCP 协议无缝集成，提供 `MCPApp`、`Agent`、`AugmentedLLM` 等核心组件。
- 支持自托管与示例 UI，兼容主流 Python 工具链与部署方式。
- 开源许可（Apache-2.0），社区活跃，示例和文档齐全。
