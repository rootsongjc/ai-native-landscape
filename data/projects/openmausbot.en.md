---
name: OpenMausBot
slug: openmausbot
homepage: https://www.mausbot.com/
repo: https://github.com/milind-soni/OpenMausBot
license: Apache-2.0
category: applications-products
subCategory: desktop-clients
tags:
  - AI Agent
  - Application
  - Multi-Agent
  - Claude Code
  - Self-Hosted
description: >-
  An open-source, local-first desktop chat app where every contact is a real AI agent running on your own Claude, Codex,
  or Grok CLI, each with its own personality, model, computer, and connected apps.
author: milind-soni
ossDate: '2026-08-11T18:58:55.000Z'
featured: false
status: tracked
---
## Overview

OpenMausBot is an open-source alternative to Grok Bot that presents AI agents as a messaging app. Each bot in the sidebar is a real agent backed by a locally installed `claude`, `codex`, or `grok` CLI, with its own personality, model, computer, and connected apps. You chat with bots like contacts, watch them work, and approve the actions that matter.

## Key Features

- Bring your own agents: bots reuse the CLI logins and subscriptions already on your machine, with no new accounts or proxy in between.
- Local first: a small harness server on `127.0.0.1` owns every agent process, and transcripts, keys, and events stay in `~/.openmausbot`.
- Agents with hands: each bot can use a cloud Linux desktop, an isolated local VM, or, after explicit opt-in, the host computer.
- Connects to 500+ apps through Composio.
- Cross-platform desktop builds for macOS, Windows, and Linux.

## Use Cases

- Running a team of specialized personal agents from a single chat interface.
- Delegating computer-use tasks to agents in an isolated VM while keeping approval over sensitive actions.
- Self-hosting a personal-agent product on existing model subscriptions instead of a closed cloud service.

## Technical Details

- Built with TypeScript, React, and Electron.
- A local harness server manages agent CLI processes; engines can be pointed at custom CLI binaries.
- Released under the Apache 2.0 license.
