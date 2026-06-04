---
name: Jan
slug: jan
homepage: https://jan.ai/
repo: https://github.com/menloresearch/jan
license: Apache-2.0
category: applications-products
subCategory: chat-interfaces
tags:
  - Chatbot
  - Dev Tools
description: 开源的 ChatGPT 替代品，支持离线运行与多种模型下载与云集成，注重隐私与易用性。
author: menloresearch
ossDate: '2023-08-17T02:17:10.000Z'
featured: false
status: tracked
---

## 简介

Jan 是一个开源的 ChatGPT 替代品，旨在让用户在本地或云端轻松运行对话式模型。它支持从 Hugging Face 下载模型权重、连接云端 API（OpenAI、Anthropic 等），并提供桌面客户端与本地 API，便于集成与自动化。

## 主要特性

- 支持多种模型与权重自动下载（Vicuna、Gemma、Qwen 等）。
- 提供本地服务器与 OpenAI 兼容 API（localhost:1337），方便集成现有应用。
- 桌面版本（Windows/macOS/Linux）与开发模式（make dev）支持快速上手与部署。
- 隐私优先，支持完全离线运行以保护用户数据。

## 使用场景

- 个人或组织部署私有对话服务以保证数据隐私。
- 快速搭建本地原型、内部工具与研究实验环境。
- 作为训练、评估与对比不同 LLM 行为的基础设施。

## 技术特点

- 以 TypeScript/Rust 为主的代码库，包含桌面客户端（Tauri）与 Web 应用。
- 支持多平台安装包（.exe/.dmg/.deb/AppImage）与自动化构建流程。
- 丰富的文档与社区支持（文档、API 参考、Discord）。
