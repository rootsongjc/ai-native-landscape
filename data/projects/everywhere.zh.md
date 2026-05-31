---
name: Everywhere
slug: everywhere
homepage: https://everywhere.sylinko.com
repo: https://github.com/dearva/everywhere
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
description: 一款面向桌面的上下文感知 AI 助手，集成多种本地及远端 LLM 与 MCP 工具以实现智能化交互与自动化。
logo: ''
author: DearVa
ossDate: '2025-04-23T08:19:33.000Z'
featured: false
status: tracked
---

## 详细介绍

Everywhere 是一个桌面级的上下文感知 AI 助手，旨在无缝整合多种 LLM 与 MCP 工具，提供即时、智能的交互与自动化功能。该项目支持本地模型与远端服务，通过插件化的工具链在用户桌面环境中提供搜索、摘要、任务自动化与 UI 自动化能力，同时注重隐私与可扩展性。

## 主要特性

- 多模型支持：同时集成 Ollama、OpenAI 等模型提供者，实现灵活的本地/远端模型调用。
- MCP 工具集成：支持工具调用与插件机制，便于扩展检索、浏览器自动化和外部服务接入。
- 桌面集成与 UI 自动化：直接与操作系统界面交互，支持自动化流程与上下文驱动的助手动作。

## 使用场景

- 提高个人与团队的研究效率：在桌面环境中快速检索、摘要和生成报告。
- 自动化日常任务：通过 UI 自动化脚本实现重复性工作的自动化处理。
- 受限或离线环境下的本地模型使用：可在本地部署模型以满足隐私与合规需求。

## 技术特点

- 开源实现，采用 C# 与跨平台 UI 框架（如 Avalonia），支持多平台桌面部署。
- 使用 MCP 与代理式设计模式，将任务分解为可调用的工具与检索子任务，便于扩展与测试。
- 提供 CI/CD 与社区插件生态，支持持续集成与多模型互操作。
