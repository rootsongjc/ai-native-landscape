---
name: OpenManus
slug: openmanus
homepage: https://openmanus.github.io/
repo: https://github.com/foundationagents/openmanus
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
description: OpenManus 是一个模块化的开源智能体框架，便于将自然语言驱动的智能体原型推进到可部署的工程化系统。
logo: ''
author: Foundation Agents
ossDate: '2025-03-06T14:08:14Z'
featured: false
status: tracked
---

## 详细介绍

OpenManus 是一个模块化的开源智能体框架，旨在将自然语言驱动的智能体原型快速推进到工程化、可部署的系统。项目提供运行示例、Web 演示与多种运行模式（如 `run_flow`、`run_mcp`），并支持通过配置接入不同 LLM 提供商与本地运行时。

## 主要特性

- 模块化架构：可插拔的 Agent、工具链与工作流引擎，便于按需组合与扩展。
- 多模式运行：支持单体运行、MCP 工具集成与多智能体协作流程（`run_flow`）。
- 丰富示例与演示：包含 Hugging Face 空间演示及示例工程，便于上手与验证。
- 社区与治理：开源社区活跃、贡献者众多，采用 MIT 许可与开放治理。

## 使用场景

适用于研究原型验证、智能体编排实验、自动化工作流与将多模态/LLM 能力集成到现有工程中。工程团队可将训练或微调的模型通过配置接入 OpenManus，以便在生产或测试环境中进行快速迭代与评估。

## 技术特点

- 支持多种 LLM 配置与浏览器自动化工具，能够整合外部 API 与本地工具。
- 提供示例脚本、容器化部署与 Python 包，便于在开发与 CI 环境中复现。
- 使用模块化协议与配置（如 MCP）实现工具间的互操作与权限隔离。
- 活跃的贡献者生态与文档，包含多语言 README 与教程，帮助团队快速上手。
