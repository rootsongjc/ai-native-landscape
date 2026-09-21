---
name: ZCode
slug: zcode
homepage: https://zcode.z.ai/
repo: https://github.com/zai-org/ZCode
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
  - Coding Agent
  - CLI
  - Desktop App
description: Z.ai 开源的 AI 编程工作台，单一代码库同时提供 Electron 桌面应用、浏览器工作台和终端 Agent CLI/TUI。
author: Z.ai
ossDate: '2026-09-20T12:01:16Z'
featured: false
status: tracked
---

## 简介

ZCode 是 Z.ai 推出的 AI 编程工作台，单一仓库包含桌面客户端、Web 客户端与后端服务、共享 UI，以及 Agent CLI 与运行时源码。同一个 `zcode` 命令覆盖所有入口：无参数进入终端 TUI，`--web` 启动浏览器工作台，其余参数交给 Agent CLI 处理。

## 主要特性

- 一套代码三种形态：Electron 桌面应用、自托管浏览器工作台、终端 Agent（TUI/CLI）。
- 单一 `zcode` 启动器——默认进入 TUI，`--web` 启动浏览器模式，可指定工作区、端口与监听地址。
- 支持 SSH/WSL 远程开发，运行资源由本机经 SFTP 上传，不依赖 CDN。
- Web 模式默认安全：只监听 `127.0.0.1`，监听非本机地址时自动生成访问令牌。
- 可插拔 Provider 层（`packages/provider`、`provider-node`）接入模型，并提供 Agent 客户端 SDK 与 RPC 框架。

## 使用场景

- 以 `zcode` TUI 进行终端优先的 vibe coding，作为任意 Shell 或编辑器工作流中的 Agent CLI。
- 在本地或远程机器上运行浏览器编程工作台，从局域网内任意设备访问。
- 通过桌面应用获得原生 Electron 体验，与 CLI、Web 版共享同一 Agent 运行时。

## 技术特点

- 基于 pnpm workspace 的 TypeScript monorepo：`packages/desktop`（Electron Main/Host/Renderer）、`packages/web`、`packages/server`（HTTP/WebSocket 服务与远程连接）、`packages/ui`（共享 React 组件与 Zustand 状态），以及 `packages/rpc`、`packages/client`（RPC 框架与 Agent 客户端 SDK）。
- Agent CLI（`apps/zcode-cli`）不只是前端——它同时为桌面版和 Web 版提供 Agent 运行时，三种入口共享同一执行引擎。
- CLI 发行包组装为 tar.gz 并附带 SHA-256 校验、`latest.json` 版本索引和 `install.sh` 安装脚本，默认安装到 `~/.zcode/runtime`；API/WebSocket 认证通过 `ZCODE_SERVER_AUTH_TOKEN` 或编程接口的 `authToken` 选项控制。
- Web 开发模式同时启动 Vite 开发服务器与后端，`/ws` 和 `/api` 请求代理到本地后端，OAuth token 交换单独路由。
