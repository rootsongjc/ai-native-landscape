---
name: Tree Ring Memory
slug: tree-ring-memory
homepage: https://terminallylazy.github.io/Tree-Ring-Memory/
repo: https://github.com/TerminallyLazy/Tree-Ring-Memory
license: MIT
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Agent Memory
  - Rust
  - SQLite
  - FTS
  - Local-First
  - Context Engineering
description: 面向 AI agent 的框架无关、本地优先记忆生命周期框架，提供 Rust CLI、SQLite/FTS 召回、遗忘、审计、整合与多智能体写入协调。
author: TerminallyLazy
ossDate: '2026-07-04'
featured: false
status: tracked
---

## 简介

Tree Ring Memory 是面向 AI agent 的框架无关、本地优先记忆生命周期框架。它以 SQLite/FTS 为 agent 提供无需云服务的显式本地召回，把持久知识组织成年轮层（形成层、外环、内环、心材、疤环、种子环），并让整个公开运行时全部跑在 Rust 上——存储、召回、导入导出、审计、整合、维护与终端 UI。agent 记忆跨会话留存，同时不会退化成对话转储堆场。

## 主要特性

- 面向决策、伤疤、教训、证据与持久项目事实的带源记忆，而非原始对话抓取
- Rust 实现的审计检查，主动发现过期、敏感、低置信度、被取代与相互矛盾的记忆候选
- 确定性整合，带幂等摘要记录，并对敏感记忆采取谨慎处理
- 过期清理、密钥脱敏与 FTS 修复等维护操作，均可从 CLI 执行
- 同主机多智能体关联、范围化召回过滤与幂等 worker 写入，共享发布与生命周期变更需可选的协调者授权
- 终端 UI：仪表盘、排序搜索、证据浏览器（安装体积、召回速度、harness 记录、召回质量检查）与已检测框架的集成视图

## 使用场景

- 给编程 agent 一份跨会话、跨检出的带源持久项目记忆
- 在同一主机上运行多个 agent，记忆身份相互隔离，再由被授权的协调者执行共享写入
- 审计 agent 的记忆库——在过期条目、矛盾与被取代的决策误导后续工作之前发现它们
- 通过 harness 回执按项目激活记忆，让"已配置桥接"绝不 silently 等同于"agent 真的用了记忆"

## 技术特点

- 完全 Rust 原生工作区：`tree-ring-memory-core`（模型、校验、敏感性检查、召回评分）、`tree-ring-memory-sqlite`（schema 兼容的 SQLite/FTS 存储与召回过滤）、`tree-ring-memory-cli`（`tree-ring` CLI）——仓库不再保留 Python 包、pytest 套件、PyO3 crate 或 CPython 扩展
- harness 激活协议以回执为凭：只有当新的匹配回执显示新会话完成了范围化召回与安全上下文注入，桥接状态才是 `active`；`init` 与标记只建立配置而非激活，且每个检出保留自己的记忆根
- ChatGPT/Codex 与 Claude Code 的指令型插件（`/plugin marketplace add TerminallyLazy/Tree-Ring-Memory`）只教授经评审的工作流，不捆绑 CLI 或 MCP server；Agent Zero 走独立的两段式安装与描述符范围能力检查
- 隐私默认阻断类密钥记忆、隐藏敏感细节、明确不做对话转储；JSONL 导入导出沿用同一套脱敏默认值
- 共享激活限定在同主机本地文件系统且项目存储身份一致——不宣称跨 NFS 或跨主机容器的 SQLite 共享是安全的
- 安装路径：一行安装脚本（macOS ARM64 / Linux x86_64 预编译）、Homebrew tap、以及带首跑初始化的项目本地安装
