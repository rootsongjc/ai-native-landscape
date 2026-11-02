---
name: ECC
slug: ecc
homepage: https://ecc.tools
repo: https://github.com/affaan-m/ECC
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Claude Code
  - Agent Skills
  - Developer Tools
description: >-
  智能体 harness 性能优化系统：通过 71 个智能体、314 个技能、钩子、记忆与
  AgentShield 安全扫描，让编码智能体遵循“计划、测试、实现、评审、验证、记忆、改进”
  的完整工程闭环。
author: affaan-m
ossDate: '2026-01-18'
featured: false
status: tracked
---

## 简介

ECC 把编码智能体变成一套有协作体系的工程系统：先规划再构建、用测试验证改动、在全新上下文中评审自己的工作、记住重要事项，并把反复出现的成功经验沉淀为可复用的技能和工作流。这一流程无需在每次提示中重建，安装一次即成为智能体的工作方式。它与 Claude Code 配合最佳，为 Codex 和 Qoder 提供原生插件路径，并为 Cursor、OpenCode、Gemini、Zed、GitHub Copilot 等提供能力受限的适配器。

## 主要特性

- 71 个专业化智能体，覆盖规划、评审、构建修复、安全、架构和领域工作
- 314 个技能，涵盖 TDD、研究、安全、文档、前端、数据、ML 和运维，另有 98 个旧版命令垫片
- 钩子与运行时记忆，用于强制执行、会话摘要、持续学习和上下文控制
- 可按语言或项目选择性加载的常驻规则
- AgentShield 安全扫描，覆盖提示、钩子、MCP 配置、权限、密钥和智能体文件
- 一个多 harness 向导即可完成 Claude Code、Codex 和 Kimi Code 的引导式安装

## 使用场景

- 让编码智能体遵循可复用的“计划 → 测试 → 实现 → 评审”工作流，而非临时拼凑提示
- 把组织知识保存在智能体记忆和可复用技能中，跨会话延续
- 扫描智能体配置、提示和密钥，防范供应链与提示注入风险

## 技术特点

- 以 Claude Code 原生 `ecc@ecc` 插件形式安装，或经适配器接入其他 harness；引导式安装通过 `ecc-universal` npm 包分发，要求 Node.js 18+，多 harness 向导（`ecc-universal install --guided`）在首次写入前对每项选择做预检
- 工程闭环由钩子和运行时记忆而非提示词强制执行：钩子在生命周期节点触发，会话摘要写入记忆层，“本能（instincts）”机制把学到的纠正注入后续会话
- AgentShield 对提示、钩子定义、MCP 配置、权限授予、密钥和智能体文件做静态扫描，识别可疑模式
- 组件横跨 Shell、TypeScript、Python、Go 和 Java 编写；AgentShield 扫描器另行以 `ecc-agentshield` npm 包发布
