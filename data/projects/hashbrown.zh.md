---
name: Hashbrown
slug: hashbrown
homepage: https://www.hashbrown.dev
repo: https://github.com/liveloveapp/hashbrown
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
description: 面向在浏览器运行智能体的框架，支持 Angular 与 React 集成。
logo: ''
author: Liveloveapp
ossDate: '2025-03-26T21:26:59Z'
featured: false
status: tracked
---

## 详细介绍

Hashbrown 是一个面向在浏览器运行智能体（智能体）的开源框架，旨在把多步任务与外部工具调用带入前端环境。它为 Angular 与 React 提供集成方案，使开发者能够在用户端以受控、安全的方式协调模型调用、页面交互与外部服务，从而构建能直接操控浏览器 UI 的智能体应用。

## 主要特性

- 浏览器运行时：支持在前端环境执行智能体逻辑，降低服务端依赖。
- 前端集成：提供针对 Angular 与 React 的适配层，简化与组件与路由的协作。
- 工具与适配器：内置或易于扩展的模型、检索与外部 API 适配器，支持常见 LLM 工作流。
- 安全与可控：注重权限边界与执行隔离，便于在浏览器中调试与观测智能体行为。

## 使用场景

适合需要直接在浏览器端协调交互逻辑与模型调用的场景，例如：增强型网页助手、自动化表单与数据抓取智能体、面向用户界面的任务编排器，或作为前端侧的 RAG 触发器与工具链入口。

## 技术特点

Hashbrown 采用 TypeScript 实现，强调与现代前端构建链和组件系统的兼容性；架构上以模块化适配器与工作流编排为核心，便于把外部模型、缓存与检索组件插入到浏览器侧执行路径中。项目以开源方式发布，便于社区贡献与生态扩展。
