---
name: code-review-graph
slug: code-review-graph
homepage: https://code-review-graph.com
repo: https://github.com/tirth8205/code-review-graph
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Code Review
  - Knowledge Graph
  - Static Analysis
description: 本地优先的代码智能图谱，通过 MCP 和 CLI 提供服务。用 Tree-sitter 构建代码库的持久化结构地图并增量更新，让 AI 编码工具只读取变更真正涉及的文件。
author: tirth8205
ossDate: '2026-02-26'
featured: false
status: tracked
---

## 简介

code-review-graph 为代码库构建本地知识图谱，让 AI 编码工具获得精确的评审上下文，而不是反复重读仓库的大部分内容。它用 Tree-sitter 将代码解析为 AST，把函数、类、导入及其关系存储为图，通过 hooks 与 watch 模式增量更新，并经 MCP 提供紧凑上下文。评审一次变更时只需查询"爆炸半径"——所有可能受影响的调用方、依赖方和测试——然后只读那个最小文件集合。

## 主要特性

- 一条命令安装：自动检测已安装的 AI 编码工具，并为每个工具配置 MCP 条目、hooks 和技能（Claude Code、Codex、Cursor、Windsurf、Zed、Continue、OpenCode、Gemini CLI、Copilot 等）
- 爆炸半径分析：文件变更时自动追溯所有可能受影响的调用方、依赖方与测试
- 初次构建后通过 hooks 与 watch 模式增量更新（约 3,000 个文件的冷构建约 40 秒）
- 经基准测试的上下文削减——读取 flask 全量语料需 143,594 token，而图谱回答只需 2,196（少 65 倍）
- 干净卸载：只删除 CRG 拥有的文件与条目，保留其他 MCP 服务器和 JSONC 注释，支持 `--dry-run` 预览
- 容忍部分构建失败：解析失败的文件会在摘要中点名，并保留其原有图数据行

## 使用场景

- AI 辅助代码评审只读变更涉及的文件，而非整个仓库
- 大型仓库工作流，避免每次提示都重读代码库撑爆上下文窗口
- 向任何支持 MCP 的编码工具提供可复用的结构化上下文（调用图、继承、测试覆盖关联）
- 基于 GitHub Action 的评审流水线，附本地可复现的基准

## 技术特点

- Python 3.10+ 包（`pip install code-review-graph`）；代码经 Tree-sitter 解析为 AST，持久化为节点（函数、类、导入）与边（调用、继承、测试覆盖）构成的图
- 评审时通过 MCP 工具查询智能体所需的最小文件集合，返回爆炸半径与风险评分
- 增量引擎：hooks 与 watch 模式在文件变更时更新图谱；解析失败产生 `partial` 状态并点名相关文件，同时保留其原有数据行
- 安装器按平台写入 MCP 条目并选择正确的启动方式——Poetry 或 uv 项目内用 `poetry run`/`uv run`，PATH 上有 uvx 时用 `uvx code-review-graph serve`，否则用当前解释器
- 共享配置文件以原子方式替换，写入失败时原文件保持不变；卸载只移除 CRG 拥有的条目
