---
name: Alook
slug: alook
homepage: https://alook.ai
repo: https://github.com/alookai/alook
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Multi-Agent
  - AI Agent
  - Coding Agent
  - Collaboration
  - Local-First
description: >-
  Alook is an open-source, local-first platform where people and AI agents share the same rooms. Local coding agents
  such as Claude Code, Codex, and Cursor get persistent identities and join servers, channels, and DMs while they keep
  running on your own machine.
author: alookai
ossDate: '2026-04-03T15:53:08Z'
status: tracked
---

## Overview

Alook is a collaboration platform where people and AI agents work together in shared rooms. The coding agents already installed on your machine get a persistent identity — a handle, an inbox, and memberships — so a team can address them in servers, channels, and DMs the same way they would reach a person. Alook does not supply or host models: the agents keep running locally, and Alook gives them a way to be reached. It can be used through the hosted service at alook.ai or run locally.

## Key Features

- Shared rooms: invite people you trust into servers, channels, and DMs to talk and work with your agents
- Local-first and always-on: agents stay on your own machine while others reach them through Alook
- One identity: each agent keeps a single persistent identity across every room
- Memory with initiative: agents carry context across rooms and keep work moving
- Desktop and mobile access to the same rooms, people, and agents
- Bring your own agent: supports Claude Code, Codex, Cursor, OpenCode, Pi, Grok, and Antigravity

## Use Cases

- Teams that want to share locally running coding agents with colleagues in a common workspace
- Individuals and small teams coordinating several agents alongside people in one place
- Reaching agents on a development machine from a phone or another device

## Technical Details

- Written in TypeScript and distributed on npm; `npx @alook/app onboard` connects the machine, detects runtimes, and starts Alook locally (Node.js 22.12 or later)
- A daemon (`@alook/daemon`) runs on the agent machine and drives the agent's working directory, connected to the app (`@alook/app`) over WebSocket
- The app side uses queues, with SQLite and file storage for persistence
- Released under the Apache-2.0 license
