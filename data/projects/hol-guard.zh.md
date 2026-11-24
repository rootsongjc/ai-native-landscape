---
name: HOL Guard
slug: hol-guard
homepage: https://hol.org/guard
repo: https://github.com/hashgraph-online/hol-guard
license: Apache-2.0
category: platform-infra
subCategory: security-policy
tags:
  - AI Agent
  - Security
  - Runtime
  - Policy
  - Coding Agents
  - MCP
description: 面向 AI 编程智能体的开源安全工具，在受支持的集成中于工具操作执行前按本地策略进行检查，并扫描已安装的技能、插件和 MCP 配置中的风险。
author: HOL (Hashgraph Online)
ossDate: '2026-03-28T19:02:15Z'
featured: false
status: tracked
---

## 简介

HOL Guard 是一款面向 AI 编程智能体的开源安全工具。在受支持的集成中，它会在智能体的部分操作执行前进行检查，例如 Shell 命令、文件访问、软件包安装和 MCP 工具调用，并根据本地策略允许、阻止或请求批准。它只能看到各智能体向其暴露的事件，也不能替代操作系统沙箱。

## 主要特性

- 在智能体工具操作执行前进行检查，并根据本地策略允许、阻止或请求批准
- 清点并审查已安装的技能、插件、智能体配置和 MCP 服务器
- 对受支持的包管理器安装操作，结合供应链安全公告数据进行检查
- 在受支持的事件上筛查提示词和工具结果中的提示注入与敏感内容
- 在本地记录决策，并提供 CLI 和本地控制台处理审批

## 使用场景

- 在开发者机器上，为编程智能体执行的命令和工具调用增加一层策略检查
- 在智能体使用新增或变更的技能、插件和 MCP 服务器之前进行审查
- 使用随附的 `plugin-scanner` CLI，在发布智能体插件、技能和 MCP 集成前进行检查

## 技术特点

- 主要使用 Rust 和 Python 编写，可通过 `pipx install hol-guard` 从 PyPI 安装
- 通过智能体原生钩子、托管的 MCP 代理和启动集成接入；各智能体的覆盖范围不同，项目的支持矩阵列出了每个智能体已覆盖和未覆盖的部分
- 可在本地运行，无需账号；可选的托管服务提供共享历史和团队策略
