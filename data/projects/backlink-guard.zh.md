---
name: backlink-guard
slug: backlink-guard
homepage: https://pypi.org/project/backlink-guard/
repo: https://github.com/zhuyansen/backlink-guard
license: MIT
category: applications-products
subCategory: productivity-tools
tags:
  - SEO
  - Backlinks
  - MCP
  - Agent Skills
  - Productivity
description: >-
  backlink-guard（外链检测）在你把网站提交到目录、awesome 列表或客座文章站之前先查这个外链来源：按 Google
  链接垃圾政策给每个站一个建议（跳过/先看看/只免费提交/价值低/可以提交）和带依据的结论。链接上线后核实是否传权重，体检自己的外链画像，找出链向竞品却没链向你的站——支持命令行、Agent
  Skill、Claude Code 插件和 MCP 服务器四种用法。
author: zhuyansen
ossDate: '2026-10-13'
featured: false
status: tracked
---
## 详细介绍

backlink-guard 是一款"告诉你别往哪投"的 SEO 工具。在向目录、awesome 列表或客座文章站提交之前，它先审查来源：每个站得到一个建议（跳过、先看看、只免费提交、价值低、可以提交）和带依据的结论，依据是按 Google 链接垃圾政策逐条读出的原文或数字。链接上线后，它核实列表是否传权重、链接在页面什么位置；还能体检自己的外链画像，标记 Google 认定为链接垃圾的模式（含同一运营者名下的站点群），列出落在 404 或跳转不当页面上的外链并给出 301 建议，找出在你的关键词上排名的页面、链向竞品却没链向你的站，以及 Google AI 概览和 AI 助手引用了谁。

它以命令行、Agent Skill、Claude Code 插件和 MCP 服务器（10 个工具）四种形态提供，已上架官方 MCP Registry 和 skills.sh。它自己从不提交任何东西。

## 主要特性

- **提交前的来源审查**：给出建议动作（跳过/先看看/只免费提交/价值低/提交），附链接政策、价值与结论三类判定，每条依据都引用原文或数字
- **上线后核实**：链接上线后检查列表是否传权重、链接处在页面什么位置
- **外链画像体检**：按 Google 链接垃圾政策标记自己画像中的问题模式，包括共享模板与分析账号的同运营者站点群
- **失效外链找回**：`lost` 列出落在 404 或错误跳转页面上的外链，逐条给出 301 建议
- **竞品与 AI 答案情报**：找出在你关键词上排名的页面、链向竞品却没链向你的站、AI 概览与 AI 助手引用的来源
- **智能体优先封装**：命令行、Agent Skill、Claude Code 插件、MCP 服务器（10 个工具）四形态；页面检查无需 API key

## 使用场景

- **目录提交决策**：一次运行审查一批候选目录再决定投入——卖 follow 链接的只免费提交，停放域名直接跳过
- **外链清理**：定期体检画像中的链接垃圾模式，按 301 建议修复失效或错误跳转的目标页
- **链接差距分析**：查看哪些站链向竞品却没链向你，AI 答案在你的关键词下引用了谁
- **智能体 SEO 工作流**：让 Claude Code 或任意 MCP 客户端把审查与体检纳入更大的智能体流程

## 技术特点

- **零依赖 Python**：Python 3.10+，无第三方依赖；`uvx backlink-guard vet …` 免安装直接运行
- **分层证据模型**：无 key 模式读取站点自身页面（死亡、停放、卖链接、链接交换、出站链接、共享模板、分析账号、Wayback 首个快照等检查）；付费信号（评分、访问量、收录状态、垃圾分、搜索历史、外链、AI 回答）走用户自己的 Glasser/AIsa key，可选 GoAnyAPI
- **确定性判定规则**：一条 avoid 依据即判 avoid，两条 caution 依据判 caution，风险分 avoid 记 3 分、caution 记 1 分；规则在 100 个从未见过的留出集上验证（0.4.1 版将 40 个 Ahrefs 标记垃圾站中的 37 个挡在"提交"之外）
- **跨站运营者识别**：共享页面模板或分析/广告账号的站点——彼此之间或与本机早前检查过的站点——被标记为同一运营者；共享垃圾链接列表缺少它们时，报告末尾给出预填好的上报表单链接
- **四种交付面**：同一核心以 CLI、Agent Skill（Agent Skills Hub 安全评级）、Claude Code 插件、10 工具 MCP 服务器（注册名 io.github.zhuyansen/backlink-guard）交付
- **无提交副作用**：工具自身从不提交任何内容，只读取、判定、报告
