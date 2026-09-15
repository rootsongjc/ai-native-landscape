---
name: Octop
slug: octop
homepage: null
repo: https://github.com/TencentCloud/Octop
license: MIT
category: applications-products
subCategory: chat-interfaces
tags:
  - Agents
  - Chatbot
  - Self-Hosted
  - Multi-Agent
  - MCP
  - ACP
description: 腾讯云开源的自托管多用户、多智能体 AI 助手，单进程同时提供 Web 仪表盘、CLI 与飞书、钉钉、QQ、Discord、企业微信等 IM 渠道。
author: Tencent Cloud
ossDate: '2026-07-08'
featured: false
status: tracked
---

## 简介

Octop 是面向家庭和小团队的开源自托管 AI 助手平台。单个进程同时提供 Web 仪表盘、CLI、IM 渠道（飞书、钉钉、QQ、Discord、企业微信）与定时任务自动化，全部共享 `~/.octop/` 下的同一个 SQLite 数据库。每个用户拥有专属的智能体团队，各智能体有独立的工作区、模型提供商、渠道与人设。

## 主要特性

- 多用户 JWT 认证与管理员角色；每个用户可运行多个智能体，工作区、提供商、渠道相互隔离
- 内置专家库支持按场景切换专家，提供 16 套 MBTI 人设模板
- 飞书、钉钉、QQ、Discord、企业微信等 IM 渠道经统一消息管线处理，与 Web UI、CLI、HTTP/SSE API 及自然语言/斜杠命令定时任务并列
- ACP 双向集成——通过 `octop acp` 将智能体暴露给 IDE，或委派给 OpenCode、Claude Code、Codex、CodeBuddy 等运行器并带权限门控
- 浏览器 AI（无头 Chromium 自动化）、终端 AI（浏览器内交互式 shell 与 AI 辅助执行）、跨平台远程桌面串流
- 连接器生态：腾讯系套件、OAuth 应用与 MCP 网关；工作区后端可插拔（本地磁盘、Docker、PostgreSQL、COS/S3）

## 使用场景

- 家庭或小团队共享 AI 助手，每用户独立智能体团队，对话与凭据全部留在本机
- 一套自托管部署同时服务飞书/钉钉/QQ/Discord/企业微信的多渠道聊天机器人
- 通过自然语言定时触发器运行主动式智能体任务

## 技术特点

- 基于 Harness 技术栈组合为单进程：harness-agent（模型路由、工具、技能、会话检查点）、harness-gateway（多平台 IM 桥接）、harness-memory（带全文检索的分层记忆）、harness-browser（CDP 自动化）——无外部队列或消息 broker，所有入口经进程内 HarnessProcessor 统一处理
- 单进程可安全重启，全部状态在启动时从 `~/.octop/octop.db`（aiosqlite + SQLite WAL）重建；PostgreSQL 可作为控制平面备选后端
- 后端 FastAPI + uvicorn，仪表盘为 React 18 + TypeScript + Vite + Ant Design 并随 wheel 打包分发；APScheduler 负责定时任务；ACP 采用 agent-client-protocol
- 安全模型：JWT 多用户隔离、工具审批、`~/.octop/security/tool_guard/` 下用户可编辑的 shell 命令允许/拒绝规则、PII 脱敏，以及本地后端的 bubblewrap 执行隔离
- 支持一行脚本安装（uv 供给隔离 venv）、PyPI（`pip install octop`）或 Docker Compose 部署；`octop service start` 可注册为 systemd/launchd/Windows 服务
