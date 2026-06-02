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
status: tracked
---

## 简介

Skyvern 是一个开源的浏览器自动化平台，通过计算机视觉和大语言模型理解网页语义并驱动浏览器操作，无需依赖脆弱的 CSS 选择器或 XPath。它同时提供可自部署的本地服务和托管云服务，帮助团队构建能在陌生网站上通用的健壮智能体工作流。

## 主要特性

Skyvern 将视觉感知与 LLM 推理相结合，无需预定义选择器即可与任意网站交互，并通过多智能体群协作实现复杂任务的分解、并行执行和结果聚合。它内置表单填写、数据抽取、文件下载和验证循环等工作流构件，支持 Model Context Protocol 并兼容主流 LLM 提供商。

## 使用场景

Skyvern 擅长处理大规模浏览器自动化任务，如跨厂商门户批量下载发票、自动投递职位申请、竞品价格监控和 RPA 式业务流程自动化。它非常适合需要可复现、可审计自动化的团队，支持本地部署和 Skyvern Cloud 托管服务两种运行方式。

## 技术特点

平台通过 Playwright 驱动浏览器，支持实时视频流调试和审计追踪。它提供可插拔的 LLM 后端，兼容 OpenAI、Anthropic、Gemini 和 Ollama，并通过 schema 驱动的 API 确保输出结构化和可复现。开源核心采用 AGPL-3.0 许可，托管云服务额外提供反机器人绕过、代理轮换和验证码解决方案。
