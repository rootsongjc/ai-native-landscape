---
name: distilly
slug: distilly
homepage: null
repo: https://github.com/titanwings/distilly
license: MIT
category: training-optimization
subCategory: prompt-quality
tags:
  - Agent Skills
  - Knowledge Distillation
  - Personas
  - Claude Code
description: >-
  将一个人的经验、判断力、表达方式与工作习惯提炼为可移植、有据可查的"人物画像"（Person Profile），并打包成任意兼容
  Agent 或机器人都能安装调用的 Agent Skill。前身为 Colleague Skill（同事 Skill）。
author: titanwings
ossDate: '2026-03-30'
featured: false
status: tracked
---

## 简介

Distilly（前身 Colleague Skill / 同事 Skill）是面向 AI Agent 的人物建模层。它把你提供的材料——聊天记录、文档、访谈、公开资料——转化为一份可复用的人物画像，画像由可观察的经验、决策模式、表达方式与工作习惯构成，并打包成 Agent Skill 供支持的宿主安装调用。它明确不宣称"克隆"材料背后的人；画像中的每个论断都能回溯到来源。

## 主要特性

- 三类人物家族，各自有独立的素材采集策略、分析维度与画像结构：同事（colleague，工作技能 + 人设）、亲密关系（relationship，表达模式、情绪触发点、冲突与修复模式）、名人（celebrity，六维度研究工具链）
- 丰富的数据源：Lark API、钉钉、Slack、公开 X 帖子、微信聊天记录导出、PDF/图片、Lark JSON 导出、`.eml`/`.mbox` 邮件、Markdown 或直接粘贴
- 在八个 Agent 宿主上支持原生本地 Skill 发现，包括 Claude Code、Codex、OpenClaw、Hermes Agent、DeepSeek Harness、Pi、Grok Build 与 OpenCode
- 自我画像流程：简短访谈生成你自己的画像，完整画像保留在本地，仅向 Agent 每次会话读取的上下文文件追加一段摘要

## 使用场景

- 同事离职、导师毕业、队友转岗时，把他们的"打法"和工作上下文沉淀为团队 Agent 仍可请教的技能
- 把人设带入个人 Agent，避免从零开始（当前支持 Grok Bot 保存式 Skill；Meta Muse 与 OpenAI Dots 的画像交接在规划中）
- 把公众人物或喜爱的作者研究成一项技能，基于其可观察的决策与表达来回答问题

## 技术特点

- 以符合 agentskills.io 标准的 Agent Skill 形式实现：创建器 Skill 命名为 `distilly`，安装到各宿主的技能目录；生成的画像以 `{character}-{slug}` 命名输出为技能
- 名人流水线运行六维度研究工具链（作品、访谈、决策、表达 DNA、外部评价、时间线），串联字幕提取、转录清理、研究合并与质量检查各环节
- 采集方式按家族区分：Lark 与 Slack 走 API 拉取消息，钉钉因 API 不支持历史消息而回退到浏览器采集，微信读取 WeChatMsg 或 PyWxDump 导出的 SQLite，名人研究可接入按量计费的第三方 X 数据服务
- 所有者的画像数据保存在本地 `~/.distilly/owner/profile.md`，仅向宿主的会话上下文文件（Claude Code 的 `~/.claude/CLAUDE.md`、OpenClaw 的 `USER.md`）追加简短摘要；工具链基于 Python 3.9+
