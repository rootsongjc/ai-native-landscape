---
name: Browser Harness
slug: browser-harness
homepage: https://browser-use.com
repo: https://github.com/browser-use/browser-harness
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Automation
  - Tool
description: Browser Harness 是一个基于 CDP 构建的极简自愈式浏览器套件，赋予 LLM 完全的自由来完成任何浏览器任务，代理可以在运行中编写缺失的功能。
author: Browser Use
ossDate: '2026-04-17T01:56:15Z'
featured: false
status: tracked
---
## 详细介绍

Browser Harness 是由 Browser Use 团队开源的一款极简浏览器套件，基于 Chrome DevTools Protocol（CDP）直接构建，旨在为 LLM 代理提供完整的浏览器操控能力。其核心理念是"自愈"——当代理在执行浏览器任务时发现缺少某个功能（例如文件上传），代理可以实时编辑套件代码并添加所需函数，无需人工干预。整个实现仅约 592 行 Python 代码，包含安装引导、日常使用说明、运行入口、工具函数以及 CDP 守护进程。

## 主要特性

- 自愈能力：代理在运行中发现缺失功能时可直接编辑 helpers.py 并补全，实现真正的自我修复。
- 极简设计：约 592 行 Python，无框架依赖，一个 WebSocket 直连 Chrome。
- CDP 原生：直接基于 Chrome DevTools Protocol 构建，无中间层抽象。
- 远程浏览器：支持通过 cloud.browser-use.com 使用远程浏览器实例，免费层提供 3 个并发浏览器。
- 技能系统：提供 domain-skills 和 interaction-skills 目录，预置常见浏览器任务的技能。

## 使用场景

- 让 Claude Code、Codex 等 AI 编码代理直接操控浏览器完成 GitHub 操作、表单填写、数据抓取等任务。
- 在子代理或部署场景中使用远程浏览器，实现无头浏览器自动化。
- 作为教学与研究案例，展示如何用最少代码实现 LLM 与浏览器的深度集成。
- 自动化 Web 测试与端到端验证，利用代理的智能判断替代传统脚本。

## 技术特点

- 采用 CDP WebSocket 连接，通过 daemon.py + admin.py 实现守护进程与桥接，约 361 行。
- run.py 作为入口仅 36 行，helpers.py 约 195 行提供初始工具调用，代理可自由扩展。
- 提供 install.md 和 SKILL.md 两份文档，分别用于首次安装与日常使用，代理可直接读取并执行。
- 支持与 Claude Code、Codex 等 CLI 代理无缝集成，通过提示词即可启动。
