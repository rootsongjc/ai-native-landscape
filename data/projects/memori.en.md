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
logo: ''
author: GibsonAI
ossDate: '2025-07-24T07:07:51Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Memori is an open-source, SQL-native memory engine designed to give any Large Language Model (LLM) persistent, queryable, and auditable memory. Memories are stored in standard SQL databases (SQLite, PostgreSQL, MySQL) that you control, avoiding vendor lock-in and expensive vector database costs.

## Main Features

- SQL-native storage: memories live in familiar relational databases, making export, migration and audit straightforward.
- Multi-framework support: integrates with OpenAI, Anthropic, LiteLLM, LangChain and other common LLM frameworks.
- Intelligent memory management: automatic entity extraction, relationship mapping and context prioritization to surface relevant history.

## Use Cases

Ideal for applications that require persistent conversational context, such as personal assistants, team collaboration tools, customer support, and developer tooling. Memori acts as a backend memory layer so agents can retain background knowledge, user preferences, and task state across sessions.

## Technical Characteristics

- Retrieval-injection flow: retrieve relevant memories before LLM calls and record extracted information after responses.
- Multiple memory modes: short-term, long-term, auto retrieval and conscious injection, with configurable prioritization and compression strategies.
- Easy deployment: connect with a standard SQL connection string and run on existing infra (e.g., Supabase, Neon), with export and backup support.
