---
name: mgrep
slug: mgrep
homepage: https://demo.mgrep.mixedbread.com
repo: https://github.com/mixedbread-ai/mgrep
license: Apache-2.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - CLI
  - Search
description: A CLI-native semantic search tool for code, documents and media, with background indexing and agent integrations.
author: Mixedbread
ossDate: '2025-11-06T01:01:47Z'
featured: false
status: tracked
---

mgrep is a CLI-native semantic search tool that brings natural-language queries to codebases, documents, and media files. It indexes local files and optional web sources, keeps results fresh with background watching, and delivers focused semantic snippets that reduce token waste for LLMs and agents. Designed for both human workflows and agent integrations, it bridges the gap between traditional grep and modern AI-assisted search.

## Key Features

- **Natural-language queries** that let developers search code and documents using plain English rather than exact patterns
- **Background indexing and live sync** via `mgrep watch` to keep search results current without manual re-indexing
- **Multimodal support** covering code, text, PDFs, and images, with audio and video planned for future releases
- **Built-in agent integrations** with installer commands and authentication flows so coding agents can leverage mgrep seamlessly
- **Flexible configuration** through `.mgreprc.yaml` files or environment variables for CI/CD pipeline integration

## Use Cases

- Daily code navigation, auditing unfamiliar repositories, and rapidly locating business logic across large projects
- CI environments where semantic search replaces brittle pattern matching for more reliable test automation
- LLM-assisted workflows where focused context snippets dramatically reduce prompt token consumption
- Agent-based development where coding assistants need efficient, relevant code retrieval

## Technical Highlights

- Built in TypeScript and distributed via npm for easy installation across platforms
- Combines a cloud-backed Mixedbread store with local synchronization and reranking for high relevance
- Apache-2.0 licensed and welcomes community contributions and extensions
