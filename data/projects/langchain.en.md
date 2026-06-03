---
name: LangChain
slug: langchain
homepage: https://python.langchain.com/docs/
repo: https://github.com/langchain-ai/langchain
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - AI Agent
  - LLM
  - RAG
description: A framework for building LLM-powered applications with composable components and rich integrations.
author: LangChain contributors
ossDate: '2022-10-17T02:58:36.000Z'
featured: true
status: tracked
---

LangChain is the leading agent engineering platform for building LLM-powered applications. It offers composable components for models, embeddings, vector stores, retrievers, and tools, enabling developers to rapidly assemble RAG pipelines, agentic workflows, and other production-grade LLM systems.

## Core Components

- **Composable chains and agents** with abstract interfaces for swapping or extending individual parts of a pipeline
- **Dozens of built-in integrations** covering model providers, vector databases, and retrieval backends out of the box
- **LangSmith** for end-to-end observability, tracing, and evaluation of LLM applications
- **LangGraph** for stateful, graph-based agent orchestration with checkpointing and human-in-the-loop support
- **Plugin-based architecture** that decouples business logic from specific vendor implementations

## Use Cases

- Building retrieval-augmented generation (RAG) systems that connect LLMs to proprietary knowledge bases for accurate Q&A
- Orchestrating multi-step agent workflows that chain tool calls, API integrations, and reasoning steps
- Developing production chatbots, document analysis pipelines, and automated data-processing applications
- Rapid prototyping of LLM features with a rich set of templates, tutorials, and enterprise-grade examples

## Technical Highlights

- Primarily written in Python with a parallel JavaScript/TypeScript ecosystem (LangChain.js) for full-stack coverage
- Supports all major model providers and vector stores through standardized adapter interfaces
- Over 100k GitHub stars with extensive documentation, community contributions, and active maintenance
