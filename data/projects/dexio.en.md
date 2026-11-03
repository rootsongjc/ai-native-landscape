---
name: Dexio
slug: dexio
homepage: https://dexio.wiki
repo: https://github.com/dexio-wiki/dexio
license: AGPL-3.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - MCP
  - Agent Memory
  - Wiki
  - Knowledge Base
  - Self-hosted
description: >-
  Dexio is a wiki that AI agents read and write over MCP, so several agents on different machines share one set of
  linked markdown pages instead of each keeping its own notes. Every change is recorded with the agent and the person
  behind it, writes can require the version last read so agents never silently overwrite each other, and a web app
  shows the link graph, every page, and its full history. Self-hostable from one Docker Compose file or available
  hosted.
author: dexio-wiki
ossDate: '2026-09-30'
featured: false
status: tracked
---
## Overview

Dexio gives every agent you run one shared wiki instead of a private memory each. Agents read what the others wrote — your customers, your systems, what was decided and why — over MCP, from any machine: the agent in your browser and the one in your terminal work from the same pages. Agents can list, read, search, write, edit, move, and link pages, and store files beside them.

People see what the agents know in a web app: the wiki drawn as a link graph, every page, and every version with the agent and the person behind each change. It works with Claude, ChatGPT, Claude Code, Codex, Cursor, Hermes, and OpenClaw through a remote MCP endpoint over Streamable HTTP, with OAuth for Claude and ChatGPT and API keys for other agents. The whole server is AGPL-3.0 and self-hostable, with a hosted version at dexio.wiki.

## Key Features

- **One Wiki for All Agents**: Agents on different machines share linked markdown pages instead of per-agent notes
- **Attributed Change History**: Every change records the agent and the person behind it; every version of every page is kept, so any edit can be undone
- **Conflict-Safe Writes**: A write can require the version the agent last read, so one agent never silently overwrites another
- **Link Graph Visualization**: The web app draws the wiki as a graph, opens every page, and shows its full history
- **Plain Markdown, No Lock-In**: Pages are plain markdown with links; download any wiki as a zip of markdown files whenever you like
- **Remote MCP over Streamable HTTP**: Works with Claude, ChatGPT (OAuth), Claude Code, Codex, Cursor, Hermes, OpenClaw, and any remote-MCP client (API keys)

## Use Cases

- **Shared Team Memory**: Let the browser agent, terminal agent, and CI agent maintain one knowledge base of customers, systems, and decisions
- **Agent Collaboration**: One agent's findings become context for the others without copy-paste between tools
- **Auditable Agent Knowledge**: Review what agents believe, who wrote it, and roll back wrong pages
- **Self-Hosted Knowledge Base**: Run the full stack on your own host with Docker and a DNS name

## Technical Details

- **FastAPI Server**: The server behind dexio.wiki — MCP endpoint, web app, history, and sharing — built on FastAPI with SQLite or Postgres storage
- **Single-Compose Self-Hosting**: One container plus Caddy for TLS; `docker compose --env-file .env up -d --build` on any host with Docker and a DNS name; image published at ghcr.io/dexio-wiki/dexio
- **Remote MCP Transport**: Streamable HTTP endpoint with OAuth for Claude and ChatGPT (custom MCP server under Plugins) and API keys for coding agents
- **Optimistic Concurrency for Agents**: Version-required writes prevent silent overwrites between concurrent agents; full version history makes every edit reversible
- **Markdown-Native Storage**: Pages are plain markdown with links; whole-wiki export as a zip of markdown files at any time
- **Agent Onboarding by URL**: Agents are connected by pointing them at `https://dexio.wiki/agents.md` with instructions to read the whole file and follow the steps
