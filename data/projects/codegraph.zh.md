---
name: CodeGraph
slug: codegraph
homepage: null
repo: https://github.com/colbymchenry/codegraph
license: Unknown
category: rag-knowledge
subCategory: knowledge-graphs
tags:
  - AI Agent
  - Dev Tools
  - Knowledge Graph
description: 为 AI 编码智能体提供预索引代码知识图谱的工具，支持 Claude Code、Codex、Cursor 和 OpenCode，100% 本地运行。
logo: ''
author: colbymchenry
ossDate: '2026-01-18T00:00:00.000Z'
featured: false
status: tracked
---

CodeGraph 为 AI 编码智能体（Claude Code、Cursor、Codex CLI、OpenCode）构建本地代码知识图谱，让 Agent 一次工具调用即可获取入口点、关联符号和代码片段，无需昂贵的探索式扫描。基准测试显示平均减少 92% 工具调用、加速 71%。

## 详细介绍

项目基于 tree-sitter 解析源代码为 AST，通过语言特定的查询提取节点（函数、类、方法）和边（调用、导入、继承、实现），存储在本地 SQLite 数据库（`.codegraph/codegraph.db`）中，并配备 FTS5 全文搜索。MCP 服务器通过原生 OS 文件事件监听项目变更，自动增量同步。

支持 19+ 编程语言和 13 个 Web 框架的路由识别，包括 Django、Flask、FastAPI、Express、Laravel、Rails、Spring、Gin 等。

## 主要特性

- **智能上下文构建**：一次工具调用返回入口点、关联符号和代码片段
- **全文搜索**：基于 SQLite FTS5 的即时代码名称搜索
- **影响分析**：追踪调用者、被调用者和任意符号的完整影响范围
- **自动同步**：文件监听器使用原生 OS 事件，防抖增量同步，零配置
- **19+ 语言支持**：TypeScript、JavaScript、Python、Go、Rust、Java、C#、PHP、Ruby、C/C++、Swift、Kotlin、Dart 等
- **框架路由识别**：识别 13 个 Web 框架的路由文件并链接 URL 到处理器
- **100% 本地**：无数据离开本机，无需 API Key，无需外部服务
- **多智能体支持**：Claude Code、Cursor、Codex CLI、OpenCode

## 使用场景

- **大型代码库导航**：在百万行级项目中快速定位入口点和调用链
- **变更影响评估**：修改代码前追踪完整影响范围，避免回归
- **AI 智能体加速**：减少 Agent 探索次数，降低 Token 消耗和延迟
- **代码审查辅助**：快速理解 PR 涉及的代码结构和依赖关系

## 技术特点

- **语言**：TypeScript
- **存储**：本地 SQLite + FTS5 全文搜索
- **解析引擎**：tree-sitter 多语言 AST 解析
- **协议**：MCP（Model Context Protocol）
- **Node.js 要求**：>= 18.0.0
- **MCP 工具**：`codegraph_search`、`codegraph_context`、`codegraph_callers`、`codegraph_callees`、`codegraph_impact` 等 8 个工具
- **License**：MIT
