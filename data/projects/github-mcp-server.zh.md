---
name: GitHub MCP Server
slug: github-mcp-server
homepage: null
repo: https://github.com/github/github-mcp-server
license: Other
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
description: GitHub 官方的 MCP 服务器，为 AI 智能体提供与 GitHub 仓库交互的标准化接口。
author: GitHub
ossDate: '2025-03-04T16:42:04.000Z'
featured: false
status: tracked
---
GitHub MCP Server 是 GitHub 官方的 Model Context Protocol 服务器实现，使 AI 智能体能够通过 MCP 协议与 GitHub API 无缝交互。它为 AI 助手提供了标准化接口，可以访问和操作 GitHub 资源，包括仓库、问题和拉取请求。

## 仓库操作

- 仓库管理，包括创建、派生和配置
- 文件操作，支持读取、创建和更新仓库内容
- 分支管理，支持创建、列表和切换
- 提交历史追踪和差异检查

## 问题与拉取请求管理

- 完整的问题生命周期管理，具备搜索、创建和状态更新能力
- AI 智能体可参与的拉取请求创建、审查和合并工作流
- 标签、里程碑和分配管理用于项目组织
- 跨仓库、问题和代码的搜索能力

## API 集成与安全

- 完整的 GitHub API 集成，覆盖 REST 和 GraphQL 端点
- 严格的权限验证，限定在认证用户的访问范围内
- 所有智能体发起操作的详细审计日志
- 与 GitHub 安全标准一致的数据保护

## 平台集成

- 兼容 Claude 和 OpenAI 等 AI 平台，实现开发自动化
- 通过自然语言交互执行仓库操作和项目管理
- 安装需要 Node.js 18+ 或 Python 3.8+ 以及 GitHub 凭据
- 由 GitHub 官方团队维护，拥有活跃的社区参与
