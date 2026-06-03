---
name: Memori
slug: memori
homepage: https://memorilabs.ai
repo: https://github.com/gibsonai/memori
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Agents
  - RAG
description: An open-source SQL-native memory engine that provides persistent, queryable context for Large Language Models.
author: GibsonAI
ossDate: '2025-07-24T07:07:51Z'
featured: false
status: tracked
---

## Overview

Memori is an agent-native memory infrastructure that provides an LLM-agnostic layer for turning agent execution into structured, persistent state stored in standard SQL databases. By using familiar relational databases like SQLite, PostgreSQL, or MySQL, it avoids vendor lock-in to proprietary vector databases while giving agents the ability to retain knowledge, user preferences, and task context across sessions.

## Key Features

- SQL-native storage that keeps memories in standard relational databases, making export, migration, audit, and backup straightforward with existing tooling.
- Multi-framework compatibility with OpenAI, Anthropic, LiteLLM, LangChain, and other common LLM frameworks for easy integration into any agent stack.
- Intelligent memory management with automatic entity extraction, relationship mapping, and context prioritization to surface the most relevant history at query time.

## Use Cases

- Personal assistants and chatbots that need to maintain conversational context, user preferences, and learned facts across multiple sessions and interactions.
- Customer support platforms where agents must recall past tickets, resolution history, and customer-specific details to provide consistent service.
- Developer tooling and coding assistants that benefit from persistent memory of project architecture, coding patterns, and team decisions.

## Technical Details

- Retrieval-injection architecture that retrieves relevant memories before each LLM call and records extracted information after responses, creating a continuous learning loop.
- Multiple memory modes including short-term, long-term, auto-retrieval, and conscious injection with configurable prioritization and compression strategies.
- Simple deployment using standard SQL connection strings, compatible with managed database services like Supabase and Neon, with built-in export and backup support.
