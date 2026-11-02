---
name: openclaude
slug: openclaude
homepage: https://openclaude.twigpine.com
repo: https://github.com/Twigpine/openclaude
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - CLI
  - LLM
  - MCP
description: 开源的编码智能体 CLI，支持云端与本地模型后端——OpenAI 兼容 API、Gemini、GitHub Models、Codex OAuth、Ollama 等——以统一的终端优先工作流提供工具、子智能体、MCP 与斜杠命令。
author: Twigpine
ossDate: '2026-04-01'
featured: false
status: tracked
---

## 简介

OpenClaude 是一个开源的编码智能体 CLI，"runs anywhere, uses anything"。它可以对接 OpenAI 兼容 API、Gemini（API key 或 Vertex AI）、GitHub Models、Codex 及 Codex OAuth、Ollama 以及众多合作网关，同时保持统一的终端优先工作流：提示词、bash 与文件工具、grep 与 glob、子智能体、任务、MCP、斜杠命令和流式输出。内置的 VS Code 扩展提供启动集成。

## 主要特性

- 一个 CLI 覆盖云端 API 与本地模型后端，通过 `/provider` 引导式配置并保存 provider 档案
- 一站式编码智能体工具集：bash、文件工具、grep/glob、agents、tasks、MCP，以及可插拔搜索后端的 web 工具
- 会话管理：按会话 ID 恢复或分叉对话，`/sessions` 管理器，并可用后台模型对会话内容深度搜索
- 后台会话：以 `--bg` 分离运行长时间非交互提示，再用 `ps`、`logs`、`kill` 管理
- 常见环境的最快接入路径：两个环境变量接 OpenAI、本地 Ollama、`/onboard-github` 引导接入 GitHub Models
- 独立配置命名空间（`~/.openclaude`），无需安装 Claude Code，也不依赖 `.claude` 目录

## 使用场景

- 用你已在付费或本地部署的任意服务商驱动终端编码智能体
- 在云端模型与本地 Ollama 模型之间切换，而不必更换工具和工作流
- 把长时间重构或测试修复循环作为分离的后台会话运行
- 跨服务商复用 MCP 服务器、自定义斜杠命令与子智能体工作流

## 技术特点

- TypeScript CLI，通过 npm 的 `@twigpine/openclaude` 分发（要求 Node 24+）；Bun 工具链仅用于源码构建，仓库另镜像到备用 git 托管站
- Provider 抽象覆盖 20+ 后端：任意 OpenAI 兼容 `/v1` 服务、Gemini API key 与 Vertex AI ADC、GitHub Models OAuth 引导、Codex OAuth（浏览器登录加安全凭证存储）以及 Ollama；`/provider` 将档案保存到 `.openclaude-profile.json`，各 provider 的环境变量自动映射
- 后台会话以本地子进程运行，无守护进程、无网络服务；状态与日志位于 `~/.openclaude/bg-sessions/`，并显式记录终态（exited/failed/killed/stale）
- 会话分叉（`--fork-session`）将记录分叉到新会话 ID 而不动工作区；深度会话搜索只向后台模型发送有界的记录摘录（前后各 50 条消息、2,000 字符）
- 配置独立存放于 `~/.openclaude` 与 `~/.openclaude.json`，刻意不读取 `~/.claude` 或 `CLAUDE_CONFIG_DIR`
