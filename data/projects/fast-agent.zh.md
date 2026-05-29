---
name: fast-agent
slug: fast-agent
homepage: https://fast-agent.ai/
repo: https://github.com/evalstate/fast-agent
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - Workflow
description: fast-agent 是一个用于快速构建、测试和运行具备 MCP（Model-Connector-Provider）支持的智能 Agent 与工作流的开源 Python 框架。
logo: ''
author: evalstate
ossDate: '2025-01-18T20:39:51.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

fast-agent 是一个开源的 Python 框架，旨在用最少的样板代码快速定义、运行并调试具备 MCP（Model-Connector-Provider）支持的智能 Agent 与工作流。它支持多模型选择、并行与链式工作流、交互式调试以及与多种 LLM 提供者的集成。

## 主要特性

- 声明式 Agent 与工作流定义，易于版本控制与复用。
- 内置 MCP 支持，可与 Anthropic、OpenAI、Google、Ollama 等多家模型后端集成。
- 支持并行（fan-out/fan-in）、链式以及评估与优化（evaluator-optimizer）等常用工作流模式。
- 交互式运行与调试工具，便于在开发过程中微调提示与行为。

## 使用场景

- 快速构建自动化代理（例如信息抓取、摘要、社媒文案生成）。
- 组合多个模型或子代理构建复杂任务的编排系统。
- 在研究与工程中测试不同模型与 MCP Server 的交互行为。

## 技术特点

- 以文件为中心的配置与提示管理，便于 CI/CD 与代码审查。
- 多模态支持（图像、PDF 等资源），以及对 MCP 工具调用结果的友好处理。
- 可扩展的服务器配置与 OAuth 支持，适用于本地与远端 MCP 部署。
