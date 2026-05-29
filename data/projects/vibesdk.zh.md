---
name: Cloudflare VibeSDK
slug: vibesdk
homepage: https://build.cloudflare.dev/
repo: https://github.com/cloudflare/vibesdk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Dev Tools
description: 一个开源的 AI 应用生成与部署平台，允许通过自然语言快速生成、预览并部署前端/后端应用。
logo: ''
author: Cloudflare
ossDate: '2025-08-25T15:07:31.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Cloudflare VibeSDK 是一个开源的 AI 平台示例，能根据自然语言描述生成完整的前端与后端应用，并在 Cloudflare 的沙箱环境中提供实时预览与一键部署能力。它适合想要搭建自有 AI 应用生成服务或在内部快速构建工具的团队。

## 主要特性

- 基于阶段化生成的 AI 代码生成，支持错误修复与质量检查。
- 实时沙箱预览（Containers）以便快速验证生成效果。
- 支持多种 LLM 提供商并通过 AI Gateway 集成管理。
- 与 GitHub 集成，可将生成代码导出到仓库并支持一键部署到 Workers。

## 使用场景

- SaaS 平台为用户提供可定制的低代码/无代码应用生成功能。
- 企业内部让非工程团队按需生成营销页、仪表盘或自动化工具。
- 开发者训练或评估生成式流水线与工具链。

## 技术特点

- 前端：React + Vite + Tailwind。
- 后端：Cloudflare Workers + Durable Objects，使用 D1/Drizzle 做数据库支持。
- 执行环境：Cloudflare Containers 沙箱化运行用户应用。
- 部署：支持 Workers for Platforms、R2、KV 等 Cloudflare 服务。
