---
name: GitHub MCP Server
slug: github-mcp-server
homepage: null
repo: https://github.com/github/github-mcp-server
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
description: GitHub 官方的 MCP 服务器，为 AI 智能体提供与 GitHub 仓库交互的标准化接口。
logo: ''
author: GitHub
ossDate: '2025-03-04T16:42:04.000Z'
featured: false
status: tracked
---

## 简介

GitHub MCP Server 是 GitHub 官方的 Model Context Protocol 服务器实现，使 AI 智能体能够通过 MCP 协议与 GitHub API 无缝交互。它为 AI 助手提供了标准化接口，可以访问和操作 GitHub 资源，包括仓库、问题和拉取请求。

## 主要特性

该服务器实现了 GitHub 核心功能，包括仓库管理、文件操作、分支管理和提交历史追踪。它支持完整的问题和拉取请求生命周期管理，具备搜索、创建和状态更新能力。GitHub API 集成覆盖 REST 和 GraphQL 端点，并内置严格的权限验证和审计日志机制。

## 使用场景

GitHub MCP Server 可让 AI 智能体参与代码审查、自动创建问题和拉取请求管理工作流。它支持与 Claude 和 OpenAI 等 AI 平台集成，实现开发自动化增强，允许助手通过自然语言交互执行仓库操作、管理项目资源和简化开发流程。

## 技术特点

该服务器安装需要 Node.js 18+ 或 Python 3.8+ 以及 GitHub 凭据。它遵循 MCP 协议规范，实现完整的 GitHub API 集成，包括严格的权限验证、数据保护和详细的审计日志。项目由 GitHub 官方团队维护，拥有活跃的社区参与和定期更新。
