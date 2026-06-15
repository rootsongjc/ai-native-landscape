---
name: OxideTerm
slug: oxideterm
homepage: https://oxideterm.app
repo: https://github.com/AnalyseDeCircuit/oxideterm
license: GPL-3.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Terminal
  - Rust
  - SSH
  - MCP
  - AI Terminal
  - Tauri
description: 基于 Rust 和 Tauri 构建的 AI-native 终端工作区，支持本地 Shell 和远程 SSH/SFTP，集成 AI 助手和 MCP Server。
author: AnalyseDeCircuit
ossDate: '2026-01-21'
featured: false
status: tracked
---

## 简介

OxideTerm 是一个基于 Rust 和 Tauri 构建的高性能 AI-native 终端工作区。它支持本地 Shell、SSH、Serial、Telnet 和 SFTP 连接，内置 AI Terminal Assistant 和 MCP Server。设计理念强调零 Electron、零 OpenSSL、零遥测，核心 SSH 功能无需订阅。

## 主要特性

- 基于 Rust 和 Tauri 的终端，支持 GPU 加速
- AI Terminal Assistant 支持命令生成、输出解释和故障排查
- 内置 MCP Server，用于外部 AI 工具和工作流集成
- 多协议支持：SSH、Serial、Telnet、SFTP、端口转发
- 本地优先设计，无遥测，支持自带 API Key 的 AI 模型接入

## 使用场景

- 作为主终端使用，配合 AI 辅助进行日常开发
- 通过 SSH/SFTP 管理远程服务器，AI 驱动诊断
- 通过 MCP 协议将终端能力集成到 AI 工作流中

## 技术特点

- 使用 Rust 构建，基于 russh 库和 Tauri 框架
- 零 Electron 依赖 — 使用系统 WebView 实现最小资源占用
- 支持 BYOK（自带 API Key）接入 AI 模型
- 包含文件管理器、端口转发和 WSLg 支持
