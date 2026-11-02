---
name: ponytail
slug: ponytail
homepage: https://ponytail.dev
repo: https://github.com/DietrichGebert/ponytail
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Agent Skill
  - Prompt Engineering
  - YAGNI
  - Code Review
description: >-
  一个让 AI 智能体像团队里最“懒”的资深工程师一样思考的技能——只写任务真正需要的
  代码、优先复用已有实现，绝不削减校验、安全和可访问性。最好的代码是你从未写过的
  代码。
author: DietrichGebert
ossDate: '2026-06-12'
featured: false
status: tracked
---

## 简介

Ponytail 把团队里那位最“懒”的资深工程师装进你的 AI 智能体。它的准则从来不是“token 最少”，而是：只写任务需要的代码，优先复用仓库和平台已有的能力，并且绝不削减校验、错误处理、安全和可访问性。在其公开基准测试（Claude Code、39 个任务、每任务 5 次运行）中，这套纪律带来了减少 53% 的代码、节省 45% 的 token，98% 的高风险逻辑带测试交付（不装技能时为 68%）。

## 主要特性

- 复用优先：在写任何新代码之前，智能体先寻找仓库中已有的组件或平台自带的能力
- `/ponytail-review` 阅读改动触及的代码而不只是 diff，检查缺陷、安全、真实负载、缺失测试、性能以及可以删掉的部分
- `/ponytail-audit` 先梳理全仓库的入口点、数据流和预期负载，再对发现排序并指出最先修复什么
- 状态带（band）：Claude Code 提示框上方的条带，实时显示单个任务的成本、token、智能体耗时、代码复用率，以及上次改动后测试是否通过
- 看板（board）：本地页面汇总所有项目、所有任务的成本、智能体耗时、token 和测试状态，并可导入历史 Claude Code 会话
- 通过 Claude Code 插件和 Cursor rules 两种形态支持约 20 种智能体

## 使用场景

- 阻止智能体手工造轮子——仓库或浏览器里明明已有现成能力
- 获得资深工程师式的评审，抓住 diff 之外的文件被改坏的问题
- 追踪每个智能体任务在 token、金钱和智能体时间上的真实开销

## 技术特点

- 以 Claude Code 插件（npm 包 `@dietrichgebert/ponytail`）或 Cursor rules 形式安装，使同一套行为指令集可在约 20 种智能体中加载
- 指令集把 YAGNI 编码为决策流程：写代码前先盘点已有实现（仓库组件、平台特性），并把校验、错误处理、安全、可访问性视为即使缩减范围也不可妥协的底线
- `/ponytail-review` 把评审窗口从 diff 扩大到改动触及的代码，每条发现按“代码做了什么、哪里会出问题、怎么修、不修会怎样”的结构输出；`/ponytail-audit` 在梳理入口点和数据流之后对全仓库执行同样的检查
- 状态带挂接 Claude Code 2.1.290+ 的 UI 状态来渲染逐任务实时指标；看板是读取 `~/.config/ponytail/band/` 会话数据的本地页面，`/ponytail band import` 可回填历史 Claude Code 会话——所有数据都留在本机
