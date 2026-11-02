---
name: archify
slug: archify
homepage: https://archify.si
repo: https://github.com/tt-a1i/archify
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Agent Skills
  - Diagrams
  - Visualization
  - Software Architecture
description: 一个智能体技能，把想法、方案或代码库转换为可交互的独立 HTML 图表——架构图、时序图、工作流、ERD 等——附带类型化 JSON 源、校验凭证，并支持通过对话迭代修改。
author: tt-a1i
ossDate: '2026-04-15'
featured: false
status: tracked
---

## 简介

Archify 是面向 Claude Code、Codex、Cursor 和 OpenCode 的智能体技能，能把你想要理解、规划或分享的任何内容变成可交互的可视化作品。从一句话描述出发，或让智能体阅读一个代码仓库，Archify 就会生成一份独立可交互的 HTML 文件，供你探索、定制和分享。它还能生成"讲解页"（explainer）：结论先行，每个问题一个面板，内含经过校验的图表和带编号的来源。

## 主要特性

- 十种图表类型：架构图、工作流、时序图、数据流、生命周期、ERD、类图、树、时间线与瀑布图，每种都附带提示词指引
- 源码背书：在固定 commit 上追溯真实仓库生成图表，保留类型化 JSON 源，便于针对性迭代（"加上 Redis""高亮回滚路径"）
- 讲解页把答案组织成一个 HTML 页面：结论先行，步骤与所讲解的图表并排，论断引用编号来源
- Architecture Delta 以机器凭证对比校验过的前/后/差异快照，服务于设计评审与 PR 审查
- 独立 HTML 输出，支持明暗主题、节点详情、路径追踪、PNG/WebP/JPG 导出与分享卡片，无需安装即可查看
- 零依赖 CLI 提供指引与校验（`node archify/bin/archify.mjs guide ...`）

## 使用场景

- 把仓库的运行时架构映射为可交互图表，用于新人上手或文档沉淀
- 向团队讲解缓存未命中请求路径、智能体工作流或事故时间线
- 为设计评审和问题排查产出带证据的一页式答案
- 把旅行计划、学习地图等非代码规划变成可交互作品

## 技术特点

- 以智能体技能形式实现：由智能体遵循的 markdown 指令，加上由智能体填充的类型化 JSON 图表 schema；JSON 源被保留，后续提示可在结构层面修订图表
- 零依赖 Node CLI（`archify/bin/archify.mjs`）负责校验图表源并渲染；`compare` 子命令生成带机器凭证的 Architecture Delta HTML
- 图表以独立 HTML 文件交付，内嵌可交互查看器——主题切换、focus/reach 追溯、路径高亮与导出全部在浏览器内完成，查看无需安装 Archify
- 仓库追溯将图表锚定到具体 commit；论断引用编号来源，仓库摘要在源码卡片中打开
- 校验采取 fail-closed 策略：`deployment-ownership` 等可选 profile 缺少显式事实时拒绝渲染，也绝不探测线上基础设施；更新检查只读取固定清单，可通过 `ARCHIFY_UPDATE_CHECK_DISABLED=1` 关闭
