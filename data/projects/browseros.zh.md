---
name: BrowserOS
slug: browseros
homepage: null
repo: https://github.com/browseros-ai/browseros
license: Unknown
category: coding-devtools
subCategory: browser-automation
tags:
  - AI Agent
  - Browser
  - Chromium
description: 开源的 Agentic 浏览器，隐私优先，可在本地运行 AI Agent，是 ChatGPT Atlas / Perplexity 等在线服务的隐私优先替代方案。
logo: ''
author: browseros-ai
ossDate: '2025-05-18T16:23:54Z'
featured: false
status: tracked
---

BrowserOS 是一个面向未来的开源浏览器项目，它基于 Chromium 并内置对 AI Agent 的本地执行与编排能力，主打隐私优先和可扩展性。项目目标是把浏览器从被动工具提升为主动的智能助手，让用户在本地运行 AI、自动化重复任务，而不把浏览数据泄露给第三方服务。

## 详细简介

BrowserOS 将 Chromium 的浏览体验与可编排的 AI Agent 能力结合起来。它允许用户连接自己的 AI 提供商（例如 OpenAI / Anthropic），或使用本地模型（如 Ollama、LMStudio），从而在本地执行自动化任务和智能助手功能。项目强调隐私：用户的数据默认保存在本地，API 密钥由用户控制。

## 主要特性

- 隐私优先：支持自带 API Key 与本地模型，浏览历史与数据保留在本地。
- Agentic 浏览体验：内置可编排 AI agents，支持自动化常见浏览器任务（填写表单、抓取信息、摘要页面等）。
- 多平台支持：提供 macOS、Windows、Linux 的安装包（包括 dmg、exe、AppImage、deb）。
- 社区驱动与开源：在 AGPL-3.0 许可下开源，社区可参与开发与扩展。
- 扩展性：与外部 MCP 服务集成，支持在服务器或 CLI 环境中远程控制浏览器实例。

## 使用场景

- 自动化信息采集：通过 agent 批量抓取与清洗网页数据。
- 智能助理与工作流：在浏览器中执行复杂任务（如填写长表单、比较商品、整理收藏）。
- 隐私敏感场景：企业或个人希望避免将浏览数据发送到第三方时的替代方案。
- 开发者与研究：作为本地运行 AI agent 的研究平台或原型验证环境。

## 技术亮点

- 基于 Chromium：兼容大多数 Web 特性与扩展生态，降低兼容性成本。
- 本地模型集成：支持 Ollama/LMStudio 等本地模型方案，允许离线/本地推理。
- Agent 编排：内置 agent 框架支持任务拆分、状态管理与跨页面工作流程。
- 隐私设计：把密钥与个人数据存储在本地，提供明确的隐私边界。

## 安装与快速开始

1. 前往 Releases 或官方网站下载对应平台的安装包。
2. 启动 BrowserOS，导入（可选）Chrome 数据以保留书签与扩展。
3. 在设置中配置你的 AI 提供商或本地模型（如 Ollama）。
4. 尝试内置 demo agent 或在社区分享/安装自定义 agent。

## 参考与资源

- 官方仓库：[BrowserOS](https://github.com/browseros-ai/BrowserOS)
- 官网/下载：[BrowserOS 官方网站](https://BrowserOS.com)
- 文档与示例：仓库 README 与 docs 目录（参见仓库中的 README 和 docs/ 子目录）

## 总结

BrowserOS 是一个面向未来的浏览器项目，将 AI agent 的能力带入日常浏览场景，适合关注隐私、希望在本地运行智能代理的用户与开发者。它同时也是一个活跃的开源社区项目，欢迎贡献与讨论。
