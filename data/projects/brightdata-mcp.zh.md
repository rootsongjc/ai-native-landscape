---
name: Bright Data MCP
slug: brightdata-mcp
homepage: https://brightdata.com/
repo: https://github.com/brightdata/brightdata-mcp
license: MIT
category: rag-knowledge
subCategory: data-connectors
tags:
  - MCP
  - Web Scraping
  - Data Connector
  - Browser Automation
description: 提供公网访问一站式方案的 MCP 服务器，为 AI Agent 提供爬取、抓取和结构化数据提取能力。
author: brightdata
ossDate: '2025-04-15T10:55:56Z'
featured: false
status: tracked
---

## 简介

Bright Data MCP 是一个 Model Context Protocol 服务器，为 AI Agent 提供公网访问的一站式方案。它将网页爬取、抓取、反爬数据处理和结构化数据提取以 MCP 工具形式暴露，让 LLM Agent 无需自定义集成即可获取实时网页数据。

## 主要特性

- 公网数据访问的一站式 MCP 服务器。
- 网页爬取、抓取与结构化数据提取工具。
- 内置 Bright Data 代理网络的反爬检测处理能力。
- 兼容任何支持 MCP 的客户端或 Agent。

## 使用场景

- 让 AI Agent 实时访问公开网页数据。
- 面向调研与数据充实工作流的结构化数据提取。
- 将网页数据接入 RAG 与 Agent 管道。

## 技术特点

- 实现 Model Context Protocol，任何支持 MCP 的客户端（Claude、Cursor、自定义 Agent）都可直接调用网页访问工具，无需定制集成。
- 反爬处理委托给 Bright Data 的代理与解锁网络，Agent 可抓取屏蔽普通 HTTP 客户端的站点。
- 返回结构化、可直接提取的数据而非原始 HTML，适合 LLM 直接消费。
