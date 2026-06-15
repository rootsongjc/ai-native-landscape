---
name: Netcatty
slug: netcatty
homepage: https://netcatty.app
repo: https://github.com/binaricat/Netcatty
license: GPL-3.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Terminal
  - SSH
  - SFTP
  - Electron
  - AI Agent
description: AI 驱动的 SSH 工作区，集成终端、SFTP 浏览器和 Catty Agent，在统一界面中管理多台远程服务器。
author: binaricat
ossDate: '2025-12-06'
featured: false
status: tracked
---

## 简介

Netcatty 是一个 AI 驱动的 SSH 工作区，集成了终端会话、SFTP 文件浏览器和 AI 助手 Catty Agent。基于 Electron 和 xterm.js 构建，提供统一工作区来管理多台远程服务器，支持 AI 辅助诊断、命令生成和多主机操作。

## 主要特性

- 集成 SSH 终端、SFTP 浏览器和会话管理的一体化工作区
- Catty Agent 提供 AI 驱动的服务器诊断、日志分析和命令生成
- 多主机支持，带分屏终端和基于 Vault 的主机管理
- 跨平台支持 macOS、Windows 和 Linux
- AI 辅助的多主机操作，带确认工作流

## 使用场景

- 在统一 SSH/SFTP 工作区中管理多台远程服务器
- 跨主机的 AI 辅助日志分析和服务器诊断
- 减少终端、文件传输和主机管理之间的上下文切换

## 技术特点

- 使用 Electron、React、Radix UI 和 xterm.js 构建
- 基于 Vault 的主机管理，用于组织服务器连接
- Catty Agent 能理解远程服务器上下文，提供场景化 AI 辅助
