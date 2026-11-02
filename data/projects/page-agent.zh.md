---
name: page-agent
slug: page-agent
homepage: https://alibaba.github.io/page-agent/
repo: https://github.com/alibaba/page-agent
license: MIT
category: coding-devtools
subCategory: browser-automation
tags:
  - GUI Agent
  - Browser Automation
  - JavaScript
  - MCP
description: 阿里巴巴出品的页面内 JavaScript GUI 智能体。一行脚本即可让任意网页拥有自己的 AI 智能体，通过基于文本的 DOM 操作以自然语言控制界面——无需截图，也无需多模态 LLM。
author: alibaba
ossDate: '2025-09-23'
featured: false
status: tracked
---

## 简介

Page Agent 是"生活在网页里"的 GUI 智能体：一行脚本即可让任意页面拥有自己的 AI 智能体，用自然语言控制（`await agent.execute('Click the login button')`）。与服务器端浏览器自动化不同，一切都发生在页面本身——不需要浏览器扩展、不需要 Python、不需要 headless 浏览器。它通过文本而非截图操作 DOM，因此可以配合包括本地部署在内的主流纯文本模型使用，可选的 Chrome 扩展还能将其扩展到跨页面的多页任务。

## 主要特性

- 通过 CDN 脚本标签一行集成，或 `npm install page-agent` 以编程方式使用
- 基于文本的 DOM 操作——无截图、无多模态 LLM、无特殊权限要求
- 自带模型（Bring your own LLM）：通过 model、baseURL、apiKey 配置主流模型，包括本地部署
- 可选 Chrome 扩展支持跨标签页的多页任务
- MCP Server（Beta）可从外部客户端控制智能体
- 体积小：min+gzip 后的包仅以 Zod 作为 peer dependency

## 使用场景

- 几行代码就在产品中上线 SaaS AI 副驾，无需重写后端
- 智能表单填充——把 ERP、CRM、管理后台里 20 次点击的流程变成一句话
- 无障碍：通过自然语言、语音命令和屏幕阅读器操作任意 Web 应用
- 通过 Chrome 扩展完成跨标签页的多页智能体工作流，或从 MCP 客户端驱动页面

## 技术特点

- TypeScript 库发布到 npm，并提供 IIFE bundle 供 CDN 一行引入；智能体循环完全在浏览器页面上下文中运行，而非服务器端
- 交互基于文本：模型读取序列化的 DOM 表示并对其下发操作，从而免去截图、视觉模型和额外浏览器权限
- 模型接入为自带模式，通过 OpenAI 兼容的 baseURL/apiKey 配置（例如经 DashScope 兼容模式接入 Qwen），也支持本地部署模型
- 免费演示 CDN 构建内置测试 LLM 供评估；`?autoInit=false` 可禁用自动实例化，改用 `new window.PageAgent(...)` 接入自己的模型
- 基于 browser-use 项目的工作发展而来，定位为客户端 Web 增强而非服务器端自动化；可选扩展与 MCP 服务器将其能力延伸到单页之外
