---
name: Skyvern
slug: skyvern
homepage: https://www.skyvern.com
repo: https://github.com/skyvern-ai/skyvern
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Automation
  - MCP
description: Skyvern 是一个结合视觉能力与大语言模型的开源平台，用于自动化浏览器级工作流并支持本地服务与托管云。
logo: ''
author: Skyvern
ossDate: '2024-02-28T15:45:19Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Skyvern 是一个面向浏览器的开源自动化平台，结合视觉能力与多智能体协作，通过大语言模型（LLM）理解页面语义并驱动 Playwright 等浏览器引擎执行业务流程。项目既提供本地运行的服务与 UI，也有托管版 Skyvern Cloud，旨在把脆弱的 XPath/选择器式自动化替换为更健壮、可复现的智能体驱动工作流。

## 主要特性

- 视觉感知与 LLM 推理相结合，使得 Skyvern 能在未见过的网站上执行任务而无需事先编写选择器。
- 多智能体群协作，支持任务分解、并行执行与结果汇总。
- 丰富的工作流构件：表单填写、数据抽取、文件下载、验证与循环控制。
- 支持 Model Context Protocol（MCP, Model Context Protocol）以及多种 LLM 提供者集成。

## 使用场景

适用于需要在大量网站上执行重复性操作或跨站点爬取、表单填充、发票下载、竞品信息收集等场景；同时可用于构建 RPA 式的业务自动化、测试自动化与需要人机协同干预的任务流程。对于既要本地部署又需托管服务的团队，Skyvern 提供灵活选择。

## 技术特点

- 基于 Playwright 的浏览器驱动与可直播的视图用于调试与审计。
- 支持可插拔的 LLM 后端与环境变量配置，兼容 OpenAI、Anthropic、Gemini、Ollama 等。
- 提供 API 与 Python 客户端，可通过 schema 保持输出的结构化与可复现性。
- 开源核心采用 AGPL-3.0 许可，云端托管提供额外反作弊与 CAPTCHA 解决方案。
