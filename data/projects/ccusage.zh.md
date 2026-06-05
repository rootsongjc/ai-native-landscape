---
name: ccusage
slug: ccusage
homepage: https://ccusage.com/
repo: https://github.com/ryoppippi/ccusage
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Token Usage
  - Cost Analysis
  - Coding Agent
description: 一款用于分析 Claude Code、Codex、Gemini CLI 等编程智能体 CLI 工具的 Token 用量和成本的命令行工具。
author: ryoppippi
ossDate: '2025-05-29'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

ccusage 从本地数据中读取编程智能体 CLI 的使用数据，生成按日、周、月和会话维度的 Token 用量与成本报告。支持 Claude Code、Codex、OpenCode、Gemini CLI 等 15+ 种编程智能体数据源。

## 主要特性

- 支持 15+ 种编程智能体数据源（Claude Code、Codex、OpenCode、Gemini CLI 等）
- 按日、周、月和会话维度的使用报告
- 基于本地数据的 Token 用量和成本分析
- 无需外部 API，直接读取本地文件
- 支持 Claude Code 5 小时计费窗口分析

## 使用场景

- 跟踪和分析多种编程智能体工具的 Token 消耗
- 监控 AI 编程助手的每日或每周支出
- 对比不同编程智能体的使用模式
- 生成团队计费和预算的成本报告

## 技术特点

- 使用 TypeScript/JavaScript 构建，通过 npm 分发
- 支持通过 bunx、npx 或 pnpm 直接运行，无需全局安装
- 解析各编程智能体的本地 JSONL 数据文件
