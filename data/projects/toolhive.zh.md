---
name: ToolHive
slug: toolhive
homepage: https://toolhive.dev
repo: https://github.com/stacklok/toolhive
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - CLI
  - Deployment
  - Dev Tools
description: 一套用于部署与治理 MCP 服务器的企业级平台，提供注册中心、运行时、网关与门户组件。
logo: ''
author: StackLok
ossDate: '2025-03-12T14:49:15Z'
featured: false
status: tracked
---

## 详细介绍

ToolHive 是一套面向企业的 MCP（模型上下文协议）服务器管理平台，覆盖注册中心、运行时、网关与门户四大模块。它以“安全默认”（secure by default）为设计原则，通过容器隔离、权限最小化与密钥管理等机制，简化 MCP 服务器的部署与治理，支持从本地桌面到 Kubernetes 集群的全场景应用。

## 主要特性

- 一键部署：通过桌面 UI、CLI 或 Kubernetes Operator 快速启动 MCP 服务。
- 安全隔离：以容器为边界管理网络与凭据，避免以明文方式暴露密钥。
- 注册与目录：内置注册中心用于策划受信任的服务器目录并验证来源。
- 统一网关：集中管理接入策略、鉴权与审计，支持与企业 IdP 集成。

## 使用场景

适用于需要集中管理 MCP 服务器与工具目录的团队与企业场景，例如为组织提供受控的模型服务目录、为开发者自动配置本地 MCP 客户端（如 Claude Desktop、VS Code），或在云端通过 Kubernetes Operator 批量部署与运维 MCP 实例。

## 技术特点

ToolHive 支持多平台部署（本地容器、Kubernetes）、可插拔的运行时与注册服务器，并集成监控（OpenTelemetry、Prometheus）与审计能力。其架构强调模块化与可扩展性，便于通过插件或适配器接入不同 MCP 工具与后端服务。
