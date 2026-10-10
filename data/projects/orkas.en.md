---
name: Orkas
slug: orkas
homepage: https://orkas.ai
repo: https://github.com/Orkas-AI/Orkas
license: MIT
category: applications-products
subCategory: desktop-clients
tags:
  - Desktop App
  - Local-First
  - Multi-Agent
  - BYO Keys
  - Agent Marketplace
  - MCP Client
  - Self-Evolving Agents
description: An open-source, local-first multi-agent desktop app where a Commander LLM plans work, dispatches specialist sub-agents, and runs your installed coding CLIs as local sessions — with BYO keys and no vendor lock-in.
author: Orkas-AI
ossDate: '2026-04-29'
featured: false
status: tracked
---

## Overview

Orkas is an open-source, local-first AI desktop app: describe a goal and its Commander LLM plans the work, handles the general parts itself, and coordinates specialist agents in parallel or in sequence. Nine specialist agents ship with the app (30 more in the marketplace), and it drives your installed coding CLIs — Claude Code, Codex, OpenCode, OpenClaw, Hermes — as local sessions under the same Commander. Conversations, files, API keys, knowledge bases, and custom agents stay on your disk; model calls go straight from your machine to the provider. Available for macOS, Windows, and Linux.

## Key Features

- A Commander that understands context, breaks goals into steps, chooses agents/skills/connectors/tools, and handles analysis, writing, research, and file work itself when no specialist fits better
- Nine built-in specialist agents ready at first launch — DeepResearcher, ContentWriter, PptMaker, ProductDeveloper, OfficeWorker, VideoStudio, ImageStudio, UIDesigner, SeoGeoAgent — each with its own skills, memory, and tools
- Drives the open-source ecosystem by plugging external CLI agents (Claude Code, Codex, OpenCode, OpenClaw, Hermes) in as local sessions, coordinated by the same Commander
- Local-first by design — conversations, files, API keys, knowledge bases, and custom agents never leave your disk; model calls route machine-to-provider without passing through Orkas servers
- No vendor lock-in — mix providers across agents (Claude, OpenAI, Gemini, DeepSeek, Kimi, GLM, Qwen, MiniMax, Doubao, or a local endpoint)
- Agents that get better — each agent has private skills and memory and improves through post-task reflection and skill crystallization

## Use Cases

- Running research → writing → deliverable pipelines from one chat ("research the top 5 competitors, write it up, turn it into a deck") with finished files delivered to disk
- Non-developers operating a team of AI specialists through a desktop GUI without touching a terminal
- Coordinating existing coding CLI installations from a single desktop interface instead of juggling terminal sessions

## Technical Details

- Cross-platform desktop app (macOS / Windows / Linux) built on JavaScript/Electron, MIT-licensed, BYO model keys with direct machine-to-provider calls
- Commander + specialist architecture: a general-purpose commander LLM decomposes goals and dispatches to specialist sub-agents running in parallel or sequence over a shared plan
- External coding CLIs are launched as local sessions rather than reimplemented — Orkas orchestrates the binaries you already have installed
- Per-agent private skills and memory with self-evolution through reflection after each task and skill crystallization (reusable skills distilled from completed work)
- Agent marketplace with 30 installable agents; MCP client support for tool integration
