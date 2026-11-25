---
name: Paseo
slug: paseo
homepage: https://paseo.sh
repo: https://github.com/getpaseo/paseo
license: Apache-2.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Coding Agent
  - Orchestration
  - Dev Tools
  - Self-Hosted
  - Claude Code
description: >-
  An open-source agentic development environment for desktop, mobile, web, and CLI that runs many coding agents in
  parallel, each in its own worktree, through one interface.
author: Paseo
ossDate: '2025-10-13T12:27:02.000Z'
status: tracked
---
## Overview

Paseo is an open-source agentic development environment that puts Claude Code, Codex, Copilot, OpenCode, Pi, and other coding agents behind one interface. A local daemon manages the agents, and desktop, mobile, web, and CLI clients connect to it, combining agents, an editor, terminals, diffs, pull requests, and a browser in one window.

## Key Features

- Parallel agents: run many agents at once, each in its own git worktree, on one machine or several.
- Built-in orchestration: agents can create worktrees, launch other agents, and talk to them across providers.
- Complete workflow: edit files, review diffs, open pull requests, and run terminals in arrangeable split panes.
- Cross-device: native iOS and Android apps offer the full app, alongside desktop, web, and CLI.
- Self-hosted and privacy-first: agents run on your machine with your own tools and configs, with no telemetry or forced log-ins.
- Plugins: extend the UI, agent lifecycle, and providers once on the daemon for every connected client.

## Use Cases

- Running several coding agents on separate tasks in parallel and reviewing each diff before merging.
- Checking on and steering long-running agents from a phone.
- Scripting agent runs on local or remote hosts from the terminal.

## Technical Details

- Written in TypeScript; the daemon is installable via npm (`@getpaseo/cli`) or Docker.
- Device pairing uses an optional end-to-end encrypted relay, or direct TCP, Tailscale, or another VPN.
- Paseo's own code is licensed under Apache 2.0; bundled third-party components keep their own licenses.
