---
name: ZCode
slug: zcode
homepage: https://zcode.z.ai/
repo: https://github.com/zai-org/ZCode
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
  - Coding Agent
  - CLI
  - Desktop App
description: Z.ai's open-source coding agent harness that delivers an Electron desktop app, a browser-based workbench, and a terminal CLI/TUI from a single TypeScript codebase.
author: Z.ai
ossDate: '2026-09-20T12:01:16Z'
featured: false
status: tracked
---

## Overview

ZCode is Z.ai's coding agent workbench. One repository contains the Electron desktop client, the web client with its HTTP/WebSocket backend, shared React UI, and the Agent CLI and runtime source. The same `zcode` command covers all terminal-side entry points: run with no arguments for the TUI, pass `--web` to start the browser workbench, or hand other arguments to the agent CLI.

## Key Features

- Three delivery forms from one codebase: Electron desktop app, self-hosted web workbench, and terminal agent (TUI/CLI).
- Single `zcode` launcher — TUI by default, `--web` for browser mode with configurable workspace, port, and host binding.
- Remote development over SSH/WSL, with runtime assets uploaded from the local machine via SFTP instead of pulling from a CDN.
- Web mode security by default: binds `127.0.0.1`, and automatically issues an access token when listening on a non-local address.
- Pluggable provider layer (`packages/provider`, `provider-node`) for model access, with an agent client SDK and RPC framework for embedding.

## Use Cases

- Terminal-first vibe coding with the `zcode` TUI, as a drop-in agent CLI in any shell or editor workflow.
- Running a browser-based coding workbench on a local or remote machine and accessing it from any device on the LAN.
- Using the desktop app for a native Electron experience with the same agent runtime as the CLI and web versions.

## Technical Details

- pnpm-workspace monorepo in TypeScript: `packages/desktop` (Electron main/host/renderer), `packages/web`, `packages/server` (HTTP/WebSocket service and remote connections), `packages/ui` (shared React components and Zustand state), plus `packages/rpc` and `packages/client` (RPC framework and agent client SDK).
- The Agent CLI (`apps/zcode-cli`) is not just a frontend — it provides the agent runtime that the desktop and web clients embed, so all three entry points share one execution engine.
- CLI distribution is assembled as a tar.gz with SHA-256 checksums, a `latest.json` version index, and an `install.sh` script that installs to `~/.zcode/runtime`; API/WebSocket authentication is controlled via `ZCODE_SERVER_AUTH_TOKEN` or a programmatic `authToken` option.
- Web dev mode runs the Vite dev server and backend together, proxying `/ws` and `/api` to the local backend while routing OAuth token exchange separately.
