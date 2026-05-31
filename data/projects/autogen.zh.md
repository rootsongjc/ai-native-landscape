---
name: AutoGen
slug: autogen
homepage: https://microsoft.github.io/autogen/
repo: https://github.com/microsoft/autogen
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Dev Tools
  - Utility
description: 用于代理式 AI 的编程框架，可实现多代理工作流的开发，具有分层和可扩展的设计。
logo: ''
author: Microsoft
ossDate: '2023-08-18T11:43:45.000Z'
featured: false
status: tracked
---

AutoGen 是一个用于代理式 AI 的编程框架，为您提供创建智能体所需的一切，特别是多代理工作流。该框架采用分层和可扩展的设计，各层职责明确，构建在下层之上。这种设计使您能够在不同抽象级别上使用框架，从高级 API 到底层组件。

AutoGen 生态系统由几个关键组件组成：

- **核心 API** 实现消息传递、事件驱动代理以及本地和分布式运行时，具有灵活性和强大功能。它还支持 .NET 和 Python 的跨语言支持。
- **AgentChat API** 实现了一个更简单但有特定规范的 API，用于快速原型设计。该 API 构建在核心 API 之上，最接近 v0.2 用户熟悉的模式，支持常见的多代理模式，如双代理聊天或群聊。
- **扩展 API** 支持第一方和第三方扩展，持续扩展框架功能。它支持特定的 LLM 客户端实现（例如 OpenAI、AzureOpenAI）以及代码执行等功能。

AutoGen 还提供两个重要的开发者工具：

- **AutoGen Studio** 提供无代码 GUI，用于构建多代理应用程序。
- **AutoGen Bench** 提供基准测试套件，用于评估代理性能。

使用 AutoGen，您可以为自己的领域创建应用程序。例如，Magentic-One 是一个使用 AgentChat API 和 Extensions API 构建的最先进的多代理团队，能够处理需要网页浏览、代码执行和文件处理的各种任务。

AutoGen 拥有一个蓬勃发展的生态系统，每周都会举办与维护者和社区的办公时间和讲座。它还有一个 Discord 服务器用于实时聊天，GitHub Discussions 用于问答，以及一个博客用于教程和更新。
