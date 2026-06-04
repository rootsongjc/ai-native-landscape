---
name: Hermes Agent
slug: hermes-agent
homepage: https://hermes-agent.nousresearch.com/docs
repo: https://github.com/nousresearch/hermes-agent
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - Dev Tools
description: Hermes Agent 是由 Nous Research 开源的自改进 AI 智能体，内置学习闭环，支持技能自动创建与自我优化、跨会话记忆检索、多平台消息网关及定时自动化任务，可在 $5 VPS 到 GPU 集群等多种环境部署。
author: Nous Research
ossDate: '2025-07-22T22:22:28Z'
featured: false
status: tracked
---

## 详细介绍

Hermes Agent 是由 Nous Research 构建的自改进 AI 智能体，核心理念是"与你一同成长"。它是目前唯一内置完整学习闭环的智能体——能够从经验中创建技能、在使用过程中改进技能、自主推动知识持久化、搜索过往对话并跨会话构建对用户的深层理解。Hermes 支持从 Nous Portal、OpenRouter（200+ 模型）、OpenAI、Anthropic 等多种 LLM 提供商中自由切换，无需修改代码，无供应商锁定。

## 主要特性

- 闭环学习系统：智能体策划的记忆配有定期提醒机制，复杂任务后自主创建技能，技能在使用中自我改进，FTS5 全文搜索配合 LLM 摘要实现跨会话回忆。
- 多平台消息网关：通过单个网关进程支持 Telegram、Discord、Slack、WhatsApp、Signal 和 CLI，支持语音备忘录转录和跨平台对话连续性。
- 完整终端界面：全功能 TUI，支持多行编辑、斜杠命令自动补全、对话历史、中断重定向和流式工具输出。
- 定时自动化：内置 cron 调度器，可将任务投递到任意平台，支持自然语言定义的日报、夜备、周审等无人值守任务。
- 子代理委派与并行化：可生成隔离的子代理处理并行工作流，编写 Python 脚本通过 RPC 调用工具，将多步骤管线压缩为零上下文开销的轮次。
- 灵活部署：支持本地、Docker、SSH、Daytona、Singularity、Modal 六种终端后端，可在 $5 VPS 到 GPU 集群上运行。
- 研究支持：批量轨迹生成、Atropos RL 环境、轨迹压缩，用于训练下一代工具调用模型。

## 使用场景

- 作为全天候个人 AI 助手，通过 Telegram、Discord 等平台随时交互，结合定时任务实现自动化工作流。
- 替代 OpenClaw，提供从设置向导到数据迁移的完整过渡方案。
- 在低预算 VPS 上部署长期运行的自动化智能体，利用 serverless 后端实现按需唤醒和成本优化。
- AI 研究场景中生成训练轨迹，用于强化学习和工具调用模型的迭代训练。

## 技术特点

- 使用 Python 编写，通过 uv 进行依赖管理，提供 40+ 内置工具和工具集系统。
- 支持 MCP 集成，可连接任意 MCP 服务器扩展能力。
- 兼容 agentskills.io 开放技能标准，支持 Honcho 方言用户建模。
- 开源协议为 MIT，文档托管于 hermes-agent.nousresearch.com。
