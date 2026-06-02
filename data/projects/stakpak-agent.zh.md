---
name: Stakpak Agent
slug: stakpak-agent
homepage: https://stakpak.dev
repo: https://github.com/stakpak/agent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: 一个终端原生的 DevOps 智能体，使用 Rust 实现，能执行命令、编辑文件并生成高质量 IaC。
logo: ''
author: Stakpak
ossDate: '2024-12-10T21:56:17Z'
featured: false
status: tracked
---

## 简介

Stakpak Agent 是一个用 Rust 编写的终端原生 DevOps 智能体，能够在本地或 CI 环境中执行命令、编辑文件、搜索文档并生成高质量的基础设施即代码。它围绕安全性和可审计性设计，作为自主助手直接集成到开发者工作流中。

## 主要特性

该智能体在终端中原生运行，支持文件编辑、Shell 命令执行和交互式任务自动化，无需离开命令行。它可以搜索本地文档和代码仓库为决策提供依据，并强制执行最小权限原则，所有操作均可审计，适合注重合规的团队。

## 使用场景

开发者使用 Stakpak Agent 在本地终端中快速生成、修复或验证基础设施即代码片段。它也可以集成到 CI 流水线中自动执行修复和验证步骤，还能在大型代码库中定位相关文档以辅助变更审查。

## 技术特点

基于 Rust 构建，提供出色的性能和内存安全保障，其流水线将 LLM 推理与本地工具结合以生成和验证代码片段。每个操作均有日志记录以确保完全可审计性，项目以 Apache-2.0 许可证发布，支持企业采用和定制。
