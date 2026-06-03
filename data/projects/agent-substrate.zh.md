---
name: Agent Substrate
slug: agent-substrate
homepage: null
repo: https://github.com/agent-substrate/substrate
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Kubernetes
  - Agent Infrastructure
  - Cloud Native
  - Scheduling
  - gVisor
description: 基于 Kubernetes 的智能体工作负载管理系统，通过将大量有状态 actor 复用到少量 Pod 上实现规模化运行，支持亚秒级激活和持久化状态。
author: Agent Substrate
ossDate: '2026-05-13'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Agent Substrate 是专为大规模运行 AI 智能体工作负载而设计的 Kubernetes 层系统。它将大量有状态 "actor"（智能体）复用到少量 "worker"（Kubernetes Pod）上，利用智能体大部分时间空闲的特点实现 30 倍以上的超分。支持亚秒级 actor 激活和跨休眠周期的完整状态持久化。

## 主要特性

- Actor 到 Worker 的复用，在 Kubernetes 上实现 30 倍以上超分
- 亚秒级挂起/恢复，完整保留 RAM 和文件系统状态
- 框架无关 — 兼容 ADK、LangChain、Claude Code 及任何 OCI 容器
- 通过 gVisor 实现沙箱隔离的安全执行
- MCP 服务器可作为持久化 Substrate Actor 部署

## 使用场景

- 在最小化 Kubernetes 基础设施上运行数千个并发 AI 智能体
- 具有会话持久性的高密度有状态编码环境（Claude Code、Codex）
- 部署沙箱化 MCP 工具服务器作为持久化 actor
- 面向生产级智能体应用的成本高效基础设施

## 技术特点

- 基于 Kubernetes 构建，绕过控制平面实现低延迟调度
- 使用 gVisor 实现内核级容器隔离
- 与 Agent Executor (AX) 兼容，支持分布式智能体运行时协调
- 支持标准 Kubernetes 自动扩缩容与智能体特定调度并行工作
