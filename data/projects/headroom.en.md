---
name: headroom
slug: headroom
homepage: https://docs.headroomlabs.ai/docs
repo: https://github.com/headroomlabs-ai/headroom
license: Apache-2.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Context Compression
  - Token Optimization
  - MCP
  - Proxy
description: >-
  A context compression layer that shrinks tool outputs, logs, files, RAG
  chunks, and conversation history before they reach the LLM — 20% fewer tokens
  for coding agents, 60–95% fewer for JSON, same answers. Library, proxy, and
  MCP server.
author: headroomlabs-ai
ossDate: '2026-01-07'
featured: false
status: tracked
---

## Overview

Headroom compresses everything an AI agent reads — tool outputs, logs, RAG chunks, files, and conversation history — before it reaches the LLM, delivering the same answers for a fraction of the tokens. Compression runs entirely on your machine; no prompt or file content is sent anywhere. It works as an inline library, a zero-code-change proxy, an agent wrapper, or an MCP server.

## Key Features

- Library mode: `compress(messages)` in Python or TypeScript, inline in any application
- Proxy mode: `headroom proxy --port 8787` with zero code changes, any language
- Agent wrap: one command wraps claude, codex, grok, copilot, cursor, aider, opencode, cline, and more; undo with `headroom unwrap`
- MCP server exposing `headroom_compress`, `headroom_retrieve`, and `headroom_stats` to any MCP client
- Cross-agent memory: one shared store across Claude, Codex, Gemini, and Grok with automatic dedup
- Reversible compression (CCR): originals are cached locally and retrieved on demand; output token reduction also trims what the model writes back

## Use Cases

- Cut token spend of coding agents without changing their prompts or workflows
- Shrink huge JSON tool outputs and log dumps before they hit the context window while keeping critical lines discoverable
- Share compressed memory and learned corrections across multiple agents on the same machine

## Technical Details

- Pipeline is CacheAligner → ContentRouter → CCR: ContentRouter detects the content type and dispatches to SmartCrusher (JSON), CodeCompressor (AST-based), or the Kompress-v2-base text model hosted on Hugging Face
- CCR caches the original text locally so the model can call `headroom_retrieve` to fetch the uncompressed version exactly when it needs it
- CacheAligner flags volatile content that would bust a provider's KV-cache prefix but never rewrites prompts, preserving prompt-cache hit rates
- `headroom wrap <agent>` starts a local proxy, installs the Serena MCP server for semantic code navigation, and launches the agent configured to route through Headroom; `headroom learn` mines failed sessions and writes corrections to CLAUDE.md, AGENTS.md, GEMINI.md, or GROK.md
