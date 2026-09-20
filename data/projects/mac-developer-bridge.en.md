---
name: Mac Developer Bridge
slug: mac-developer-bridge
homepage: https://github.com/alexanderradahl/mac-developer-bridge
repo: https://github.com/alexanderradahl/mac-developer-bridge
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - macOS
  - ChatGPT
  - Terminal
  - Local-First
description: A local-first MCP server for macOS that lets ChatGPT use the real Mac as its execution environment — shell, filesystem, PTY sessions, background jobs, and read-only Codex history.
author: alexanderradahl
ossDate: '2026-08-15'
featured: false
status: tracked
---

## Overview

Mac Developer Bridge connects ChatGPT's reasoning to the full execution environment of a real Mac over MCP, without adding another model or agent loop in the middle. The bridge itself makes no OpenAI model call: it exposes deterministic local tools (shell, filesystem, PTY sessions, background jobs, stored Codex threads) while ChatGPT remains the agent and the Mac is the execution environment. It is intentionally explicit about its unrestricted, non-sandboxed security model rather than presenting shell access as sandboxed.

## Key Features

- Arbitrary shell execution through `/bin/zsh -lc` under the logged-in macOS user, with no command allowlist by design
- Real PTY sessions that keep interactive shells and terminal programs alive, instead of pretending stdin is a terminal
- Detached background jobs with persistent stdout/stderr logs, status inspection, and process-group termination
- Unrestricted filesystem tools (read/write/append/list/stat/copy/move/chmod/symlink/recursive delete) plus unified-diff application via `git apply`
- Stored Codex thread discovery and paginated reading via read-only `codex app-server` methods, never resuming a thread or starting a model turn
- Optional background Chrome automation operating the real signed-in profile through a managed `MDB` tab group, without stealing focus

## Use Cases

- Recovering a stored Codex thread, inspecting the repo it refers to, and continuing the work from ChatGPT
- Running tests, builds, Git, package managers, database CLIs, and AppleScript already installed on the Mac, driven by ChatGPT
- Keeping long-running local jobs alive across turns and inspecting their logs later
- Operating approved pages in the logged-in Chrome profile in the background while the user keeps working

## Technical Details

- Transports: OpenAI Secure MCP Tunnel (workspace users) or a plain-HTTP loopback front end published over HTTPS by Cloudflare Tunnel, with a menu-bar app generating the ChatGPT setup
- Security posture is fail-closed: `bridge.mjs` re-reads the unlock file before every tool call so removing it refuses the next call; a local kill switch (`scripts/disable.sh`) stops the front end, bridge, background-Chrome native host, job groups, PTY sessions, and federated child MCP servers, verifying the same targets it signalled
- Strict approvals mode adds per-site `chrome-background` grants shared across connected ChatGPT sessions with expiry; relaxed mode (default) matches the operator-chosen trust level of unrestricted shell/file access
- Chrome routing is structural: shell paths to Chrome (AppleScript, JXA, direct launches, `open` of URLs) are always refused with `CHROME_BACKGROUND_REQUIRED`, forcing browser work through the `chrome_*` tools and the self-healing `MDB` pool (8 default, 32 max tabs, 10-minute idle reclaim, growth-only capacity target)
- Local JSONL audit logging with an `audit_tail` tool; per-user persistence through a macOS LaunchAgent; Node.js 18+
- Codex history tools use read-only methods only — never `turn/start` — so reading a thread cannot trigger a model call
