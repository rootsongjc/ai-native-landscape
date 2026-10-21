---
name: New Term Radar
slug: new-term-radar
homepage: https://pypi.org/project/new-term-radar/
repo: https://github.com/zhuyansen/new-term-radar
license: MIT
category: applications-products
subCategory: productivity-tools
tags:
  - AI Trends
  - SEO
  - Keyword Research
  - Google Trends
  - MCP
  - Agent Skills
description: 新词雷达以 CLI、三个 Agent Skill、Claude Code 插件与 MCP 服务器形态运行，在 AI 新模型、新产品、新仓库名字最早出现的地方（X、Hugging Face 热门、GitHub 爆发仓库、导航站 sitemap）捕获它们，再用 Google Ads 搜索量与 Google Trends 估算每个名字背后的搜索需求，给出「优先 / 观察 / 跳过」标记。
author: Yansen Zhu
ossDate: '2026-10-12'
featured: false
status: tracked
---

## 简介

新词雷达每天产出一份正在起量的 AI 新名字报告——新模型、新产品、新工具、新仓库——在它们最早被提到的地方捕获，赶在关键词工具收录之前。面向围绕新术语做页面、内容或产品的人：AI 工具站 SEO、Newsletter、导航站，在名字出现当天而不是两周后知道它。每条线索 14 天后自动用 Google Trends 复盘，工具会报告自己的命中率。

## 主要特性

- 按出现顺序排列的六类信号源：X 上关注账号的首次提及（60 天窗口）、Hugging Face 热门模型与 Space、GitHub 爆发仓库、导航站 sitemap 新 URL 术语提取
- GitHub 爆发检测：仓库创建不足 14 天且日均 200+ star（或较昨日 +400），并自动补充用户会用的搜索变体
- Sitemap 差异分析：提取多个新 URL 共有而旧 URL 罕见的词
- 用 Google Ads 搜索量与 Google Trends 为关键词定量，标记「优先 / 观察 / 跳过」
- 自我验证：每条线索 14 天后对照 Google Trends 复盘，报告自身命中率
- 以 CLI、三个 Agent Skill、Claude Code 插件和 MCP 服务器四种形态运行

## 使用场景

- 在关键词工具收录之前，围绕 AI 新术语做 SEO 页面或内容
- Newsletter 与 AI 工具导航站第一时间追踪新模型、新仓库
- 智能体驱动的调研：从 Claude Code 或任意 MCP 客户端直接查询，不离开对话

## 技术特点

- 按出现顺序读取信号——社交首次提及、Hugging Face 热门、GitHub 爆发、sitemap 扩散——Google Trends 仅作最终验证步骤，反转了常规关键词工具从搜索量出发的流水线
- Hugging Face 信号将量化副本与模型自带的演示 Space 归并到基础模型名下，避免线索重复
- Sitemap 分析将新 URL 词汇与同站旧 URL 对比，隔离真正的新术语
- 14 天延迟复盘循环对照 Trends 曲线为过往线索打分并公布命中率
- 免费信号（Hugging Face、GitHub、sitemap）无需任何 API key，纯 Python 标准库运行；付费查询（X 帖子、搜索量、Trends）走用户自己的 AIsa API key
- 通过 PyPI、官方 MCP Registry 及 Claude Code 插件清单分发，仓库内置 skills/ 与 tests/
