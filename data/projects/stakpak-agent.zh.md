---
name: Stakpak Agent
slug: stakpak-agent
homepage: https://stakpak.dev
repo: https://github.com/stakpak/agent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: 一个终端原生的 DevOps 智能体，使用 Rust 实现，能执行命令、编辑文件并生成高质量 IaC。
author: Stakpak
ossDate: '2024-12-10T21:56:17Z'
featured: false
status: tracked
---

Stakpak Agent 是一个用 Rust 编写的终端原生 DevOps 智能体，能够在本地或 CI 环境中执行命令、编辑文件、搜索文档并生成高质量的基础设施即代码。它围绕安全性和可审计性设计，作为自主助手直接集成到开发者工作流中。

## 主要特性

- 在终端中原生运行，支持文件编辑、Shell 命令执行和交互式任务自动化
- 搜索本地文档和代码仓库，为决策和代码生成提供上下文依据
- 强制执行最小权限原则，所有操作均有完整审计日志
- 结合 LLM 推理与本地工具验证，生成可靠的基础设施代码
- 支持本地开发和 CI 流水线两种集成方式

## 使用场景

- 在本地终端中快速生成、修复或验证基础设施即代码片段
- 在 CI 流水线中自动执行修复和验证步骤
- 在大型代码库中定位相关文档以辅助变更审查
- 协助编写 Terraform、Kubernetes 清单等 IaC 配置

## 技术特点

- 基于 Rust 构建，提供出色的性能和内存安全保障
- 每个操作均有日志记录，确保完全可审计性和合规追溯
- 以 Apache-2.0 许可证发布，支持企业采用和定制
- 流水线将 LLM 推理与本地工具验证相结合，确保输出可靠
