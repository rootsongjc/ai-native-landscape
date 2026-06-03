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
author: StackLok
ossDate: '2025-03-12T14:49:15Z'
featured: false
status: tracked
---

ToolHive 是一个面向企业的 MCP（模型上下文协议）服务器管理平台，支持桌面、云端和 Kubernetes 等多种环境。它将注册中心、运行时、网关和门户整合为统一系统，以安全优先为设计原则，通过容器隔离、最小权限执行和集中密钥管理，为生产级 MCP 工作负载提供保障。

## 部署与运行时

- 通过 Web 门户、CLI 或 Kubernetes Operator 一键部署 MCP 服务器
- 安全默认的运行时将每个服务器隔离在独立容器中，统一管理网络策略
- 集中密钥管理杜绝明文凭据暴露
- 支持本地容器和 Kubernetes 部署，提供可扩展的运行时适配器

## 注册中心与网关

- 内置注册中心策划受信任的 MCP 服务器目录并验证来源
- 网关统一执行认证、授权和审计策略
- 模块化架构支持通过插件接入自定义客户端与多种 MCP 后端
- 企业身份提供者集成，实现统一访问控制

## 平台运维

- 平台团队维护内部 MCP 工具的受治理目录，安全地为开发团队分配权限
- CI/CD 管道集成，自动化 MCP 服务器在预发布和生产环境的部署与配置
- 多环境 MCP 运维，满足合规、审计和策略执行要求
- 内置 OpenTelemetry 和 Prometheus 集成，提供指标、链路追踪和审计日志
