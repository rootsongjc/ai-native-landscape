---
name: GitNexus
slug: gitnexus
homepage: https://gitnexus.vercel.app
repo: https://github.com/abhigyanpatwari/gitnexus
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Dev Tools
  - Knowledge Graph
  - MCP
description: GitNexus 是一个完全在浏览器中运行的客户端知识图谱构建工具，支持将任意代码仓库索引为交互式知识图谱，内置 Graph RAG Agent，可为 AI 编程助手提供深层代码架构感知能力。
logo: ''
author: Abhigyan Patwari
ossDate: '2025-08-02T23:20:31Z'
featured: false
status: tracked
---

## 详细介绍

GitNexus 是一个零服务器代码智能引擎，能够将任意代码仓库索引为完整的知识图谱，追踪每个依赖关系、调用链、功能集群和执行流程，并通过 MCP 协议向 AI 编程助手（如 Cursor、Claude Code、Codex 等）暴露深层代码架构感知能力。其 Web UI 版本完全在浏览器中运行，无需安装任何服务端组件，代码不会离开本地环境。GitNexus 的核心理念是在索引阶段预计算关系智能，使工具调用一次即可返回完整上下文，而非依赖 LLM 进行多轮图查询。

## 主要特性

- 零服务器 Web UI：完全在浏览器中运行（Tree-sitter WASM + LadybugDB WASM），代码不离开本地，支持拖拽 GitHub 仓库或 ZIP 文件直接生成知识图谱。
- CLI + MCP：本地索引仓库并通过 MCP 协议为 AI Agent 提供 16 个工具，包括影响分析、流程分组搜索、360 度符号视图、变更检测和多文件重命名等。
- 多语言支持：支持 TypeScript、JavaScript、Python、Java、Kotlin、C#、Go、Rust、PHP、Ruby、Swift、C、C++、Dart 共 14 种语言的解析、类型推断与继承关系解析。
- 多仓库架构：全局注册表使一个 MCP Server 可同时服务多个已索引仓库，无需逐项目配置。
- Graph RAG Agent：内置基于 LangChain ReAct 的智能体，支持在浏览器中进行对话式代码探索。
- Wiki 生成：可从知识图谱自动生成 LLM 驱动的代码文档，支持自定义模型和 API 提供商。
- 4 个自动安装的 Agent Skills：代码探索、调试追踪、影响分析、重构规划，以及基于 Leiden 社区检测的仓库专属技能生成。

## 使用场景

- 为 Cursor、Claude Code、Codex 等 AI 编程助手提供深层代码架构感知，避免盲编辑和遗漏依赖。
- 在提交代码前进行变更影响分析，识别可能被破坏的调用链和功能模块。
- 快速探索陌生代码仓库，通过交互式知识图谱理解架构和执行流程。
- 多仓库场景下的跨服务契约提取与执行流程追踪。

## 技术特点

- 基于 Tree-sitter AST 的多阶段索引流水线：结构映射、符号提取、跨文件引用解析、社区聚类、执行流程追踪和混合搜索索引构建。
- 采用 LadybugDB 嵌入式图数据库（支持向量检索），CLI 使用原生版本，Web UI 使用 WASM 版本。
- 混合搜索结合 BM25 关键词检索 + 语义向量检索 + RRF 融合排序。
- 前端使用 React 18 + TypeScript + Vite + Tailwind v4，图可视化基于 Sigma.js + Graphology（WebGL）。
- 开源协议为 PolyForm Noncommercial 1.0.0。
