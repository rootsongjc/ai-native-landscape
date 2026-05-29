---
name: React Grab
slug: react-grab
homepage: https://react-grab.com
repo: https://github.com/aidenybai/react-grab
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Dev Tools
  - Frontend
  - Plugin
  - Vibe Coding
description: 直接从网站选择代码上下文，为 AI 编码助手提供精准的元素信息，使 Cursor、Claude Code、Copilot 等工具运行速度提升 3 倍。
logo: ''
author: Aiden Bai
ossDate: '2025-01-15'
featured: true
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

React Grab 是一个专为开发者设计的创新工具，能够让用户直接从浏览器中选择 UI 元素的代码上下文，并将其复制到 AI 编码助手中。通过简单的快捷键操作，开发者可以获取元素的文件名、React 组件信息和 HTML 源代码，从而为 AI 助手提供精确的上下文信息。

该工具通过可视化界面让开发者在浏览器中直接选取任何 UI 元素，然后自动提取相关的代码信息。测试表明，使用 React Grab 可以使 Cursor、Claude Code、GitHub Copilot 等 AI 编码工具的运行速度提升高达 3 倍，同时显著提高准确性。

## 主要特性

- **一键复制上下文**：只需指向任何元素并按下 ⌘C（Mac）或 Ctrl+C（Windows/Linux），即可复制文件名、React 组件和 HTML 源代码
- **跨框架支持**：支持 Next.js（App Router 和 Pages Router）、Vite、Webpack 等主流 React 构建工具
- **插件系统**：提供丰富的插件 API，支持自定义上下文菜单操作、工具栏菜单项、生命周期钩子和主题覆盖
- **MCP 集成**：可通过命令行快速集成到 Model Context Protocol（MCP）生态系统中
- **可视化高亮**：鼠标悬停时实时高亮显示可选择的元素，提供直观的选择体验
- **开发环境友好**：仅在开发模式下加载，不会影响生产环境的性能
- **原始工具集**：提供 primitives API，允许开发者从零构建自定义元素选择器

## 使用场景

- **AI 辅助编程**：在使用 Cursor、Claude Code、Copilot 等 AI 编码助手时，快速提供精确的 UI 元素上下文
- **代码审查与调试**：快速定位和审查特定 UI 元素的源代码位置
- **跨团队协作**：将 UI 元素的代码信息快速分享给团队成员，提高沟通效率
- **学习 React 组件结构**：通过可视化方式学习和理解现有 React 应用的组件层次结构
- **自动化测试**：辅助定位和选择需要测试的 UI 元素

## 技术特点

- **轻量级设计**：gzip 后体积小，对应用性能影响微乎其微
- **TypeScript 原生支持**：完整的 TypeScript 类型定义，提供出色的开发体验
- **Monorepo 架构**：采用 pnpm workspace 和 turbo 进行高效的包管理和构建
- **模块化设计**：核心功能与插件系统分离，支持灵活扩展
- **浏览器兼容性**：支持现代浏览器的 Element API 和 React 组件检测
- **MIT 许可证**：完全开源，可自由使用和修改
- **活跃的社区**：拥有完善的贡献指南、Discord 社区和 Issue 跟踪系统
