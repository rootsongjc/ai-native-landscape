---
name: DeerFlow
slug: deer-flow
homepage: null
repo: https://github.com/bytedance/deer-flow
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Orchestration
  - Sandbox
  - Workflow
description: >-
  DeerFlow is an open-source SuperAgent harness from ByteDance that handles different levels of tasks taking minutes to
  hours through the coordination of sandboxes, memories, tools, skills, and subagents.
logo: ''
author: ByteDance
ossDate: '2026-03-23'
featured: false
status: tracked
---

## Overview

DeerFlow (Deep Exploration and Efficient Research Flow) is an open-source SuperAgent harness from ByteDance. It orchestrates sub-agents, memory, and sandboxes, powered by extensible skills, to handle tasks ranging from minutes to hours.

DeerFlow 2.0 is a ground-up rewrite built on LangGraph and LangChain. It ships with everything an agent needs out of the box: a filesystem, memory, skills, sandboxed execution, and the ability to plan and spawn sub-agents for complex, multi-step tasks.

## Key Features

### Skills & Tools
Skills are what make DeerFlow do almost anything. A standard Agent Skill is a structured capability module—a Markdown file that defines a workflow, best practices, and references to supporting resources. DeerFlow ships with built-in skills for research, report generation, slide creation, web pages, and image/video generation. The real power is extensibility: add your own skills, replace the built-in ones, or combine them into compound workflows.

### Sub-Agents
Complex tasks rarely fit in a single pass. DeerFlow decomposes them. The lead agent can spawn sub-agents on the fly—each with its own scoped context, tools, and termination conditions. Sub-agents run in parallel when possible, report back structured results, and the lead agent synthesizes everything into a coherent output.

### Sandbox & File System
DeerFlow doesn't just talk about doing things. It has its own computer. Each task runs inside an isolated Docker container with a full filesystem—skills, workspace, uploads, outputs. The agent reads, writes, and edits files. It executes bash commands and codes. It views images. All sandboxed, all auditable, zero contamination between sessions.

### Context Engineering
DeerFlow manages context aggressively—summarizing completed sub-tasks, offloading intermediate results to the filesystem, compressing what's no longer immediately relevant. This lets it stay sharp across long, multi-step tasks without blowing the context window. Each sub-agent runs in its own isolated context, ensuring the sub-agent can focus on the task at hand.

### Long-Term Memory
DeerFlow builds a persistent memory of your profile, preferences, and accumulated knowledge across sessions. The more you use it, the better it knows you—your writing style, your technical stack, your recurring workflows. Memory is stored locally and stays under your control.

### IM Channels
DeerFlow supports receiving tasks from messaging apps. Channels auto-start when configured—no public IP required. Supports Telegram, Slack, Feishu/Lark, and more.

## Use Cases

- **Deep Research**: Multi-agent parallel exploration of different angles with automatic synthesis into comprehensive reports
- **Content Creation**: Automated generation of slides, web pages, images, and videos
- **Data Engineering**: Build data pipelines, analyze datasets, generate visualization dashboards
- **Workflow Automation**: Execute complex multi-step tasks like code reviews, documentation generation, test automation
- **Development Assistance**: Write and test code in isolated environments, handle file operations

## Technical Highlights

- **Model Agnostic**: Works with any LLM implementing the OpenAI-compatible API
- **Long Context Support**: Models with 100k+ tokens recommended for deep research and multi-step tasks
- **Reasoning Capabilities**: Requires models with reasoning support for adaptive planning and complex decomposition
- **Multimodal Inputs**: Supports image and video understanding
- **Strong Tool Use**: Requires reliable function calling and structured output support
- **Docker Integration**: Supports three sandbox modes—local execution, Docker execution, and Kubernetes execution
- **MCP Servers**: Supports configurable MCP servers and skills for extensibility
- **Embedded Python Client**: Can be used as an embedded Python library without running full HTTP services
