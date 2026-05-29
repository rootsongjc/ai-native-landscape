---
name: Plannotator
slug: plannotator
homepage: https://plannotator.ai
repo: https://github.com/backnotprop/plannotator
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Code Agent
  - Dev Tools
  - Tool
  - UI
description: Plannotator 是一款面向 AI 编码智能体的交互式计划与代码审查工具，支持可视化标注、团队协作和一键反馈，兼容 Claude Code、Copilot CLI、Gemini CLI 等主流智能体。
logo: ''
author: backnotprop
ossDate: '2025-05-01'
featured: false
status: tracked
---

## 详细介绍

Plannotator 是一款专为 AI 编码智能体设计的交互式计划与代码审查工具。当 AI 智能体完成规划后，Plannotator 会在浏览器中打开可视化界面，让用户通过内联标注（删除、插入、替换、评论）对计划进行审查，批准后智能体继续执行，请求修改后标注内容会以结构化反馈形式返回给智能体。

该工具兼容 Claude Code、Copilot CLI、Gemini CLI、OpenCode、Pi 和 Codex 等主流编码智能体，通过内置 Hook 机制自动激活。支持私有化部署，共享链接采用端到端加密，确保团队协作安全。

## 主要特性

- **可视化计划审查**：通过内置 Hook 机制，在智能体完成计划后自动在浏览器中打开可视化界面，支持内联标注和审批/拒绝操作。
- **计划差异对比**：智能体修订计划时自动展示变更内容，方便追踪迭代过程。
- **代码审查**：支持 `/plannotator-review` 命令查看 Git 差异或远程 PR，打包标注并借助 AI 辅助代码审查。
- **文件标注**：通过 `/plannotator-annotate` 命令标注 Markdown、HTML、URL 或文件夹，直接将反馈发送给智能体。
- **团队协作共享**：小型计划编码在 URL 哈希中，不涉及服务器；大型计划使用端到端加密（AES-256-GCM）的短链接服务，自动 7 天过期删除。
- **多智能体支持**：兼容 Claude Code、Copilot CLI、Gemini CLI、OpenCode、Pi、Codex 六大编码智能体。

## 使用场景

- **智能体计划审查**：在 AI 编码智能体执行前可视化审查和修改计划，确保方案符合预期。
- **代码差异审查**：查看 Git 差异或 GitHub PR，结合 AI 辅助进行代码审查并反馈给智能体。
- **团队协作评审**：将计划或代码审查结果私有分享给同事，收集团队标注后导入并反馈给智能体。
- **规范文件标注**：对项目规范、需求文档等进行标注，将结构化反馈发送给智能体作为上下文。

## 技术特点

- 基于 Hook 机制与多种编码智能体集成，安装后自动激活计划审查流程。
- 端到端加密共享（AES-256-GCM），零知识存储架构，类似 PrivateBin。
- 小型计划使用 URL 哈希编码，无需服务器存储。
- 支持自托管部署，完全开源（Apache-2.0 / MIT 双许可）。
- 提供 SHA256 校验和 SLSA 来源验证，确保二进制安全性。
