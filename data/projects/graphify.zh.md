---
name: graphify
slug: graphify
homepage: https://www.graphify.com
repo: https://github.com/Graphify-Labs/graphify
license: Apache-2.0
category: rag-knowledge
subCategory: knowledge-graphs
tags:
  - Knowledge Graph
  - Code Analysis
  - RAG
  - Agent Skill
description: >-
  一个把任意代码库——连同文档、SQL schema、配置和 PDF——转化为可查询知识图谱的
  技能，支持 Claude Code、Cursor、Codex 和 Gemini CLI。本地确定性 AST 解析，每条边
  都有依据，不使用向量存储。
author: Graphify-Labs
ossDate: '2026-04-03'
featured: false
status: tracked
---

## 简介

Graphify 把整个项目（代码、文档、PDF、图片、视频）映射成一张知识图谱，让你以查询代替在文件间 grep。在 AI 编码助手里输入 `/graphify`，即可得到可交互的 graph.html、要点报告 GRAPH_REPORT.md，以及一份无需重读文件即可随时查询的 graph.json。它刻意不做向量索引——没有嵌入，只有一张可以遍历的真实图：提问、追溯路径、解释概念。

## 主要特性

- 代码、文档、SQL schema、配置和 PDF 统一映射进一张可查询的知识图谱
- 代码用 tree-sitter AST 本地解析——确定性、不依赖 LLM、数据不离开本机
- 每条边都标注 EXTRACTED（源码中显式存在）或 INFERRED（由 graphify 推断），可直接区分直接读取与推断
- God node 呈现连接最多的核心概念；Leiden 社区检测把图切分为若干子系统
- 查询命令：自然语言提问、任意两点间最短路径、单个概念的详细解释
- 支持 Claude Code、Cursor、Codex、Gemini CLI、GitHub Copilot 等 20 多种助手，覆盖 macOS、Linux 和 Windows

## 使用场景

- 通过查询图谱快速了解大型陌生代码库，代替逐个读文件
- 逐跳追溯系统中两个相距遥远的部分如何关联，每跳附带置信度
- 维护一份持久化的 graph.json，智能体查询它而无需重读仓库

## 技术特点

- 代码通过覆盖约 40 种语言的 tree-sitter AST 解析，确定性地解析跨文件的 `calls`、`imports`、`inherits`、`mixes_in` 边；文档、PDF、图片和视频则用助手自带的模型或配置的 API key 做语义处理
- 每条边携带置信度标签（EXTRACTED 与 INFERRED）；`graphify path A B` 给出最短路径，整条路径的置信度取最弱一跳，`graphify query` 针对自然语言问题返回限定范围的子图
- 用 Leiden 社区检测把图聚类为带无 LLM 标签的子系统；全程不用嵌入和向量存储——graph.json 被直接遍历，并带有 `schema_version` 和 `graphify_version` 字段以标识格式兼容性
- 以 `graphifyy` PyPI 包安装（Python 3.10+，经 uv 或 pipx）；`graphify install` 自动检测所用助手并注册技能
