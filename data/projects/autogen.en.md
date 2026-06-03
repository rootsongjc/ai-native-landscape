---
name: AutoGen
slug: autogen
homepage: https://microsoft.github.io/autogen/
repo: https://github.com/microsoft/autogen
license: Other
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Dev Tools
  - Utility
description: >-
  A programming framework for agentic AI that enables development of multi-agent workflows with a layered and extensible
  design.
author: Microsoft
ossDate: '2023-08-18T11:43:45.000Z'
featured: false
status: tracked
---
AutoGen is Microsoft's programming framework for agentic AI, designed for building multi-agent systems with flexible conversation patterns. It uses a layered and extensible architecture where each layer has clearly divided responsibilities, enabling developers to work at different levels of abstraction from high-level APIs to low-level components.

## Layered Architecture

- **Core API** for message passing, event-driven agents, and runtime infrastructure
- **AgentChat API** for rapid prototyping of common multi-agent patterns like group chats and round-robin
- **Extensions API** for integrating LLM clients, code execution sandboxes, and third-party tools
- Clear separation between orchestration logic, agent behavior, and tool integration

## Developer Tools

- **AutoGen Studio** — a no-code web GUI for visually composing and debugging agent workflows
- **AutoGen Bench** — a benchmarking suite for evaluating agent performance across tasks
- Built-in observability hooks for tracing message flows and agent decisions
- Weekly office hours, Discord community, and GitHub Discussions for support

## Multi-Agent Patterns

- Group chat with configurable speaker selection and turn management
- Sequential and nested conversational patterns for hierarchical task decomposition
- Magentic-One pattern for web browsing, code execution, and file handling
- Custom agent roles with specialized capabilities and tool access

## Integration & Extensibility

- Cross-language support with .NET and Python SDKs
- Local and distributed runtime options for development and production
- Compatible with OpenAI, Azure OpenAI, and other major LLM providers
- Pluggable tool system for adding custom functions, APIs, and code executors
