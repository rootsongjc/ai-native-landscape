---
name: Ralph for Claude
slug: ralph-claude-code
homepage: https://frankbria.com
repo: https://github.com/frankbria/ralph-claude-code
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
description: 一个针对 Claude Code 的开源自治开发循环工具集，提供会话连续性、速率限制与断路器等保障。
author: Frank Bria
ossDate: '2025-08-27T16:03:45Z'
featured: false
status: tracked
---
## 简介

Ralph for Claude 是一个面向 Claude Code 的开源工具集，实现自治开发循环，能够对项目需求持续执行编码会话，并在满足完成条件时智能停止。它通过会话连续性、速率限制和断路器机制防止无限循环和超额 API 调用，同时通过响应分析和多阶段错误过滤保障执行稳定性。

## 主要特性

- 自治开发循环与智能退出检测，能识别完成信号并优雅终止流程。
- 通过 `--continue` 标志实现会话连续性，在跨迭代的长任务中保持上下文。
- 速率限制和断路器保护机制，安全处理 API 配额和瞬态故障。
- PRD 和规范导入功能，将需求转换为 `@fix_plan.md` 等可执行的任务计划。
- 集成 tmux 监控和包含 276 个通过测试的完整测试套件。

## 使用场景

开发者使用 Ralph 自动化迭代原型构建和小型项目开发，通过导入产品需求生成可执行任务列表。团队将其集成到 CI 管道中实现可复现的自治工作流，利用内置限制和等待策略在严格的 API 配额下安全运行自动化循环。

## 技术特点

Ralph 使用可移植的 shell 脚本实现，兼容标准 Unix 工具和 tmux，支持 Claude Code CLI 的 JSON 输出并可在需要时自动回退到文本解析。其 CLI 优先架构支持以最小依赖在本地、容器或 CI 环境中轻量化部署。
