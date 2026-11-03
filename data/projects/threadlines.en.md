---
name: Threadlines
slug: threadlines
homepage: https://www.threadlines.dev
repo: https://github.com/Threadlines/threadlines
license: MIT
category: applications-products
subCategory: desktop-clients
tags:
  - Coding Agents
  - Desktop App
  - Multi-Agent
  - Git Worktree
  - Claude Code
description: >-
  Threadlines is an open-source desktop app (macOS, Windows, Linux) for running coding agents — an agentic development
  environment (ADE) for Claude Code, Codex, OpenCode, Cursor, and agents from the ACP registry. Several agents can share
  one thread, agents can start their own threads, and pull requests, CI checks, source control, and a built-in browser
  sit beside the chat. It runs on the user's computer with no hosted backend.
author: Threadlines
ossDate: '2026-05-25'
featured: false
status: tracked
---
## Overview

Threadlines is an open-source ADE (agentic development environment) for Claude Code, Codex, OpenCode, Cursor, and other coding agents. It keeps the agent conversation, a live browser, project files, terminal, and source control open together, so you can see, steer, and recover agent work without reconstructing context across tools. It drives the vendors' own agent CLIs with the user's own accounts and runs entirely on the user's computer — no hosted backend.

Several agents can share one thread so one can review another's changes, and agents can start their own threads, each on the model it picks. Multiple computers can be linked — an agent on one machine can start a thread on another after asking, with a Fleet view showing what every computer is running.

## Key Features

- **Several Agents in One Thread**: Add a second agent to check the first one's work, or ask Codex or Claude a question while another agent keeps going
- **Agents Start Their Own Threads**: An agent can split a big job across new threads, each on the model it picks, with answers flowing back to it
- **Multi-Computer Fleet**: Link a Mac, a Windows PC, or Linux boxes; approved agents and the `threadlines` command can start threads on other machines, after asking unless allowed
- **Pull Requests and CI Beside the Chat**: Review a pull request and its checks next to the thread that made it, and send feedback straight to the agent
- **Browser Beside Every Thread**: Review visual changes and send the exact page state back to the agent without leaving the workspace
- **Source Control You Can Act On**: Inspect per-file changes and the commit graph, then commit, push, and open a pull request from the same app
- **Scheduled and Event Tasks**: Agents start on your prompt at chosen times, or when a GitHub issue gets a label or a webhook arrives
- **Durable Sessions**: Resume work after restarts and switch a thread to another agent without losing the conversation or working tree
- **Phone as a Client**: Pair with a QR code against the desktop app or a self-hosted server; get alerts when an agent needs you

## Use Cases

- **Run and Steer Coding Agents**: Keep conversation, browser, files, terminal, and Git in one workspace instead of juggling tools
- **Cross-Review Between Agents**: Have one agent review another's changes in the same thread before you merge
- **Multi-Machine Agent Work**: Let agents use the right machine for a task — build on Linux, review on Mac — under a Fleet view
- **Unattended Agent Runs**: Schedule agent tasks or trigger them from GitHub labels and webhooks, with phone alerts when attention is needed

## Technical Details

- **Drives Vendor CLIs Directly**: Threadlines runs the agents' own CLIs (Claude Code, Codex, OpenCode, Cursor, ACP registry agents) with the user's accounts; first-run setup installs missing CLIs with one click
- **Per-Thread Git Worktrees**: Each thread can get its own Git worktree, isolating working trees between concurrent agent tasks
- **Local-First, No Hosted Backend**: Runs on the user's computer; the phone client pairs against the desktop app or a self-hosted server
- **Exact Context Attachments**: Attach a selected reply, code, or terminal lines directly to the next message instead of re-prompting
- **Visible Process Model**: Tasks, subagents, and background processes are tracked with live state and stop controls — nothing runs invisibly
- **Transcript-Based Usage Dashboards**: Token and cost dashboards read the agents' own transcripts on every computer, merged into one view
- **TypeScript monorepo** with CI and release publishing for macOS, Windows, and Linux
