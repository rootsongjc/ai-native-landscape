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
status: tracked
---

## Overview

mgrep is a CLI-native semantic search tool that brings natural-language queries to codebases, documents, and media files. It indexes local files and optional web sources, keeps results fresh with background watching, and delivers focused semantic snippets that reduce token waste for LLMs and agents. Designed for both human workflows and agent integrations, it bridges the gap between traditional grep and modern AI-assisted search.

## Key Features

Natural-language queries let developers search code and documents using plain English rather than exact patterns. Background indexing and live sync via `mgrep watch` ensure search results stay current without manual re-indexing. Multimodal support covers code, text, PDFs, and images, with audio and video planned for future releases. Built-in agent integrations provide installer commands and authentication flows so coding agents can leverage mgrep seamlessly.

## Use Cases

Developers use mgrep for daily code navigation, auditing unfamiliar repositories, and rapidly locating business logic across large projects. It shines in CI environments where semantic search replaces brittle pattern matching, and in LLM-assisted workflows where focused context snippets dramatically reduce prompt token consumption.

## Technical Details

Built in TypeScript and distributed via npm, mgrep combines a cloud-backed Mixedbread store with local synchronization and reranking for high relevance. Configuration is flexible through `.mgreprc.yaml` files or environment variables, making it easy to integrate into CI/CD pipelines. The project is Apache-2.0 licensed and welcomes community contributions and extensions.
