---
name: Codebase Memory MCP
slug: codebase-memory-mcp
homepage: https://deusdata.github.io/codebase-memory-mcp/
repo: https://github.com/DeusData/codebase-memory-mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Code Intelligence
  - Knowledge Graph
  - Code Analysis
  - Developer Tools
description: >-
  高性能代码智能 MCP 服务器，将代码库索引为持久化知识图谱。支持 158 种语言、亚毫秒级查询，token 消耗降低 99%，单静态二进制零依赖交付。
author: DeusData
ossDate: '2026-02-24T22:01:00Z'
featured: false
status: tracked
---

## 简介

Codebase Memory MCP 是基于模型上下文协议（MCP）的高性能代码智能服务器。它通过 tree-sitter 将代码库解析为持久化知识图谱，提供亚毫秒级的结构化查询能力，让编程智能体能够以极低 token 成本精确访问符号、调用图和定义，覆盖 158 种编程语言。以单一静态二进制、零运行时依赖交付，可直接接入 Claude Code、Codex、Cursor、Windsurf、Aider、Gemini CLI 等 MCP 兼容客户端。

## 主要特性

- 基于 tree-sitter 的持久化代码知识图谱，覆盖 158 种编程语言，支持 AST 级别的符号与关系抽取。
- 亚毫秒级查询延迟，通过 Cypher 与图遍历接口完成符号查找、调用图与依赖路径查询。
- 仅返回相关结构化切片的 token 高效检索，相较加载整文件降低约 99% 上下文成本。
- 单一静态二进制、零运行时依赖，本地或 CI 环境即开即用，无需安装链。
- 广泛的智能体兼容性，适配 Claude Code、Codex、Cursor、Windsurf、Aider、Gemini CLI、Kilocode、OpenCode。
- 内置图可视化能力，可交互式探索代码关系与架构。

## 使用场景

- 为编程智能体提供准确的全仓库结构化上下文，避免原始源码淹没提示词。
- 大型代码库导航、影响分析与重构/评审期间的"谁调用了谁"探索。
- 通过符号与依赖的图可视化探索，辅助上手理解与架构梳理。
- 需要快速、确定性代码查询的 CI 与自动化流水线，无需重型索引栈。

## 技术特点

- 基于模型上下文协议（MCP）的服务器，向任意兼容智能体客户端暴露代码智能工具。
- 存储层基于 SQLite 与图 schema，支持持久化索引与离线友好的本地运行。
- tree-sitter 驱动多语言 AST 解析，结果可通过 Cypher 与图 API 查询。
- 平均仓库在毫秒级完成索引，符号与关系查询响应达到亚毫秒级。
