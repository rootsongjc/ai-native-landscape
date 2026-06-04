---
name: Tabby
slug: tabby
homepage: https://tabby.tabbyml.com
repo: https://github.com/tabbyml/tabby
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Dev Tools
description: >-
  Tabby is an open-source, self-hosted AI coding assistant designed for teams that need on-premises deployment and code
  privacy.
author: TabbyML
ossDate: '2023-03-16T09:18:01.000Z'
featured: false
status: tracked
---

## Overview

Tabby is an open-source, self-hosted AI coding assistant that provides a private alternative to cloud copilots. It includes code browsing, repository-aware context, a chat-based Answer Engine, and integrations for IDEs and Docker deployment.

## Key features

- Self-hosted deployment: run entirely within private networks without external DBMS.
- Rich integrations: IDE plugins, REST APIs, and Docker images for easy integration.
- Multi-model & hardware support: works with consumer GPUs and various backend models.

## Use cases

- Internal knowledge base and Q&A for engineering teams with sensitive code.
- Development assistance: code completion, repo-context retrieval, and automated review workflows.
- Research and sandboxing: experiment with models and toolchains in controlled environments.

## Technical details

- Modular architecture with Answer Engine, Code Browser, and background job system.
- Buildable from source (Rust/Cargo), with Docker images for quick deployment.
- Extensible via REST APIs and supports indexing of repositories and documents for RAG-style retrieval.
