---
name: xmcp
slug: xmcp
homepage: https://xmcp.dev
repo: https://github.com/basementstudio/xmcp
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Framework
  - MCP
description: 一个用于构建和部署 MCP 服务器的 TypeScript 框架，旨在简化开发者体验并降低创建 Model Context Protocol 工具的门槛。
logo: ''
author: Basement Studio
ossDate: '2025-05-17T04:09:27Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

xmcp 是一个基于 TypeScript 的 MCP（Model Context Protocol）框架，用于快速构建、开发与部署 MCP 服务端。它以开发者体验（DX）为设计目标，提供开箱即用的路由约定、自动注册工具与提示（`tools` 与 `prompts` 目录）、热重载与可扩展中间件体系，帮助团队以更低的成本交付基于 MCP 的能力平台。

该框架兼顾可用性与可扩展性，既适合用于快速原型和内部工具，也能作为生产环境的基础设施。项目提供初始化脚手架和在现有 Next.js / Express 项目中集成的命令，降低上手门槛并加速开发流程。

社区对扩展中间件、认证和部署适配有良好支持，开发者可以在本地热重载环境中快速迭代工具，同时通过灵活配置将服务部署到不同平台。文档覆盖了入门、配置与部署等常见场景，便于团队在实际项目中复用和扩展。

## 主要特性

- 文件系统路由：自动从 `tools` 与 `prompts` 目录注册工具与提示，减少样板代码。
- 热重载：开发时即时反馈，加快迭代速度。
- 中间件支持：内置认证与自定义中间件能力，便于扩展安全与鉴权逻辑。
- 可扩展配置：灵活的配置系统，支持在不同部署环境中自定义行为。
- 多平台部署：支持在多种平台上部署，包括对 Vercel 的零配置支持。

## 使用场景

- 构建面向开发者的工具平台，将自定义工具与提示以服务化方式暴露。
- 在现有 Next.js 或 Express 项目中快速集成 MCP 能力，作为后端扩展层提供对话式或工具型接口。
- 作为研发团队的 DX 基础设施，统一工具注册、权限与部署流程，提升交付效率。

## 技术特点

- 使用 TypeScript 实现，提供良好的类型体验与开发时提示。
- 以文件系统约定优于配置的方式简化资源注册流程。
- 支持中间件与插件化扩展，便于集成鉴权、日志与监控方案。
- 项目采用 MIT 许可证并在 GitHub 开源，便于企业和社区复用与扩展。
