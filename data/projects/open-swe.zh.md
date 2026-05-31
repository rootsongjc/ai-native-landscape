---
name: Open SWE
slug: open-swe
homepage: https://swe.langchain.com/
repo: https://github.com/langchain-ai/open-swe
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: 开源的基于云的异步编码代理，能够自主理解代码库、规划解决方案并执行代码更改。
logo: ''
author: LangChain AI
ossDate: '2025-05-21T21:44:24.000Z'
featured: false
status: tracked
---

Open SWE 是一个开源的基于云的异步编码代理，使用 LangGraph 构建。它能够自主理解代码库、规划解决方案，并在整个代码仓库中执行代码更改，从初始规划到创建拉取请求。

## 核心功能

### 智能规划

Open SWE 具有专门的规划步骤，使其能够深入理解复杂的代码库和复杂任务。在执行之前，您可以接受、编辑或拒绝所提出的计划。

### 人在回路

使用 Open SWE，您可以在其运行时（包括在规划和执行步骤期间）向其发送消息。这允许您提供实时反馈和指令，而无需中断整个过程。

### 并行执行

您可以并行运行任意数量的 Open SWE 任务！由于它在云端的沙箱环境中运行，您不会受到同时运行任务数量的限制。

### 端到端任务管理

Open SWE 将自动为任务创建 GitHub issues，并在实现完成后创建拉取请求来关闭该 issue。

## 使用场景

Open SWE 适用于多种软件开发场景：

- 自动化代码重构和优化
- 大规模代码库维护
- 跨仓库的批量代码更改
- 持续集成和部署自动化
- 代码审查辅助工具
- 技术债务管理和清理
