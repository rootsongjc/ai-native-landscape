---
name: TeamAI CLI
slug: teamai-cli
homepage: null
repo: https://github.com/Tencent/teamai-cli
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - MCP
  - Dev Tools
  - Team Collaboration
description: 腾讯开源的 TeamAI CLI 通过共享 Git 仓库统一管理团队的技能、规则、MCP 与知识，并分发给 Claude Code、Codex、Cursor 等各类 AI 编码 Agent。
author: Tencent
ossDate: '2026-04-27T09:42:49.000Z'
featured: false
status: tracked
---

## 简介

TeamAI CLI 是腾讯开源的团队 AI 原生化管理工具，将技能、规则、文档、Agent、Hook 与 MCP 配置统一存放在共享 Git 仓库中，分发给团队每位成员的 AI 编码工具。管理员通过合并请求审核发布更新，成员的 Agent 在会话启动时自动拉取最新配置。在分发之外，它还将团队经验沉淀为可检索的知识库，并基于会话摩擦信号自动提炼共享经验。

## 主要特性

- 集中式 Harness 分发：技能、规则、Agent、Hook、MCP 配置、环境变量与包同步到 Claude Code、Codex、Cursor、CodeBuddy、OpenCode、Qoder 等工具
- `push → MR → 审核 → pull` 工作流：管理员通过合并请求发布变更，SessionStart Hook 自动将最新 Harness 拉取到成员本地工具
- 团队知识召回：任务执行前由 AI 子代理检索积累的经验与代码库知识图谱，返回带源码路径引用的结构化摘要
- 基于摩擦的经验共享：Stop Hook 依据打断次数、工具调用拒绝与重试对会话评分，触发 `/teamai-share-learnings` 将经验推送到团队仓库
- 管理员分发控制：角色到命名空间映射、标签订阅、订阅其他团队或公共技能仓库

## 使用场景

- 跨多种 AI 编码 Agent 统一团队的提示词、规则与工具配置
- 通过审核制 MR 流程推广经过验证的技能与最佳实践，避免各自复制
- 让新 Agent 在执行任务前召回历史排障经验与代码库结构
- 通过周报、会话摘要与实时仪表盘追踪团队 AI 使用情况

## 技术特点

- 以 npm 包形式全局安装（`teamai`），Harness 资源存储于 Git，兼容 GitHub、GitLab、GitCode、CNB、TGit 及私有 Git 服务
- 召回检索结合 BM25 打分与图增强重排序，先经相关性预检（`teamai recall --check`），与团队知识无关的任务直接跳过检索
- 代码库知识图谱由双通道抽取构建：WASM tree-sitter AST 通道（TypeScript/JavaScript、Python、Go）解析 `DEPENDS_ON` / `REFERENCES` / `IMPLEMENTS` 边并附带置信度权重，正则启发式通道覆盖其余语言并自动降级兜底
- 团队改进工具链：`teamai recall maintenance` 归档低置信度经验并标记过期技能；`teamai digest`/`session save`/`teamai dashboard` 输出 Token 用量、干预率与知识库健康度
- 会话摩擦评分只统计高信号事件（用户打断、工具调用被拒、失败工具重试），常规长会话不会触发经验提炼提示
