---
name: Open Interpreter
slug: open-interpreter
homepage: https://openinterpreter.com/
repo: https://github.com/openinterpreter/open-interpreter
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Dev Tools
description: 一个将自然语言转换为本地可执行代码与命令的开源工具，提供交互式终端和编程助手功能。
logo: ''
author: Open Interpreter Contributors
ossDate: '2023-07-14T07:10:44.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Open Interpreter 是一个开源的自然语言到代码/命令桥梁，允许用户通过自然语言在本地环境执行脚本、分析数据、控制浏览器等操作，旨在将大语言模型的能力直接带入开发者与普通用户的工作流中。

## 主要特性

- 交互式终端与编程助手：通过 `interpreter` 命令启动对话式会话，支持流式输出与会话状态保存。
- 多平台模型支持：可与 LiteLLM、OpenAI 等模型适配，支持本地与远端模型后端。
- 丰富的执行能力：执行 Python、Shell、JavaScript 等语言，支持文件操作、数据可视化与网页自动化（需用户确认）。
- 可配置的配置文件与 Profiles，便于个性化默认行为与权限设置。

## 使用场景

- 数据分析与可视化（本地脚本快速生成图表）。
- 自动化日常任务：文件处理、批量重命名、网页抓取等。
- 教学与学习：将自然语言请求转为可执行示例以辅助教学演示。

## 技术特点

- 采用 Python 实现，模块化代码库并提供示例与文档（docs、examples）。
- 使用 AGPL-3.0 许可证，适用于开源社区与研究用途（注意许可证限制）。
- 提供桌面应用早期访问、Colab 示例与 REST 控制示例，便于多种部署方式。
