---
name: Obot
slug: obot
homepage: https://obot.ai/
repo: https://github.com/obot-platform/obot
license: Unknown
category: applications-products
subCategory: chat-interfaces
tags:
  - AI Gateway
description: 开源的 MCP 网关与 AI 平台，支持自托管或云端部署，提供聊天、管理与审计功能。
author: obot-platform
ossDate: '2024-09-05T19:50:46.000Z'
featured: false
status: tracked
---

## 简介

Obot 是一个开源的 MCP 网关与 AI 平台，集成聊天界面、MCP 网关与管理后台，支持自托管或云端运行，便于企业管理模型提供者、权限与审计日志。

## 主要特性

- 三合一平台：包含 MCP Gateway、聊天界面与管理（Admin）控制台。
- 企业级安全与审计：支持 OAuth2.1、加密与详细的审计日志。
- 可扩展的工具与集成：支持自定义工具、MCP 服务注册以及多模型提供者配置。

## 使用场景

- 企业内部 AI 平台与模型治理，统一管理模型接入与权限控制。
- 将多个模型服务与第三方工具整合为统一的聊天与任务平台。
- 在合规或私有环境中部署可审计的对话型 AI 服务。

## 技术特点

- 使用 Go、Svelte 与 TypeScript 构建，高性能且易于扩展。
- 支持容器化部署（提供镜像与 Helm/Chart 支持），并集成观测与运维工具。
- 遵循 Model Context Protocol (MCP) 标准，实现良好的互操作性。
