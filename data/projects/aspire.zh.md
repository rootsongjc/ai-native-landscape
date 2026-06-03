---
name: Aspire
slug: aspire
homepage: https://aspire.dev
repo: https://github.com/dotnet/aspire
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application Framework
  - CLI
  - Deployment
  - Dev Tools
description: 用于构建可观测、可部署的代码优先分布式应用的一体化工具链。
author: .NET Foundation
ossDate: '2023-09-25T23:49:49Z'
featured: false
status: tracked
---

.NET Aspire 是一个代码优先、可扩展的工具链，用于构建可观测、生产就绪的云原生应用。它通过统一的应用模型将服务、资源与连接声明为单一来源，让开发者能够用一条命令在本地启动和调试整个分布式应用，并部署到 Kubernetes 或云平台。

## 开发体验

- **代码优先的应用模型**，配合项目模板减少手工配置
- **单命令本地启动与调试**，自动完成多服务应用的依赖注入与编排
- **可视化仪表盘**，展示服务拓扑、健康检查、日志与分布式追踪
- **热重载**支持，加速开发迭代

## 可观测性与集成

- 内置服务发现与依赖注入，适配 .NET 服务生态
- OpenTelemetry 集成，支持分布式追踪、指标与结构化日志
- 健康检查端点与实时资源监控，一目了然
- 自动容器编排，管理数据库、缓存与消息中间件

## 部署与扩展

- 生成兼容 Kubernetes 与主流云平台的部署清单
- 可扩展的组件模型，支持自定义集成与云服务接入
- CLI 驱动的 CI/CD 工作流，覆盖构建、测试与发布
- 跨平台支持，运行于 Windows、macOS 与 Linux

## 适用场景

- 微服务组合与本地集成测试
- 需要将开发流程与可观测性紧密结合的工程团队
- 企业环境中要求开发与生产环境一致性的场景
- 快速原型验证分布式 .NET 应用，降低运维负担
