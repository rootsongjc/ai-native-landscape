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
logo: ''
author: .NET Foundation
ossDate: '2023-09-25T23:49:49Z'
featured: false
status: tracked
---

## 详细介绍

Aspire 是一个面向代码优先（code-first）的工具链，旨在简化分布式应用的本地开发、可观测性与部署流程。它通过统一的应用模型将服务、资源与连接声明为单一的来源，从而让开发者能够用一条命令在本地启动、调试整个应用，并使用相同的组合（composition）将应用部署到 Kubernetes、云端或自有服务器上。

## 主要特性

下面列出 Aspire 的核心能力，帮助理解它在开发生命周期中的价值：

- 代码优先的应用模型和项目模板，减少手工配置。
- 一体化 CLI：本地启动、调试、运行及生成部署清单。
- 可视化仪表盘与服务发现，提升可观测性与调试效率。
- 与 Kubernetes 与常见云平台的无缝集成，支持一键部署。
- 丰富的示例与模板，便于快速上手与企业化扩展。

## 使用场景

Aspire 适用于需要快速在本地迭代并最终部署到生产环境的分布式 .NET 应用场景，例如微服务组合、本地集成测试、CI 验证管道与团队协作调试。它也适合需要将开发流程与可观测性紧密结合的工程团队。

## 技术特点

Aspire 以 .NET 生态为核心，提供跨平台的 CLI 与仪表盘，包含项目模板、服务发现、可观测性集成与生成的部署清单。项目采用模块化设计，便于在 CI/CD 中嵌入，并支持丰富的扩展点与自托管方案。
