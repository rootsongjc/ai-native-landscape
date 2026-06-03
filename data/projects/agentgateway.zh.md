---
name: agentgateway
slug: agentgateway
homepage: https://agentgateway.dev/
repo: https://github.com/agentgateway/agentgateway
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: 面向 agent 的高性能代理数据平面，为 agent-to-agent 与 agent-to-tool 提供安全、可观测与治理能力。
author: Solo.io
ossDate: '2025-03-18T20:55:22.000Z'
featured: false
status: tracked
---
## 简介

Agentgateway 是一个高性能的 agent 连接与治理数据平面，采用 Rust 实现，旨在提供多租户 RBAC、动态配置与与 MCP/A2A 协议支持，便于在生产环境中以安全可靠的方式连接 agent 与工具。

## 主要特性

- Rust 实现，高性能与低延迟
- 支持 MCP 与 Agent2Agent 协议，内置安全控制与 RBAC
- 动态 xDS 配置与多租户支持

## 使用场景

- 大规模 agent 网络中的安全通信与路由
- 将传统 API 转换为 MCP 资源以供 agent 调用
- 多租户环境下的治理、审计与监控

## 技术特点

- 使用 xDS 动态下发配置，支持无中断更新
- 强化的访问控制与审计日志
- 提供 UI 与文档以便快速集成
