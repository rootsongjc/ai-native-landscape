---
name: MCP-UI
slug: mcp-ui
homepage: null
repo: https://github.com/idosal/mcp-ui
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - Framework
  - MCP
description: MCP-UI 是一个面向 Model Context Protocol 的 UI SDK 集合，旨在将交互式 Web 组件和远程 DOM 功能带入 MCP 平台，以丰富代理交互体验。
author: idosal
ossDate: '2025-05-13T22:41:43.000Z'
featured: false
status: tracked
---

## 简介

MCP-UI 为 Model Context Protocol 提供客户端渲染组件与服务器端 UIResource 生成工具，允许服务器端定义可交互的 UI 片段并通过 MCP 协议传输到宿主端进行安全渲染，从而实现更丰富的代理与用户交互体验。

## 主要特性

- 提供 `@mcp-ui/server` 与 `@mcp-ui/client`，支持 TypeScript、Python 与 Ruby 的服务端 SDK。
- 支持多种资源类型：内嵌 HTML、外部 URL 与 Remote DOM（javascript 脚本）。
- 提供 `<UIResourceRenderer />` React 组件与 Web Component 以便在宿主中渲染并处理事件回调。
- 内置安全沙箱与事件协议，保证远程内容的安全交互。

## 使用场景

- 在 MCP 平台中向代理或用户展示交互式表单、按钮与嵌入式应用。
- 将复杂的 UI 操作作为工具调用（tool call）暴露给宿主，提高自动化与可用性。
- 为多语言服务端（TypeScript / Python / Ruby）统一生成 UI 资源并在不同宿主间复用。

## 技术特点

- 采用 Remote DOM（基于 Shopify remote-dom）实现与宿主的轻量交互。
- 支持使用 QUnit/Vitest 等测试工具进行客户端组件与集成测试。
- 文档完善，提供示例、演示与 MCP 文档站点（mcpui.dev）。
