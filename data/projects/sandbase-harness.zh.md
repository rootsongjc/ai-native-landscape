---
name: SandBase Harness
slug: sandbase-harness
homepage: https://github.com/sandbaseai/sandbase-harness
repo: https://github.com/sandbaseai/sandbase-harness
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agent Runtime
  - Sandbox
  - MCP
  - Self-Hosted
  - Local-First
  - Audit
description: 本地优先、可自托管的 AI Agent 运行时，提供持久会话、沙箱执行后端、凭据保险库、审批门禁、审计与回放。
author: SandBase AI
ossDate: '2026-07-11'
featured: false
status: tracked
---

## 简介

SandBase Harness 是位于 Agent SDK 与生产级 Agent 部署之间的本地优先运行时层。Agent SDK 负责模型循环，Harness 补上生产环境真正需要的部分：持久会话、工具治理、沙箱边界、凭据管理、记忆、可审计性，以及供人类检查执行过程的本地面板。它运行在自己的机器或自有基础设施上，采用 SQLite 与文件存储，不依赖托管控制平面。

## 主要特性

- Claude Managed Agents 风格的 `/v1` HTTP API，附内置本地 Console 仪表盘
- 持久、可恢复的会话以 Server-Sent Events 形式暴露，支持回放与调试
- 沙箱执行后端：本地进程、Docker（按会话容器）、Kubernetes（kubectl exec/cp）、自托管 worker 队列
- MCP 工具集、权限策略、审批门禁、内置工具与技能包
- 基于 SQLite 的智能体、会话、环境、凭据保险库、记忆存储、文件与 API key；文件与技能字节存放在工作区状态目录
- 通过 Settings V2 配置单一模型提供商边界（OpenAI、Anthropic、MiniMax 或 OpenAI 兼容端点），带校验与重启流程

## 使用场景

- 安全运行生成代码，隔离边界从笔记本（本地进程）到集群（Kubernetes）按需选择
- 检查长时间运行的 agent：恢复事件流、审计工具调用、回放 agent 的执行过程
- 用凭据保险库、权限策略和人工审批门禁控制第三方插件的工具访问
- 在完全自托管的基础设施上运行可审计的编程或研究型 agent

## 技术特点

- Node.js 22+ / TypeScript 代码库；`managed-agents/sdk` 提供 TypeScript SDK，`npm run release:check` 作为发布门禁
- Settings V2 固定一个工作区的模型厂商、循环引擎、存储、记忆与沙箱后端，支持表单/JSON 双编辑模式与校验驱动的重启流程
- DeepSeek Harness 桥接基于 MCP stdio：将 bundle 安装进 DSH profile 后，暴露原生 `mcp__sandbase__*` 工具，可列出智能体、创建并运行会话、检查结果与产物、停止任务
- 以 DSH 插件部署时直接解析带标签的 HTTPS Git 源（仅在 `dist/` 缺失时执行 `prepare`），并给出 pnpm `allowBuilds` 与重复安装恢复路径的文档
- 状态模型将 SQLite 元数据与工作区状态目录中的文件/技能字节分离，保持本地优先存储而无托管控制平面
- 分发渠道包括源码检出（v0.3.8 标签）、MCP stdio 镜像与 MCP 官方 Registry 条目
