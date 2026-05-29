---
name: Ralph for Claude
slug: ralph-claude-code
homepage: https://frankbria.com
repo: https://github.com/frankbria/ralph-claude-code
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
description: 一个针对 Claude Code 的开源自治开发循环工具集，提供会话连续性、速率限制与断路器等保障。
logo: ''
author: Frank Bria
ossDate: '2025-08-27T16:03:45Z'
featured: false
status: tracked
---

## 详细介绍

Ralph for Claude 是一个面向 Claude Code 的开源工具集，旨在实现自治开发循环，自动执行项目指令并在满足退出条件时智能停止。该工具通过会话连续性、速率限制与断路器等机制防止无限循环与超额调用，并结合响应分析与多阶段错误过滤来提高执行稳定性与可靠性。

## 主要特性

- 自治开发循环与智能退出检测，可识别完成信号并优雅终止流程。
- 会话连续性与 `--continue` 支持，保持上下文以便跨循环协作。
- 速率限制与断路器保护，处理 Claude 的使用限额与错误恢复。
- PRD/规范导入工具将需求转换为可执行的任务清单与 `@fix_plan.md`。
- 集成 tmux 实时监控与 CI 测试套件，便于在本地与流水线运行。

## 使用场景

- 使用 Claude Code 自动化完成小型项目或原型构建，减轻手动迭代负担。
- 将产品需求文档导入为 Ralph 项目，自动拆分任务并持续执行直到完成。
- 在受限 API 配额场景中运行自动化循环，利用速率限制与提示等待策略避免超额。
- 在 CI 环境运行自动化测试与质量门，保证脚本化工作流的稳定性。

## 技术特点

- 使用 Bash/脚本式实现，兼容 Unix 常用工具与 tmux 监控。
- 支持 Claude Code CLI 的 JSON 输出格式并在必要时回退到文本解析。
- 通过详尽的单元与集成测试（276 个通过测试）保证行为可验证。
- 以 CLI 优先设计，便于在本地、容器或持续集成管道中以最小依赖运行。
