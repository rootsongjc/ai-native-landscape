---
name: CopilotKit
slug: copilotkit
homepage: https://docs.copilotkit.ai
repo: https://github.com/copilotkit/copilotkit
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Copilot
  - UI
description: CopilotKit 是一个开源前端框架，用于在 React 和 Angular 应用中快速集成 AI Copilot、Agent 以及生成式 UI 组件，是 AG-UI 协议的发起者。
logo: ''
author: CopilotKit
ossDate: '2023-06-19T04:08:31Z'
featured: false
status: tracked
---

## 详细介绍

CopilotKit 是一个开源前端框架，旨在帮助开发者在 React 和 Angular 应用中快速构建 AI Copilot、自主 Agent 以及生成式 UI。作为 AG-UI（Agent-User Interaction）协议的发起者，CopilotKit 提供了一套完整的工具链，涵盖聊天界面、任务编排、上下文感知和 RAG 集成等核心能力。项目在 GitHub 上拥有超过 30k 星标，已成为 AI 应用前端集成领域最受关注的开源项目之一。

## 主要特性

- 开箱即用的 Copilot UI 组件：内置聊天窗口、命令面板、文本区域自动补全等预构建组件。
- AG-UI 协议：定义了 Agent 与用户交互的标准协议，支持多轮对话、工具调用和流式渲染。
- Agent 编排：通过 CoAgent 实现前端与后端 Agent 的深度集成，支持 Python、LangGraph 等后端框架。
- 上下文感知：自动收集应用上下文（用户操作、页面状态、数据库查询结果）注入 LLM 提示。
- RAG 集成：内置与 LangChain、Pinecone、Vercel AI SDK 等生态的检索增强生成支持。
- 多框架支持：同时支持 React 和 Angular，社区已扩展 Svelte 和 Vue 适配器。

## 使用场景

- 在 SaaS 产品中嵌入 AI 助手，提供自然语言交互和自动化操作能力。
- 构建代码编辑器、文档工具等场景下的 Copilot 体验，支持上下文感知的智能补全。
- 开发基于 Agent 的自动化工作流，将前端用户交互与后端 Agent 逻辑打通。
- 在企业内部工具中集成生成式 UI，根据用户查询动态渲染界面组件。

## 技术特点

- 基于 TypeScript 构建，提供完整的类型定义和良好的开发者体验。
- 采用 React Hooks 和 Context 的设计模式，与现有 React 生态无缝融合。
- 支持流式响应、中间件拦截和自定义渲染管线，灵活度高。
- 后端与前端解耦设计，Agent 逻辑可使用任意语言和框架实现。
- 通过 CoAgent 协议实现前后端状态同步，支持长时间运行的 Agent 任务。
