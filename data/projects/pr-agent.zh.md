---
name: PR-Agent
slug: pr-agent
homepage: https://www.qodo.ai/
repo: https://github.com/qodo-ai/pr-agent
license: Unknown
category: training-optimization
subCategory: prompt-quality
tags:
  - AI Agent
  - Dev Tools
description: 开源的 AI 驱动的代码审核与 PR 辅助工具，可本地运行或在 CI 中部署，支持多平台集成与可定制化提示。
logo: ''
author: Qodo AI
ossDate: '2023-07-05T21:02:15.000Z'
featured: false
status: tracked
---

## 简介

PR-Agent 是一个开源的 AI 驱动的代码审查与 PR 助手，能够在本地、CI 或自托管环境中运行，为 Pull Request 提供自动化审查、改进建议与交互式工具，支持多模型与多平台集成。

## 主要特性

- AI 驱动的 PR 审查：提供 `/review`、`/describe`、`/improve` 等命令生成审查意见与改进建议。
- 多平台支持：兼容 GitHub、GitLab、BitBucket、Azure DevOps 等平台，并支持 CLI、Webhook 与 GitHub Actions 集成。
- 可定制化：通过 JSON 配置和自定义提示调整行为，支持插件式扩展。
- 自托管与隐私：开源、可自托管，团队可维护自己的 API 密钥与数据策略。

## 使用场景

- 在 CI 中为每个 PR 自动执行 AI 审查并将反馈作为评论或检查项提交。
- 在开发者本地通过 CLI 快速获取代码改进建议与 PR 描述草稿。
- 将 PR-Agent 与企业级 Qodo Merge 结合，使用托管服务与高级功能。

## 技术特点

- 基于 Python 开发，社区活跃且支持插件与扩展。
- 支持 RAG 与多模型接入以增强审查质量与上下文感知。
- 提供 GitHub Action、CLI 和 webhook 集成方式，便于在各种 CI/CD 流程中部署。
