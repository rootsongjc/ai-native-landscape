---
name: rea
slug: rea
homepage: https://rea.tools
repo: https://github.com/morluto/rea
license: MIT
category: coding-devtools
subCategory: developer-utilities
tags:
  - Reverse Engineering
  - MCP
  - CLI
  - Security
description: >-
  一个用于逆向工程一切的 MCP 服务器与智能体技能：覆盖原生二进制、JavaScript/Electron
  应用、.NET 程序集和网站，分析全程本地运行，每个结论都附带证据。
author: morluto
ossDate: '2026-04-14'
featured: false
status: tracked
---

## 简介

REA（Reverse Engineer Anything）把检查原生二进制、JavaScript/Electron 应用、.NET 程序集和网站的工具接入 AI 智能体。指定一个没有源码的应用里的功能，智能体就能解释该功能如何工作、展示每个结论背后的证据，并为你的项目构建类似实现。这些工具也可以直接在终端中使用。

## 主要特性

- 一个 MCP 覆盖二进制、应用和运行时行为的逆向工程
- 通过已有的 Hopper、Ghidra、IDA 或 Kuna 安装检查原生二进制
- 对 JavaScript 和 Electron 应用（含 ASAR 包）做静态分析，无需原生分析引擎
- 每个结果都包含结论背后的证据与局限说明
- 安装时同时注册 MCP 服务器和配套的工作流指令
- 也可作为普通 CLI 命令在终端直接使用

## 使用场景

- 弄清闭源应用中某个功能的实现原理，并在自己的项目中重建
- 在没有源码的情况下审计 Electron 或 JavaScript 应用
- 结合 Hopper、Ghidra、IDA 的反汇编工作流调查原生二进制

## 技术特点

- 以 `rea-agents` npm 包分发；`npx rea-agents setup` 会把 REA 的 MCP 服务器和工作流指令注册到 Claude Code、Codex、Cursor、Gemini CLI、Grok Build 等智能体，并在改动前备份现有配置
- 原生二进制分析桥接到已有的 Hopper、Ghidra、IDA 或 Kuna 安装，安装器经批准后也可选装 Hopper；JavaScript/Electron 静态分析则不需要任何原生引擎
- MCP 契约默认广播紧凑输入 schema 以降低上下文开销；通过 `REA_MCP_INPUT_SCHEMA_PROFILE` 和 `REA_MCP_OUTPUT_SCHEMA_PROFILE` 可在紧凑与完整 schema 之间切换，服务端校验始终保持规范版本
- 分析完全本地运行；在 Linux 上，工具启动（Ghidra、JADX、固件工具）的进程归属检查要求 PATH 上存在兼容 procps 的 `ps`
