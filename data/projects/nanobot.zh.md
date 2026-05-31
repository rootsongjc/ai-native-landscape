---
name: NanoBot
slug: nanobot
homepage: null
repo: https://github.com/hkuds/nanobot
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - Assistant
  - MCP
description: NanoBot 是香港大学数据科学实验室开源的超轻量级个人 AI 智能体框架，仅约 4000 行代码实现了 OpenClaw 90% 以上的核心能力，支持 MCP 协议、多模型接入与多平台部署。
logo: ''
author: HKUDS
ossDate: '2026-02-04T12:00:00.000Z'
featured: false
status: tracked
---

## 详细介绍

NanoBot 是由香港大学数据科学实验室（HKUDS）开发的开源、极简的个人 AI 智能体（AI Agent）框架，旨在帮助用户快速部署接入大模型，打造全天候个人 AI 助手。该项目从 OpenClaw 汲取灵感，通过将代码量从 43 万行精简到约 4000 行（缩减 99%），有效解决了原版 OpenClaw 代码庞大、学习曲线陡峭、部署复杂等痛点。NanoBot 采用纯 Python 实现，提供清晰的代码结构，是学习 AI Agent 原理的绝佳范本。

## 主要特性

- **极简代码**：核心代码仅约 4000 行，相比 OpenClaw 减少 99%，易于理解和学习。
- **原生 MCP 框架**：从底层设计支持 Model Context Protocol（MCP）生态系统，所有功能通过 MCP 服务器提供。
- **MCP-UI 集成**：支持 MCP-UI 规范，可在聊天客户端中渲染交互式 React 组件。
- **多模型支持**：通过 LiteLLM 支持 OpenAI、Claude、Gemini、DeepSeek、vLLM、Groq 等主流 LLM。
- **多平台接入**：支持 Telegram、WhatsApp、Discord、Slack、钉钉、飞书、QQ、邮件等多种 IM 平台。
- **灵活部署**：可作为功能齐全的 MCP 主机部署在任何地方，并嵌入到任何应用程序或网站中。
- **工具丰富**：内置文件操作、Shell 命令、网络搜索、网页抓取等工具。
- **技能扩展**：通过编写 SKILL.md 文档即可轻松扩展功能。
- **子代理系统**：支持后台子代理处理复杂任务，不阻塞主对话。
- **长期记忆**：自动保存不同对话的记忆和每日笔记。
- **定时任务**：支持 Cron 表达式安排自动化任务。

## 使用场景

- **个人知识管理**：智能笔记、信息查询、日程管理等。
- **开发辅助**：代码生成、文件操作、系统监控（如运行 nvidia-smi 命令）。
- **办公自动化**：定时生成报告、数据抓取、多平台消息推送。
- **远程运维**：通过 IM 机器人远程操作服务器、查看日志、清理文件等。
- **24 小时助手**：部署在服务器上提供全天候消息响应。

## 技术特点

- 采用纯 Python 实现，pip 安装即可使用，无需复杂编译环境。
- 代码结构清晰，模块化设计便于在资源受限环境下扩展工具与技能。
- 通过 LiteLLM 实现模型无关性，轻松切换不同 LLM 提供商。
- 自带交互式聊天客户端，也可集成到第三方应用中。
- 支持本地模型（通过 vLLM）和在线 API 两种接入方式。
