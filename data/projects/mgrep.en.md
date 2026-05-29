---
name: mgrep
slug: mgrep
homepage: https://demo.mgrep.mixedbread.com
repo: https://github.com/mixedbread-ai/mgrep
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - CLI
  - Search
description: A CLI-native semantic search tool for code, documents and media, with background indexing and agent integrations.
logo: ''
author: Mixedbread
ossDate: '2025-11-06T01:01:47Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

mgrep is a CLI-native semantic search tool that brings natural-language search to codebases and documents. It indexes local files (and optionally web sources), supports searching code, text, PDFs and images, and keeps results up-to-date with `mgrep watch`. Designed for both humans and agent workflows, mgrep reduces token waste for LLMs by providing focused, semantic snippets rather than forcing models to scan entire repositories.

## Main Features

- Natural-language queries for intuitive code and document search.
- Background indexing and live sync via `mgrep watch`.
- Multimodal support: code, text, PDFs, images (audio/video coming soon).
- Agent integrations: installer commands and auth flows for coding agents to use mgrep seamlessly.

## Use Cases

mgrep is useful for developer navigation, code auditing, rapid discovery of business logic, and fact retrieval for LLMs and agents. Common scenarios include locating implementation sites, contextual review, running semantic searches in CI, and demonstrating functionality via the project demo at <https://demo.mgrep.mixedbread.com>.

## Technical Characteristics

- Built in TypeScript and distributed via npm, supporting CLI and programmatic usage.
- Combines a cloud-backed Mixedbread store with local sync and reranking for relevance.
- Highly configurable via `.mgreprc.yaml` or environment variables for CI/CD workflows.
- Apache-2.0 licensed and community-friendly for contributions and extensions.
