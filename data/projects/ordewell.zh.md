---
name: Ordewell
slug: ordewell
homepage: https://ordewell.ai
repo: https://github.com/ordewell/ordewell
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Task Orchestration
  - Coding Agents
  - Multi-Agent
  - CLI
  - TUI
  - VS Code Extension
description: 面向编码智能体的任务编排器：将一个目标拆解为可编辑的任务计划，每个任务指定各自的运行器、模型与模式，在并行 git worktree 中执行并在合并前经过验证。
author: ordewell
ossDate: '2026-07-31'
featured: false
status: tracked
---

## 简介

Ordewell 将一个目标转化为在任何代码运行之前都可阅读、可修改的计划。规划器先研究你的仓库，就模糊之处向你提问，然后返回一张任务依赖图，每个任务都标明将使用的编码智能体、模型和思考力度。相互独立的任务并行执行，各自在独立的 git worktree 中进行，成果在你审查之前不会进入你的分支。开箱即用支持 Claude Code、Codex 和 OpenCode，并可在同一计划内自由混用。

## 主要特性

- 可编辑的计划——修改任意任务的提示词、运行器、模型、力度或模式，增删任务、重接依赖，无需再与模型往返一轮
- 每个任务匹配合适的模型——安全重构与 README 更新使用不同模型，所有分配在花费任何 token 之前可见
- 隔离执行——每个改代码的任务在自己的分支上工作；通过的任务按计划顺序合入单一集成分支，何时合并由你决定
- 操作类任务落在正确的位置与顺序——部署、云 CLI 调用或推送作为 ops 任务在你自己的检出中运行，并等待其依赖的变更合并后才执行
- 基于证据的完成判定——完成由运行器自身的完成信号（结构化传输上的工具调用，回退到输出中的完成标记）决定，绝不依赖模型对自身工作的自评
- 只读规划器——它只读、提问、规划；会改动仓库的命令一律拒绝

## 使用场景

- 将功能目标（"加限流、补测试、写文档"）拆成有序计划，由 Claude Code / Codex / OpenCode 混合编队在并行 worktree 中执行
- 在同一计划内为安全关键任务分配昂贵模型、为文档任务分配廉价模型，合并前由人审查
- 编排运维步骤（部署、推送），使其仅在所依赖的代码变更落地之后运行

## 技术特点

- npm 包 `@ordewell/cli`，提供终端 UI、VS Code 扩展（自带核心）、脚本化 CLI 与本地 API，全部共享同一核心
- 基于 git worktree 的任务隔离：独立任务在专属分支上并行执行，集成按计划顺序落在单一集成分支
- 完成信号检测运行在结构化传输（Ordewell 自有工具）上，以运行器输出中的完成标记作为回退——结构化检测与标记检测刻意独立于模型自述
- 规划器被限制为对仓库只读，疑问必须回传给用户而不是自行猜测
- 规划器可以复用你已付费的编码智能体（无需额外 API key），也可使用 25 家提供商任意一家的 API key
- 要求 Node.js 20+ 与 git；tmux 为可选（终端传输模式下每任务一个终端窗口）；Windows 终端 UI 在 WSL 下运行
