---
name: Google Workspace MCP Server
slug: google-workspace-mcp
homepage: https://workspacemcp.com
repo: https://github.com/taylorwilsdon/google_workspace_mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - MCP Server
  - Google Workspace
  - Gmail
  - Google Calendar
  - Google Drive
  - LLM Tools
description: 功能全面的 Google Workspace MCP 服务器与 CLI，通过 120+ 工具让 AI 助手用自然语言操控 Gmail、日历、Drive、Docs、Sheets、Slides、Forms、Tasks、Contacts 和 Chat。
author: taylorwilsdon
ossDate: '2025-04-27'
featured: false
status: tracked
---

## 简介

Workspace MCP 通过单个 MCP 服务器将 AI 助手接入全部十二个主流 Google Workspace 服务，提供 120+ 工具。既支持面向传统客户端的本地 stdio 运行，也支持符合最新 MCP 规范的远程 streamable HTTP 部署，并附带功能完整的 CLI 和适配 Claude Code、Codex 等开发工具的 Code Mode。

## 主要特性

- 120+ 工具覆盖 Gmail、Drive、日历、Docs、Sheets、Slides、Forms、Tasks、Contacts 和 Chat，支持细粒度编辑
- 多用户 OAuth 2.1 认证，可为整个组织集中、安全地托管
- 三级渐进式工具分层与只读模式，实现精细的能力控制
- 完整 CLI 与 Code Mode，可直接嵌入 Claude Code、Codex 等开发工具

## 使用场景

- 让 AI 助手用自然语言端到端管理邮件、日历和文档
- 在反向代理后为团队或组织集中托管共享的 Workspace MCP 实例
- 从编码代理中自动化文档编辑、表格操作和 Drive 文件工作流

## 技术特点

- Python 3.10+ 服务器，以 `workspace-mcp` 发布到 PyPI，依赖在 `uv.lock` 中锁定
- 无状态容器部署模式，零磁盘写入，可选 GCS/CMEK 凭据存储后端
- 通过 `validate_file_path()` 实现敏感路径拦截，即使放宽 `ALLOWED_FILE_DIRS` 也会阻断 `.env*` 及 `~/.ssh/`、`~/.aws/` 等主目录凭据库
- 除 Google API 外无遥测、无外部网络调用，支持外部认证服务器与网关透传认证
