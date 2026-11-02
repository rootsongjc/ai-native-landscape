---
name: caveman
slug: caveman
homepage: https://docs.caveman.so/caveman
repo: https://github.com/JuliusBrussee/caveman
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Token Optimization
  - Agent Skills
  - CLI
  - Prompt Engineering
description: 面向编码智能体的技能加本地代理组合，通过"穴居人"式压缩应答风格和在模型读取前压缩工具输出来削减 token 消耗，实测节省显著且答案质量不降。
author: JuliusBrussee
ossDate: '2026-04-04'
featured: false
status: tracked
---

## 简介

Caveman 让 AI 编码智能体说得更少、读得更少，同时代码保持原样。一条命令安装（`npx @caveman-ai/cli@latest`）即可为 Claude Code、Codex、Gemini CLI、OpenCode 等 30 多个智能体启用六个组件：压缩应答风格、模型读取前的日志与工具输出压缩、自动选择模型与推理力度、复用智能体已写脚本的 Blocks、浪费修复以及压缩浏览网页。Adobe Research、JetBrains、Elastic 的外部评测验证了 token 节省且质量无可测损失。

## 主要特性

- Say less：智能体以结构化的简短风格回答（同一修复从 63 token 降到 20，代码原样保留），提供从 `/caveman` 到 `/megacave` 的多档强度
- Read less：日志、JSON、CSV、测试输出在模型读取前先压缩——54 次 Claude Code 实测会话输入 token 减少 33.2%
- Auto：按请求自动选择模型与推理力度，实测比顶配 Opus 便宜 54% 且任务得分相同
- Blocks：智能体保留自己写过的脚本并重复运行，而非重新读取输出（一次测试运行从 397 token 降到 76）
- Waste fixes 定位 token 去向并修复，包括暂停期间保持提示缓存温热
- Browse 以压缩形式返回网页（单页缩小 129.8 倍）

## 使用场景

- 在不改变提示习惯的前提下降低日常编码智能体会话的成本与延迟
- 避免订阅配额和速率限制打断长时间的智能体运行
- 一次配置即可在 Claude Code、Codex、Gemini CLI、OpenCode 等多个 CLI 中使用同一套工作流
- 团队需要可复现的 token 节省基准，而非盲目缩短回答

## 技术特点

- 通过 npm 包 `@caveman-ai/cli`（Node 22.13+）安装；CLI 自动检测已安装的智能体及其登录状态，注入提示技能并在本机以你自己的密钥运行一层本地代理
- 压缩语音并非残缺语法，而是基于 ASD-STE100 受控英语的固定应答结构：结论先行、每句一个意思、最多 20 词、主动语态；否定词、数字与单位绝不丢弃，代码、命令、路径与报错原文逐字保留
- 用户提示永不被改写——外部研究表明压缩用户提示会适得其反；压缩只作用于智能体读取的内容（工具输出）与运行依赖（脚本）
- 代理层在 tool_result 负载（日志、JSON、CSV、测试输出）到达模型前先行压缩，将网页转译为紧凑形式，并在会话暂停期间保持服务商提示缓存温热
- 六个组件可单独开关（`caveman status`、`caveman off browse`）；仅 Auto 模型选择需要账号
