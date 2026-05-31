---
name: Basic Memory
slug: basic-memory
homepage: https://basicmemory.com
repo: https://github.com/basicmachines-co/basic-memory
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Application
  - CLI
  - Dev Tools
  - Memory
description: >-
  A local-first knowledge-as-Markdown system that lets LLMs read and write your memory via the Model Context Protocol
  (MCP).
logo: ''
author: Basic Machines
ossDate: '2024-12-02T22:40:43Z'
featured: false
status: tracked
---

## Detailed Introduction

Basic Memory is a local-first knowledge system that stores user knowledge as structured Markdown files and exposes them to compatible LLMs via the Model Context Protocol (MCP). It implements a writable “memory” concept that keeps data local by default while offering optional cloud sync and cross-device collaboration, making it suitable as a persistent personal knowledge base and conversational context layer.

## Main Features

- Local-first storage: Notes are plain Markdown files under user control.
- Bi-directional read/write: Both humans and LLMs read and write the same files, building a traversable memory graph.
- MCP support: Implements the Model Context Protocol for cross-tool interoperability.
- Lightweight indexing: Uses a local SQLite index for fast search and traversal.
- CLI & integrations: Provides CLI tools and integrations with editors and apps like VS Code and Claude Desktop.

## Use Cases

Fits scenarios that require persistent conversational context: developer project knowledge, research notes with semantic search, live-note syncing for meetings or streams, and personal assistants that maintain long-term memory across sessions. It can be used as a privacy-preserving alternative to cloud-only RAG setups.

## Technical Features

Parses Markdown files into Entities, Observations and Relations and builds a local SQLite index to support retrieval and graph traversal. The system provides a MCP server component, event-driven APIs, and bidirectional sync, enabling LLM-driven knowledge writing while keeping data under the user's control.
