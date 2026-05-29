---
name: Deep Agents
slug: deepagents
homepage: https://docs.langchain.com/oss/python/deepagents/overview
repo: https://github.com/langchain-ai/deepagents
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: >-
  A LangChain library for building deep agents that combine planning, subagents, filesystem tools and persistent memory
  for multi-step reasoning.
logo: ''
author: LangChain
ossDate: '2025-07-27T23:07:53.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Deep Agents is a LangChain library designed to build "deep" agents capable of long-running, multi-step reasoning. It combines planning tools, subagents, filesystem utilities and persistent memory to decompose complex tasks into manageable subtasks and coordinate their execution reliably.

## Key features

- Built-in planning and todo-list tools to break down problems and track progress.
- Subagent and middleware support for responsibility isolation and composability.
- Filesystem tools and memory primitives to manage long contexts and external data.

## Use cases

- Deep research assistants that gather, synthesize and produce structured reports.
- Automated code workflows that decompose large engineering tasks into tool-driven steps.
- Multi-stage business automation requiring cross-step state and memory.

## Technical highlights

- Modular middleware architecture (PlanningMiddleware, FilesystemMiddleware, SubAgentMiddleware) for extensibility.
- Native Python support and packaging (pip/poetry) and integration with LangGraph for model/tool interoperability.
- MIT-licensed for broad reuse in both community and commercial projects.
