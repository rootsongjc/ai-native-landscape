---
name: Terax
slug: terax-ai
homepage: https://terax.app
repo: https://github.com/crynta/terax-ai
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Code Editor
  - Terminal
  - AI Agent
  - Rust
  - Tauri
description: >-
  轻量（约 7MB）、终端优先的 AI 原生开发工作区，基于 Tauri 2、Rust 与 React 构建，融合原生 PTY 终端、代码编辑器、版本控制以及支持自带密钥或本地模型运行的智能体 AI 侧边栏。
author: crynta
ossDate: '2026-04-21T18:33:12.000Z'
featured: false
status: tracked
---
## 简介

Terax 是一款开源的终端应用开发环境（ADE），基于 Tauri 2 + Rust 与 React 19 构建。它将原生 PTY 后端与 WebGL 渲染器、支持自带密钥（BYOK）和完全本地模型的智能体 AI 侧边栏、代码编辑器、文件浏览器、带 Git 图的版本控制以及 Web 预览面板整合于一体，整体仅约 7-8 MB，无遥测、无需账号。

## 主要特性

- GPU 加速多标签终端，原生 PTY 后端（zsh、bash、pwsh、fish、cmd），支持分屏。
- 基于 CodeMirror 6 的代码编辑器，内置行内 AI 自动补全、AI 编辑差异（diff）与 Vim 模式。
- 版本控制面板，支持分块暂存、提交、推送，以及真实的 Git 历史图。
- 智能体 AI 工作流：计划、子智能体、通过 `TERAX.md` 实现项目记忆，以及工具调用（文件编辑、grep、glob、带审批的 bash）。
- BYOK 服务商（OpenAI、Anthropic、Gemini、Groq、xAI、OpenRouter、DeepSeek、Mistral），并支持本地推理（LM Studio、MLX、Ollama）。
- 内置本地开发服务器与外部 URL 的 Web 预览。

## 使用场景

- 希望用一个轻量桌面工作区统一终端、编辑器、Git 与 AI 的开发者。
- 注重本地优先与隐私、要求无账号、无遥测的工作流。
- 结合自定义智能体、计划模式以及 BYOK 或本地模型端点的 AI 辅助编程。

## 技术特点

- 采用 Tauri 2 + Rust 后端与 React 19 前端，终端基于 xterm.js 的 WebGL 渲染。
- API 密钥通过 `keyring` 存入操作系统钥匙串，绝不写入磁盘或 localStorage。
- 跨平台安装包覆盖 macOS、Linux（AppImage/deb/rpm/AUR/Nix flake）以及 Windows，并对 WSL 提供一等公民支持。
