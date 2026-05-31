---
name: LLM
slug: llm
homepage: https://llm.datasette.io/
repo: https://github.com/simonw/llm
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
  - LLM
description: A command-line and Python toolkit for interacting with remote and local large language models.
logo: ''
author: Simon Willison
ossDate: '2023-04-01T21:16:57.000Z'
featured: false
status: tracked
---

## Introduction

LLM is a command-line and Python toolkit for interacting with OpenAI, Anthropic, Google, Meta and many other large language models. It supports both remote APIs and models that can be installed and run locally via plugins, offering prompt execution, embeddings, structured extraction, and tool execution for terminal-first experimentation and automation.

## Key features

- Dual interfaces: convenient CLI plus a reusable Python API.
- Plugin ecosystem: extendable to local runtimes (e.g., Ollama) and various cloud model providers.
- Persistent logging: store prompts and responses in SQLite for audit and analysis.
- Multi-modal capabilities: extract text from images and handle attachments.

## Use cases

- Quickly run and iterate on prompts from the terminal.
- Integrate model calls into automation scripts and data pipelines.
- Run local/offline inference by installing models via plugins.

## Technical details

- Implemented primarily in Python with a plugin-based architecture.
- Installable via pip, pipx, Homebrew, or uvx; well-documented and tested.
- Licensed under Apache-2.0; active community with frequent releases.
