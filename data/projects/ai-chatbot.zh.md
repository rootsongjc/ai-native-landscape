---
name: AI Chatbot (Vercel Chat SDK)
slug: ai-chatbot
homepage: https://chat.vercel.ai/
repo: https://github.com/vercel/ai-chatbot
license: Unknown
category: applications-products
subCategory: chat-interfaces
tags:
  - Chatbot
description: 由 Vercel 提供的可部署、可扩展的 Next.js 聊天机器人模板，支持多模型与多提供商集成。
logo: ''
author: Vercel
ossDate: '2023-05-19T16:36:23.000Z'
featured: false
status: tracked
---

## 简介

AI Chatbot 是 Vercel 提供的一个开箱即用的 Next.js 聊天机器人模板，适合作为构建对话式应用和客服机器人 的起点。它集成了 Vercel 的 AI Gateway 与 AI SDK，支持多种模型提供商与身份验证配置，便于快速部署与扩展。

## 主要特性

- 基于 Next.js 14 与 App Router 的现代项目架构，支持 React Server Components 与 Server Actions。
- 使用 AI SDK 提供统一的生成与工具调用接口，轻松切换模型提供商（xAI、OpenAI、Anthropic 等）。
- 内置用户认证、持久化（Neon Serverless Postgres）、Vercel Blob 文件存储等即用功能。
- 现代 UI 组件（shadcn/ui + Radix）与无缝的可定制主题。

## 使用场景

- 快速搭建对话式客服系统、产品助理或聊天机器人原型。
- 作为教学示例或模板，演示多模型接入与前后端组合的最佳实践。
- 部署到 Vercel 平台以获得自动身份与 AI Gateway 的凭证管理优势。

## 技术特点

- 多模型路由与 AI Gateway 支持，便于切换与扩展模型提供商。
- 使用 TypeScript 与现代前端工具链（pnpm、Playwright 测试配置、PostCSS 等）。
- 支持本地开发与在 Vercel 上一键部署的工作流（包含 .env 配置说明）。
