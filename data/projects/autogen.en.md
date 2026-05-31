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
description: >-
  A programming framework for agentic AI that enables development of multi-agent workflows with a layered and extensible
  design.
logo: ''
author: Microsoft
ossDate: '2023-08-18T11:43:45.000Z'
featured: false
status: tracked
---

AutoGen is a programming framework for agentic AI that provides everything you need to create AI agents, especially multi-agent workflows. The framework uses a layered and extensible design where layers have clearly divided responsibilities and build on top of layers below. This design enables you to use the framework at different levels of abstraction, from high-level APIs to low-level components.

The AutoGen ecosystem consists of several key components:

- **Core API** implements message passing, event-driven agents, and local and distributed runtime for flexibility and power. It also supports cross-language support for .NET and Python.
- **AgentChat API** implements a simpler but opinionated API for rapid prototyping. This API is built on top of the Core API and is closest to what users of v0.2 are familiar with, supporting common multi-agent patterns such as two-agent chat or group chats.
- **Extensions API** enables first- and third-party extensions continuously expanding framework capabilities. It supports specific implementations of LLM clients (e.g., OpenAI, AzureOpenAI), and capabilities such as code execution.

AutoGen also provides two essential developer tools:

- **AutoGen Studio** provides a no-code GUI for building multi-agent applications.
- **AutoGen Bench** provides a benchmarking suite for evaluating agent performance.

With AutoGen you can create applications for your domain. For example, Magentic-One is a state-of-the-art multi-agent team built using AgentChat API and Extensions API that can handle a variety of tasks that require web browsing, code execution, and file handling.

AutoGen has a thriving ecosystem with weekly office hours and talks with maintainers and community. It also has a Discord server for real-time chat, GitHub Discussions for Q&A, and a blog for tutorials and updates.
