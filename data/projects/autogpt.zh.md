---
name: AutoGPT
slug: autogpt
homepage: https://agpt.co/
repo: https://github.com/significant-gravitas/autogpt
license: MIT
category: platform-infra
subCategory: deployment-operations
tags:
  - AI Agent
description: 用于构建、部署与运行连续智能体的平台，支持自托管与平台化部署。
author: Significant-Gravitas
ossDate: '2023-03-16T09:21:07.000Z'
featured: false
status: tracked
---
## 简介

AutoGPT 是 Significant-Gravitas 社区推动的开源平台，旨在让用户快速创建、部署并管理连续运行的智能体（agents）。项目同时包含传统 AutoGPT 实现与面向平台的前端/后端组件，支持自托管与即将推出的云平台服务。

## 主要特性

- 可视化与低代码 Agent Builder：通过块（blocks）构建与调度工作流。
- 平台与自托管支持：提供前端、服务器与市场（marketplace），并可使用一键安装脚本快速部署。
- 丰富示例与基准：包含示例代理、基准测试（agbenchmark）与 Forge 工具链。

## 使用场景

- 自动化社媒内容生产、视频转写与摘要生成等持续任务。
- 研究与教学：复现代理行为、测试基准、评估自动化策略。
- 将自定义代理集成到现有系统以实现自动化工作流。

## 技术特点

- 多语言与模块化：主体以 Python 实现，辅以 TypeScript 前端与 Docker 编排。
- CLI 与 API：提供命令行接口与服务端 API，支持插件化扩展。
- 双许可证策略：核心仓库多为 MIT 授权，平台模块使用 Polyform Shield（见仓库说明）。
