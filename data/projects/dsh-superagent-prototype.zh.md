---
name: DSH Superagent
slug: dsh-superagent-prototype
homepage: null
repo: https://github.com/deepseek-ai/dsh-superagent-prototype
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Agents
  - Coding Agent
  - Autonomous Agents
  - Dev Tools
description: >-
  DSH Superagent 是 DeepSeek 的研究原型，一个面向单个 GitHub 仓库的主动式编程智能体，以 DeepSeek Harness
  包的形式交付。它监听 GitHub（可选飞书），在被允许的人提出请求时开启工作项，在独立的智能体会话和工作目录中执行，并在原始对话中答复（例如提交一个拉取请求），其授权模型以尽量少占用人类注意力为目标。
author: deepseek-ai
ossDate: '2026-10-31'
featured: false
status: tracked
---
## 详细介绍

DSH Superagent 是 DeepSeek 的研究原型，探索"超级智能体"设计——迈向更自主的智能体系统，与文章《Exploring Super-agent Design: Towards a More Autonomous Agent System》一同发布。它是作用于单个 GitHub 仓库的主动式编程智能体，以 DeepSeek Harness 包的形式交付。当被允许的人在 GitHub（或可选的飞书）上向智能体提出请求时，它会开启一个工作项（Ticket），在独立的智能体会话和工作目录中执行，并在原始对话中答复，例如提交一个拉取请求。Web 面板展示哪些事项需要人来处理。

该项目同时是一种与智能体协作的方式：尽可能少占用人类注意力，尽可能多地交付价值。智能体只在被请求或团队编写的规则允许时行动，只在有人必须行动或能用上结果时发声。项目明确为研究代码，大部分工程由编程智能体完成，适合作为研究自主智能体运行的参考，而非生产级产品。

## 主要特性

- **主动式工作接收**：监听 GitHub（可选飞书），被允许之人的请求会开启带 Mandate 的 Ticket，在专属智能体会话和工作目录中执行
- **构造级授权**：允许列表、团队编写的规则和按 Ticket 的 Mandate 决定谁可以发起工作、工作可以包含什么；消息和引用文档只是决策的输入，无法改变权限
- **低打扰运行**：智能体只在被请求或规则允许时行动，只在有人必须行动或能用上结果时发声
- **人机协同面板**：Web 面板呈现需要人的事项——工作者提出的问题、等待决策的后续事项，以及可接受、转接或忽略的 Eval 候选
- **对话原生答复**：结果回到原始对话线程（例如拉取请求），Ticket 跟随其开启的线程直至关闭
- **智能体引导安装**：多步安装由编程智能体按 SETUP.md 驱动，每次只问一个简短问题，展示完整计划后完成安装与配置

## 使用场景

- **自主仓库维护**：让智能体承担单个仓库的日常编码工作——修复、功能与后续跟进——以拉取请求落地
- **团队智能体运营**：运行服务于整个团队的智能体，同时严格遵守谁可发起工作、每个工作项可做什么
- **超级智能体研究**：作为研究自主智能体系统的参考实现——接收、评估、执行与授权边界
- **低打扰工作流实验**：原型验证"最少注意力、最大价值"的智能体工作流，智能体只在必要时打断人

## 技术特点

- **Engine 单一写入者**：`Engine`（`src/core/engine.ts`）是 Triggers、Threads、Decisions、Tickets、Assignments 的唯一写入者；所有方法同步执行，每条命令在单个事务中变更聚合，调用方仅获得其角色的 Engine 视图（`EngineForSources`、`EngineForMainSession`、`EngineForPeople`、`EngineForSettings`、`EngineForExecutor`）
- **端口与适配器并发模型**：端口（`Repositories`、`Policy`、`SourceScope`、`Assessor`、`Executor`、`Outbox`）在事务内入队外部工作，适配器仅在提交后执行，保证领域状态与副作用一致
- **五段式 Engine 分解**：Intake、Evals、Tickets、Assignments、Replies 五个引擎部件依赖严格单向；命令用祈使命名（`stopTicket`），适配器上报的事实用过去式命名（`assignmentStarted`）
- **Eval 门控与 Mandate**：`MasterAssessor` 将排队 Trigger 评估为决策（accept、stop、ignore、unavailable）；区分被允许之人的显式请求与来自机器人的推断候选，每个 Ticket 的 Mandate 约束 Assignment 范围
- **事务性 Outbox**：Outbox 在单个事务中保存消息回执并入队 `reply` 效应；消息在其 Source 关闭期间等待，会话消失则丢弃
- **Pass 循环运行时**：`Runtime` 为组合根——锁定状态目录、打开 Store，每次运行一个 pass（每两秒及按需触发）：先处理到期效应，再执行 `Engine.evaluateDue`
- **Source 插件架构**：GitHub 与飞书作为 Source 插件经窄接口 `SourceHost` 注入，`SourceRegistry` 将 Trigger 扇入 Engine，DeepSeek Harness 事件驱动卡片、视图与收件箱投递
- **无授权订阅**：订阅线程上的所有消息作为上下文到达其 Ticket——绕过门控——但不授予新权限；后续事项由 Ticket 的 Executor 持有，或交回重新 Eval
- **工程实践**：TypeScript 代码库，pnpm 管理；`pnpm check` 一次运行类型检查、测试与构建
