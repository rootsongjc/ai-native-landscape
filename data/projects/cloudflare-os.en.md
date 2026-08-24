---
name: Cloudflare OS
slug: cloudflare-os
homepage: https://os.cloudflare.app
repo: https://github.com/cloudflare/cloudflare-os
license: Apache-2.0
category: applications-products
subCategory: productivity-tools
tags:
  - Agent Workspace
  - Cloudflare Workers
  - Durable Objects
  - Productivity
  - Self-hosted
description: An agent workspace built on Cloudflare Workers for creating documents, building apps, and running agents with company context and systems.
author: Cloudflare
ossDate: '2026-04-15T00:00:00Z'
featured: false
status: tracked
---

## Overview

Cloudflare OS is an open-sourced internal Cloudflare project that provides an enterprise "company OS" — an AI productivity environment where users create documents, build apps, and run agents with access to company context. Organizations can deploy it into their own Cloudflare account or self-host it on workerd.

## Key Features

- Gadgets: private, sandboxed instances of productivity apps that AI agents can safely modify, with real-time multiplayer collaboration.
- Built-in coding agent with a Code Mode that writes and executes code on the fly; works with multiple LLM providers including self-hosted models.
- Gatekeepers: capability-based security layer where service-specific workers moderate agent access to external APIs (GitHub, Google, Slack, Notion) with human-in-the-loop approval.
- Blueprints: shareable templates containing full application code, acting as the OS's "executables".

## Use Cases

- Enterprise AI workspace for generating slide decks, documents, and reports with company context.
- Building collaborative internal tools — whiteboards, dashboards, games — without dedicated infrastructure.
- Running agents that act on company systems (edit Google Docs, manage GitHub repos) under explicit approval workflows.

## Technical Details

- Gadgets run as Dynamic Worker Facets with internet access disabled; they communicate only via Workers Bindings to explicitly designated resources, while client code runs in CSP-restricted sandboxed iframes using postMessage.
- Workspaces are Durable Objects holding user data and app instances; code storage and versioning use isomorphic-git, with CodeMirror operational transforms for real-time edit sync.
- Client-server communication uses Cap'n Web RPC with low boilerplate, automatically exposing agent-friendly APIs for every app.
- Modeled as an OS: workshop-backend is the kernel, gatekeeper workers are device drivers, workshop-frontend is the shell, gadgets are processes, blueprints are executables.
