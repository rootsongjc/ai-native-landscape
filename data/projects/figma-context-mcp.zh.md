---
name: Framelink Figma MCP Server
slug: figma-context-mcp
homepage: null
repo: https://github.com/glips/figma-context-mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - Dev Tools
  - MCP
description: 用于向 AI 编码代理（如 Cursor）提供 Figma 设计数据的 MCP 服务器。
author: GLips
ossDate: '2025-02-13T02:55:06.000Z'
featured: false
status: tracked
---
Framelink Figma MCP Server 是一个基于 Model Context Protocol 的服务器实现，它将 Figma 设计元数据简化并提供给 AI 编码代理（例如 Cursor），以便实现对设计的一次性（one-shot）实现。

## 主要特性

- 提供简化的 Figma 布局与样式信息，便于模型生成更准确的一次性实现代码。
- 支持 Cursor 与其他支持 MCP 的客户端，提供标准化的 MCP 接口与快速上手文档。
- 提供快速启动示例、跨平台安装指令（npx/环境变量）与演示视频。

## 使用场景

- 在 IDE 中让智能体直接访问并理解 Figma 设计数据，生成 UI 实现代码或样式片段。
- 为设计驱动的开发工作流提供高质量的上下文，缩短从设计到实现的时间。

## 技术特点

- 基于 TypeScript 构建，提供可配置的 MCP 服务端实现与命令行启动方式。
- 提供 Figma API 的简化解析，输出仅包含对模型有用的布局与样式元信息。
- 包含本地化文档（多语言 README）与持续发布流程，便于生产环境部署与升级。
