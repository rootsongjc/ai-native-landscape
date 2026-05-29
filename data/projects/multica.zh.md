---
name: Multica
slug: multica
homepage: https://multica.ai
repo: https://github.com/multica-ai/multica
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Application
  - Code Agent
  - UI
description: Multica 是一款原生桌面客户端，通过可视化界面为所有用户带来编程智能体的能力，支持多模型/多智能体协作，数据完全本地化。
logo: ''
author: multica-ai
ossDate: '2026-01-13T17:59:46Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Multica 是一款面向知识工作者的原生桌面客户端，旨在通过可视化界面让非技术用户也能使用编程智能体的强大能力。项目名称灵感来源于 1964 年诞生的 Multics（Multiplexed Information and Computing Service）操作系统——正如 Multics 解决了计算资源的多用户分时共享问题，Multica 旨在解决知识工作者面临的多模型、多智能体协作问题。当前 95% 的知识工作者由于终端交互门槛、本地环境配置障碍以及隐私信任问题，无法使用 Claude Code、Codex CLI、OpenCode 等编程智能体，Multica 通过可视化桌面界面弥合了这一鸿沟。

## 主要特性

- 原生 macOS 应用，界面简洁直观，适合非技术用户使用。
- 通过 Agent Client Protocol（ACP）支持多种 AI 智能体，包括 Claude Code、OpenCode、Codex CLI 等。
- 本地优先架构，数据不离开用户机器，保障敏感业务数据的安全与隐私。
- 内置会话管理与历史记录功能，支持会话恢复与断点续接。
- 提供完整的命令行工具，方便高级用户与开发者测试和调试。

## 使用场景

- 非技术背景的知识工作者需要借助 AI 完成数据分析、报告生成、自动化任务等复杂工作。
- 对数据隐私有严格要求的企业环境，无法将敏感信息上传到第三方云服务。
- 需要在多个 AI 智能体之间切换和协作以提高生产力的场景。
- 开发者希望通过可视化界面快速测试和验证编程智能体的能力。

## 技术特点

- 基于 Electron 构建，采用 React 渲染层与 Node.js 主进程架构，实现跨平台桌面体验。
- 通过 ACP SDK 实现智能体通信，支持 stdio 协议与子进程管理。
- 自主管理会话层，客户端侧存储原始会话数据，支持快速加载与恢复。
- 采用 Apache-2.0 开源协议，支持 macOS、Windows、Linux 多平台构建。
