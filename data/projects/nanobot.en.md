---
name: NanoBot
slug: nanobot
homepage: null
repo: https://github.com/hkuds/nanobot
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Assistant
  - MCP
description: >-
  NanoBot is an open-source ultra-lightweight personal AI agent framework from HKUDS, implementing over 90% of
  OpenClaw's core capabilities in just ~4,000 lines of code, with MCP protocol support, multi-model integration, and
  multi-platform deployment.
author: HKUDS
ossDate: '2026-02-04T12:00:00.000Z'
featured: false
status: tracked
---

## Overview

NanoBot is an open-source, minimalist personal AI Agent framework developed by the Hong Kong University Data Science Laboratory (HKUDS). It aims to help users quickly deploy large language models and build 24/7 personal AI assistants. Inspired by OpenClaw, NanoBot reduces the codebase from 430,000 lines to approximately 4,000 lines (a 99% reduction), effectively addressing pain points of the original OpenClaw such as massive codebase, steep learning curve, and complex deployment. Implemented in pure Python with clear code structure, NanoBot serves as an excellent example for learning AI Agent principles.

## Key Features

- **Minimal Code**: Core code only ~4,000 lines, 99% smaller than OpenClaw, easy to understand and learn.
- **Native MCP Framework**: Built-in support for Model Context Protocol (MCP) ecosystem from the ground up, all features provided through MCP servers.
- **MCP-UI Integration**: First-class support for MCP-UI specification, render interactive React components directly in chat clients.
- **Multi-Model Support**: Compatible with mainstream LLMs including OpenAI, Claude, Gemini, DeepSeek, vLLM, Groq via LiteLLM.
- **Multi-Platform Integration**: Supports Telegram, WhatsApp, Discord, Slack, DingTalk, Feishu, QQ, Email and other IM platforms.
- **Flexible Deployment**: Can be deployed anywhere as a fully-featured MCP host and embedded into any application or website.
- **Rich Tools**: Built-in tools for file operations, shell commands, web search, web scraping and more.
- **Skill Extension**: Easily extend functionality by writing SKILL.md documentation.
- **Sub-Agent System**: Supports background sub-agents for complex tasks without blocking main conversation.
- **Long-Term Memory**: Automatically saves memories and daily notes across different conversations.
- **Scheduled Tasks**: Supports Cron expressions for scheduling automated tasks.

## Use Cases

- **Personal Knowledge Management**: Smart note-taking, information lookup, schedule management.
- **Development Assistance**: Code generation, file operations, system monitoring (e.g., running nvidia-smi commands).
- **Office Automation**: Scheduled report generation, data scraping, multi-platform message pushing.
- **Remote Operations**: Remotely operate servers, view logs, clean files via IM bots.
- **24/7 Assistant**: Deploy on servers for round-the-clock message response.

## Technical Highlights

- Pure Python implementation, pip install ready, no complex compilation environment required.
- Clear code structure with modular design, easy to extend tools and skills in resource-constrained environments.
- Model-agnostic through LiteLLM, easily switch between different LLM providers.
- Built-in interactive chat client, can also be integrated into third-party applications.
- Supports both local models (via vLLM) and online API access methods.
