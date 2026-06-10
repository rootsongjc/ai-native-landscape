---
name: AgentCookie
slug: agentcookie
homepage: null
repo: https://github.com/mvanhorn/agentcookie
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agents
  - CLI
  - Chrome
  - macOS
  - Tailscale
  - Automation
description: A CLI tool that keeps browser sessions in sync across Macs over encrypted Tailscale connections, enabling AI agents to wake up authenticated on remote machines.
author: mvanhorn
ossDate: '2026-05-16'
featured: false
status: tracked
---

## Overview

AgentCookie syncs browser sessions and cookies between Macs over encrypted Tailscale connections. It enables AI agent runtimes running on remote Macs to wake up authenticated, maintaining continuous session sync without cloud middleware.

## Key Features

- Peer-to-peer browser session sync over Tailscale encryption
- Keeps AI agent sessions authenticated across machines
- Works with any agent runtime including OpenClaw and Hermes
- No cloud middleman — direct macOS-to-macOS sync
- Continuous background sync of Chrome cookies and sessions

## Use Cases

- Run AI agents on a dedicated Mac while browsing on your daily driver
- Keep remote agent sessions authenticated without manual login
- Enable headless agent automation with real browser credentials

## Technical Details

- Built in Go with native macOS integration
- Uses Tailscale for encrypted peer-to-peer connectivity
- Syncs Chrome browser cookies and session data continuously
