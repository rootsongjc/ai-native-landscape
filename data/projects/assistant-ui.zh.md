---
name: Assistant UI
slug: assistant-ui
homepage: https://www.assistant-ui.com
repo: https://github.com/assistant-ui/assistant-ui
license: MIT
category: applications-products
subCategory: chat-interfaces
tags:
  - Chat UI
  - Dev Tools
  - Frontend
  - UI
description: 一个基于 TypeScript 与 React 的可定制聊天界面组件库，旨在快速构建 AI 助手与对话界面。
author: Assistant UI
ossDate: '2023-11-22T16:01:17Z'
featured: false
status: tracked
---
Assistant UI 是一个基于 TypeScript/React 的开源组件库，用于构建可定制的 AI 聊天界面。它提供可组合的 UI 组件，覆盖消息流、输入区、富媒体渲染和插件扩展点，便于与任意后端推理服务或智能体层集成。

## 组件库

- **消息列表**，支持 Markdown、代码块与富媒体的自定义渲染器
- **输入区组件**，支持文件附件、图片上传与工具调用界面
- **工具栏组件**，用于会话分支、消息编辑与线程管理
- **会话面板**，支持多对话导航与会话管理

## 后端集成

- 通过后端网关实现多模型支持，可自由切换提供商
- 流式响应渲染，实时展示生成令牌
- 插件扩展点，支持自定义工具调用、函数结果与内联操作
- 兼容 OpenAI、Anthropic、Vercel AI SDK 及自定义智能体端点

## 主题与无障碍

- 内置主题系统，支持深色/浅色模式与 CSS 变量覆盖
- 遵循 WAI-ARIA 最佳实践的无障碍标记
- 响应式布局，适配桌面、平板与移动端
- 关注构建体积，兼容现代打包工具与服务端渲染框架

## 适用场景

- 快速搭建客服、产品助手或内部协作类聊天界面
- 将不同后端推理服务统一呈现给最终用户
- 在原型阶段验证对话式交互与多模型策略
- 作为组件库嵌入低代码平台与企业内网应用
