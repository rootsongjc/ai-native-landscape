---
name: Agent-Reach
slug: agent-reach
homepage: null
repo: https://github.com/Panniantong/Agent-Reach
license: MIT
category: rag-knowledge
subCategory: data-connectors
tags:
  - Data Connector
  - CLI
  - MCP
  - Web Scraping
description: >-
  一个让 AI 智能体够得着它们自身无法访问平台的 CLI：Twitter/X、Reddit、YouTube、
  GitHub、B 站、小红书、雪球等，返回干净的结构化数据，零 API 费用。
author: Panniantong
ossDate: '2026-02-24'
featured: false
status: tracked
---

## 简介

Agent Reach 让 Claude Code、Codex、OpenClaw 这类 CLI 智能体能够触达其自带搜索和网页读取覆盖不到的互联网角落：登录墙后的平台、视频里的内容、通用搜索覆盖很差的中文平台，以及需要整理成结构化数据的数据源。它把每个平台背后的工具预先装好、测好，智能体一条命令即可使用。

## 主要特性

- 一个 CLI 覆盖众多平台：`agent-reach <渠道> <动作>`，`agent-reach read <url>` 按链接自动选择渠道
- 默认渠道无需任何凭据：B 站（搜索、视频信息、字幕）、V2EX、GitHub（仓库、issue、含评论的 PR）、YouTube（字幕、语音转文字），以及通用网页搜索/阅读兜底
- 需登录的渠道：小红书、雪球、Boss 直聘、LinkedIn、Reddit；实验性渠道：Twitter、Facebook、Instagram
- 支持视频与播客转写，覆盖 YouTube 和小宇宙
- 需登录的平台使用 Agent Reach 自己的专用浏览器在后台运行；首次使用某网站时从 Chrome 复制该站登录态，不读密码库，也不改动原浏览器

## 使用场景

- 让智能体搜索登录墙后的小红书笔记、X/Twitter 动态或职位详情
- 提取 B 站和 YouTube 视频的字幕与转录文本，转写小宇宙播客
- 获取雪球行情、V2EX 帖子和 GitHub 仓库的结构化数据用于分析

## 技术特点

- Python 3.10+ 的 CLI，每个渠道暴露类型化动作（搜索、视频信息、热门榜、字幕、帖子阅读），直接返回智能体可用的结构化数据
- 登录墙平台使用一个从不弹窗的专用后台浏览器；首次使用某网站时，从用户 Chrome 复制该站点的 cookie 会话，原浏览器保持不变，也绝不读取密码存储
- 渠道按凭据需求分级：默认渠道装好 CLI 即可用，可选渠道需要登录或配置 Groq/OpenAI key 做语音转写，实验性渠道（twitter、facebook、instagram）明确标注
- 面向任意智能体设计——Claude Code、Codex、Hermes Agent、OpenClaw——以普通 CLI 形式被智能体调用
