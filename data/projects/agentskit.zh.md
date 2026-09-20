---
name: AgentsKit
slug: agentskit
homepage: https://www.agentskit.io/
repo: https://github.com/AgentsKit-io/agentskit
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - TypeScript
  - Agent Framework
  - Multi-Agent
  - Provider Adapters
  - RAG
description: 可组合的 TypeScript 智能体工具包，以零依赖核心为基础，提供适配器、运行时、工具、技能、记忆、RAG、沙箱、可观测性与评测等可独立安装的包。
author: AgentsKit
ossDate: '2026-04-02'
featured: false
status: tracked
---

## 简介

AgentsKit 是用 JavaScript 构建智能体的可组合工具包。它不做又一个单体框架，而是提供一个约定明确的小核心加可独立安装的包——每个适配器、工具、技能、记忆、检索器和运行时都可以在六份正式的版本化契约之后替换。团队可以从一个包起步，逐步长成完整技术栈，并且更换模型厂商时无需重写应用架构。

## 主要特性

- 一行切换提供商：`openai()`、`anthropic()`、`gemini()`、`ollama()`、`deepseek()`、`grok()` 适配器共用同一适配器契约
- 自主智能体运行时，带 ReAct 循环、工具注册表、技能，以及通过模型已知工具完成的多智能体委派
- React、Ink（终端）、Vue、Svelte、Solid、Angular、React Native 共享同一聊天契约的 UI 层
- 记忆（会话、向量、图、加密）、即插即用的 RAG 与重排、沙箱代码执行、可观测性（LangSmith、OpenTelemetry、审计日志）以及带回放的智能体评测
- 可将 AgentsKit 工具暴露为 MCP server 供 Claude Desktop、Cursor、Windsurf 使用；一个描述符即可接入 Slack、Teams、邮件集成
- CLI（`npx @agentskit/cli init`）从模板脚手架生成技能、工具与适配器

## 使用场景

- 构建可随时替换提供商的 React（或 Vue/Svelte/Solid/Angular/RN）流式聊天界面
- 带工具、技能与长期记忆的无头自主智能体
- 多智能体委派：planner 拆解任务，researcher/coder 委派对象在限定工具与步数预算内执行
- 基于 Ink + CLI 的终端优先智能体，以及把内部工具暴露给 Claude Desktop 等 MCP 客户端

## 技术特点

- 核心零运行时依赖，CI 强制 10 KB gzip 预算，v1 起 API 冻结；六份版本化 ADR（0001–0006）定义适配器、工具、记忆、检索器、技能与运行时契约
- 每个包带显式稳定层级（stable/beta）、测试下限、README、人类指南与 agent 交接文档；生态数字由 `scripts/compute-stats.mjs` 从仓库源生成到提交的 claims ledger，漂移即 CI 失败
- 第一个智能体无需 API key 或网络请求：本地适配器工厂即可运行；README 示例是与文档字节同步的可执行 fixture，纳入 CI
- 完整公开 API 控制在 2,000 token 以内供 agent 消费，`llms.txt` 与 `doc-bridge.config.json` 提供机器可读的文档交接
- 面向 Node.js 20+ 与现代运行时，双 ESM/CJS 输出与严格 TypeScript 声明；无依赖核心带来边缘环境兼容
- 生态分层：工具包仓库、现成智能体/工具注册表（registry.agentskit.io）与模式手册（playbook.agentskit.io）
