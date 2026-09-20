---
name: BoxAgnts
slug: boxagnts
homepage: https://github.com/guyoung/boxagnts
repo: https://github.com/guyoung/boxagnts
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Toolkit
  - Rust
  - WebAssembly
  - Sandbox
  - Self-Hosted
description: 基于 Rust 构建的开源 AI Agent 工具箱，组合 WebAssembly 沙箱运行时、多提供商模型适配、工具与技能系统以及内置 Web 仪表盘。
author: guyoung
ossDate: '2026-05-16'
featured: false
status: tracked
---

## 简介

BoxAgnts 是基于 Rust 构建的开源 AI Agent 工具箱，主打开箱即用体验：下载、运行，通过内置 Web 仪表盘管理智能体。自定义工具与技能在兼顾安全与灵活的 WebAssembly 沙箱中执行，核心单二进制即内置多提供商模型支持、Markdown 驱动的技能系统、定时任务与静态网站托管。

## 主要特性

- 一个适配层对接 20+ 模型提供商（OpenAI、Anthropic、Google、Azure、Bedrock、DeepSeek、MiniMax、Cohere、GitHub Copilot 等）的流式聊天
- 自定义智能体各有独立模型、提示词与最大轮数配置；支持用 `.md` 文件定义智能体行为
- 工具系统覆盖文件读写与 diff 级智能编辑、带风险分类的安全 shell 执行、网页抓取、文档读取（PDF、DOCX）、glob + 正则文件搜索
- Markdown 定义的技能可组合复用，内置代码审查、CSS 重构顾问、DOCX/PPTX/XLSX 生成器等
- 标准 cron 表达式定时任务，可按任务配置智能体、消息内容与工作目录，并带日志
- WebAssembly 沙箱提供细粒度权限管理与网络访问控制，MCP 客户端可接入外部工具生态

## 使用场景

- 用可视化仪表盘运行个人 AI 助手，不依赖容器或云服务
- 构建自定义工具必须在隔离、受权限控制环境中执行的智能体
- 通过 cron 驱动的智能体任务自动化周期性工作（代码审查、文档生成、定时报告）
- 接入社区 MCP server 扩展智能体能力，同时保持执行本地化

## 技术特点

- Rust 后端基于 Tokio 异步运行时与 Axum Web 框架，按 workspace 组织：`api`（多提供商适配器，含流式/非流式消息转换）、`core`（消息/工具类型、成本跟踪）、`query`（智能体查询循环，含多提供商动态路由、上下文压缩、预算控制）、`gateway`（cron 调度 + 站点管理）、`server`（Axum REST + WebSocket，HTTP Basic Auth）、`tools`/`tools-manager`（Tool trait 与完整的 shell 命令 lexer/parser/AST）、`mcp`、`wasm-sandbox`、`wasm-tools`、`workspace`
- WebAssembly 沙箱基于 Wasmtime，带目录映射、网络访问控制（域名白名单 + IP 黑名单）以及超时/内存/fuel 资源限制——一次编译到处运行，接近原生性能
- Vue 3 + TypeScript + Vuetify 仪表盘：11 个 Pinia store 继承共享 `baseCrud` 基类，Vue Router（hash 模式），Marked + DOMPurify 渲染，CodeMirror 6 编辑器，Chart.js 用量视图，WebSocket 实时聊天与文件变更通知
- 预编译可执行文件内嵌编译后的仪表盘资源与内置扩展（WASM 工具 + 技能定义）；源码构建需 Rust 1.75+ 与 Node.js 18+，先构建前端到 `app/dashboard-web` 再出 release 二进制
- 支持多工作区，各自独立配置、OAuth 凭据、会话历史与权限；项目基于 claurst 代码库开发
