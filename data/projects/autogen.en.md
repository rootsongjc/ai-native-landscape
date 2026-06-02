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

## Overview

AutoGen is Microsoft's programming framework for agentic AI, designed for building multi-agent systems with flexible conversation patterns. It uses a layered and extensible architecture where each layer has clearly divided responsibilities, enabling developers to work at different levels of abstraction from high-level APIs to low-level components for creating sophisticated multi-agent workflows.

## Key Features

AutoGen provides a Core API for message passing and event-driven agents with local and distributed runtime, an AgentChat API for rapid prototyping of common multi-agent patterns like group chats, and an Extensions API for first- and third-party integrations with LLM clients and code execution. It also includes AutoGen Studio (no-code GUI) and AutoGen Bench (benchmarking suite) as essential developer tools.

## Use Cases

AutoGen is suitable for building multi-agent applications that require coordinated conversation patterns, such as Magentic-One which handles web browsing, code execution, and file handling. It serves teams prototyping agent-based solutions, evaluating agent performance with benchmarks, and developing production multi-agent systems across various domains.

## Technical Details

The framework supports cross-language development with .NET and Python, offers local and distributed runtime options, and provides extensibility through its layered API design. It integrates with major LLM providers (OpenAI, Azure OpenAI) and includes tooling for observability, benchmarking, and no-code agent composition. The project is backed by an active community with weekly office hours, Discord, and GitHub Discussions.
