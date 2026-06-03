---
name: OpenCode
slug: opencode
homepage: https://opencode.ai
repo: https://github.com/sst/opencode
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: 专为终端打造的 AI 编码代理工具，100% 开源且不依赖特定供应商，专注于终端用户界面。
author: SST
ossDate: '2025-04-30T20:08:00.000Z'
featured: false
status: tracked
---

OpenCode 是一款专为终端打造的 AI 编码代理工具，由熟悉终端操作的 neovim 用户和 terminal.shop 的创造者开发，致力于挖掘终端的最大潜力。作为一个完全开源的项目，OpenCode 让社区能够深入了解代码逻辑并参与改进，同时保持供应商中立性，支持包括 Anthropic、OpenAI、Google 在内的多家 AI 服务商，也支持本地模型部署。

## 核心优势

OpenCode 采用专注于终端的用户界面设计，通过优化的键盘操作流程为命令行用户提供高效的开发体验。其客户端/服务器分离架构不仅支持本地运行，还可通过移动应用实现远程控制，大大扩展了使用场景。

## 安装配置

系统支持多种安装方式，包括一键安装脚本、各类包管理器（npm、bun、pnpm、yarn）以及系统特定的安装方法。安装目录遵循标准规范，可通过环境变量灵活配置，优先级从自定义目录、XDG 规范到默认备用目录逐级降低。

## 开发贡献

项目欢迎社区在 Bug 修复、性能改进、新供应商支持等方面做出贡献，但核心功能的更改需要与团队协调。开发环境采用 Bun 作为 JavaScript 运行时，后端使用 Golang 1.24.x，API 端点采用 TypeScript 开发。

## 技术架构

系统分为客户端和服务器两部分：客户端负责终端界面交互和命令处理，服务器端集成 AI 模型并提供代码生成、会话管理等核心服务。两者通过安全的通信协议保持实时数据传输，确保稳定可靠的操作体验。

## 未来展望

OpenCode 计划通过持续优化性能、扩展 AI 模型支持、改进用户体验来推动项目发展。同时着力建设插件系统和第三方工具集成能力，打造更完善的开发者生态系统。项目将始终保持开源本质，在社区驱动下不断创新和进步。
