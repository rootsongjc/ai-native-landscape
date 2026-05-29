---
name: Chef
slug: chef
homepage: https://chef.convex.dev/
repo: https://github.com/get-convex/chef
license: Unknown
category: applications-products
subCategory: low-code-builders
tags:
  - AI Agent
  - Dev Tools
description: 支持后端的一体化 AI 应用构建器，内置数据库、免配置认证、实时 UI 与后台工作流，帮助开发者快速搭建可运行的全栈 AI 应用。
logo: ''
author: Convex Team
ossDate: '2025-03-31T19:00:59.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Chef 是一个“知道后端”的 AI 应用构建器，集成了内置数据库、零配置认证、文件上传、实时界面与后台工作流，使开发者能够用最少的配置搭建可运行的全栈 AI 应用。它以 Convex 作为底层数据库与实时层，适合需要后端能力的生成式应用场景。

## 主要特性

- 后端整合：与 Convex 紧密集成，提供实时数据和后台工作流。
- 开箱即用的基础能力：内置数据库、认证与文件上传减少开发配置成本。
- 代理循环与工具集成：`chef-agent` 目录包含 agent 循环、系统提示与工具定义，便于构建智能助手流程。
- 本地开发与托管 webapp：既支持在 `chef.convex.dev` 上托管，也支持本地运行与开发模式。

## 使用场景

- 需要后端存储与实时同步的生成式应用（例如代码生成平台、协作编辑、带有持久化的聊天机器人）。
- 快速原型与产品化：利用模板和 `chefshot` CLI 快速启动项目。
- 教学与演示：展示如何把 agent 能力与数据库、认证、文件上传和实时 UI 结合。

## 技术特点

- 基于 TypeScript 的前后端代码库，便于与现代前端工具链集成。
- YAML/模板驱动的项目 bootstrap 模板（`template/`）用于快速初始化新项目。
- 轻量 CLI 与测试夹具（`chefshot`、`test-kitchen`）支持本地开发与 agent 循环验证。
