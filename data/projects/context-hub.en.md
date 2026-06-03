---
name: Context Hub
slug: context-hub
homepage: null
repo: https://github.com/andrewyng/context-hub
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - AI Agent
  - Data
  - Tool
description: >-
  Context Hub (Chub) is an open-source project initiated by Andrew Ng that provides curated, versioned documentation for
  AI coding agents, making them smarter with every task through annotations and feedback mechanisms. All content is
  openly maintained in Markdown format with support for versioned and language-specific documentation retrieval.
author: Andrew Ng（吴恩达）
ossDate: '2025-03-17'
featured: false
status: tracked
---
## Overview

Context Hub (Chub) is an open-source project initiated by renowned AI expert Andrew Ng to address two core challenges faced by AI coding agents: API hallucinations and session knowledge loss. The project provides curated, versioned documentation for AI coding agents, enabling them to get smarter with every task through annotation and feedback mechanisms.

All documentation content is openly maintained in Markdown format in the GitHub repository, allowing anyone to inspect exactly what agents read and contribute improvements. Context Hub offers search, fetch, annotation, and feedback capabilities through its CLI tool (`chub`), creating a self-improving learning loop for agents.

## Key Features

- **Curated Documentation**: Provides carefully selected API documentation to reduce noise during agent searches and improve code accuracy
- **Versioned & Language-Specific**: Supports documentation variants for different programming languages (Python, JavaScript, etc.), ensuring agents receive language-specific accurate information
- **Annotation System**: Allows agents to attach local notes to documents that persist across sessions and automatically appear on future fetches
- **Feedback Mechanism**: Collects agent usage feedback through up/down votes, helping documentation authors continuously improve content quality
- **Incremental Fetch**: Supports fetching only needed document portions to avoid wasting tokens
- **Open Collaboration**: All content maintained in Markdown format; community can contribute documentation and skills via PRs

## Use Cases

- **AI Coding Agents**: Provide accurate API documentation for AI coding agents like Claude Code, GitHub Copilot, etc.
- **Documentation Management**: Serve as a centralized management and version control platform for internal team API documentation
- **Knowledge Base Building**: Build learnable, versioned technical knowledge bases for AI agents
- **Agent Skill Development**: Develop reusable skills and tool documentation for agents
- **Documentation Contribution**: API providers, framework authors, and community can contribute documentation to benefit the entire ecosystem

## Technical Highlights

- **CLI Tool**: Install via `npm install -g @aisuite/chub`
- **Core Commands**:
  - `chub search [query]`: Search documents and skills
  - `chub get <id> [--lang py|js]`: Fetch documents or skills
  - `chub annotate <id> <note>`: Attach annotations to documents
  - `chub feedback <id> <up|down>`: Vote on documents
- **Persistent Storage**: Annotations and feedback persist across sessions, forming a learning loop
- **Markdown Format**: All content uses Markdown with YAML frontmatter format
- **Version Control**: Documentation is version-managed with support for traceability and rollback
- **Multi-Language Support**: Supports documentation variants for Python, JavaScript, and other programming languages
- **License**: MIT
