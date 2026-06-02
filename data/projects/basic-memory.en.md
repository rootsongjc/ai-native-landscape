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

## Overview

Basic Memory is a local-first knowledge system that stores user knowledge as structured Markdown files and exposes them to compatible LLMs via the Model Context Protocol (MCP). It implements a writable memory layer that keeps data local by default while offering optional cloud sync and cross-device collaboration, ensuring AI conversations actually remember context without requiring users to re-explain their projects.

## Key Features

Basic Memory provides local-first Markdown storage under user control, bi-directional read/write for both humans and LLMs building a traversable memory graph, MCP support for cross-tool interoperability, lightweight SQLite indexing for fast search and traversal, and CLI tools with integrations for VS Code and Claude Desktop.

## Use Cases

Basic Memory fits scenarios requiring persistent conversational context: developer project knowledge bases, research notes with semantic search, live-note syncing for meetings or streams, and personal assistants that maintain long-term memory across sessions. It serves as a privacy-preserving alternative to cloud-only RAG setups.

## Technical Details

The system parses Markdown files into Entities, Observations, and Relations, building a local SQLite index to support retrieval and graph traversal. It provides an MCP server component, event-driven APIs, and bidirectional sync, enabling LLM-driven knowledge writing while keeping all data under the user's control.
