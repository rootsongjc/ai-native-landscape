---
name: Scrapling
slug: scrapling
homepage: 'https://scrapling.readthedocs.io/en/latest/'
repo: https://github.com/d4vinci/Scrapling
license: BSD-3-Clause
category: coding-devtools
subCategory: browser-automation
tags:
  - Web Scraping
  - Browser Automation
  - MCP
  - AI
  - Python
  - Stealth
description: 自适应 Web 爬虫框架，具备 AI 智能元素选择、反检测隐身能力和 MCP Server 支持，可无缝集成到 AI Agent 工作流中。
author: D4Vinci
ossDate: '2024-10-13'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Scrapling 是一个高性能 Python Web 爬虫框架，利用 AI 自适应元素选择技术实现稳健的网页数据提取。内置隐身模式可绕过反爬检测，同时提供 MCP Server 支持，是 AI Agent 获取网页数据的理想工具链。

## 主要特性

- AI 自适应元素选择，通过智能相似度匹配抵抗页面结构变更
- 内置隐身模式，模拟真实浏览器指纹绕过反机器人检测
- MCP Server 集成，AI Agent 可直接调用爬取能力作为工具
- 高性能抓取，支持 Playwright、Camoufox 及真实浏览器渲染
- 智能 XPath/CSS 选择器生成，具备自动回退策略

## 使用场景

- AI Agent 网页数据提取和浏览器自动化工作流
- 适应目标网站变更的弹性生产级爬取
- 反检测数据采集，突破受保护网站限制
- 构建 MCP 驱动的 Agent 网页交互工具

## 技术特点

- Python 实现，支持多种浏览器后端（Playwright、Camoufox）
- 采用 Levenshtein 距离和自适应算法实现跨页面变化的元素匹配
- 同时提供独立库和 MCP Server 两种使用模式
