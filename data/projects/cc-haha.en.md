---
name: cc-haha
slug: cc-haha
homepage: https://cchaha.ai
repo: https://github.com/NanmiCoder/cc-haha
license: Unknown
category: applications-products
subCategory: desktop-clients
tags:
  - Claude Code
  - Desktop App
  - Multi-Agent
  - Computer Use
description: >-
  A local-first, cross-platform desktop workbench for Claude Code and AI agents: multi-session management,
  Git worktrees, diff review, multi-agent teams, a skills marketplace, multi-model support, and Computer Use,
  with remote access from mobile apps and IM channels.
author: NanmiCoder
ossDate: '2026-03-31'
featured: false
status: tracked
---

## Overview

cc-haha is a desktop workbench for Claude Code and other AI agents that packs multi-session management with global search, branch and Git worktree launching, diff review, a built-in browser preview, and graphical permission approval into one macOS, Windows, and Linux app. It goes well beyond a terminal wrapper: an Agent Teams workbench coordinates multiple agents in parallel, a skills marketplace installs community skills, and Computer Use lets the agent operate other applications. Companion Android and iPhone apps pair with the desktop by QR code so approvals and new tasks keep moving when you step away.

## Key Features

- Multi-session workbench with global search, branch/worktree launching, per-file diff review, built-in browser preview, and graphical permission approval
- Model choice per conversation: Claude, ChatGPT, or Grok account login, provider presets (DeepSeek, Kimi, GLM and others grouped by provider), and local endpoints
- Agent Teams collaboration workbench where a lead splits and assigns tasks and members run in parallel, plus visual MCP and SubAgent management, dynamic workflow orchestration, and model request tracing
- Skills marketplace browsing ClawHub and SkillHub selections with each skill's source and security-scan status shown up front
- Computer Use: on macOS the agent drives other apps through an independent virtual cursor while your real mouse and keyboard stay free
- Remote access from an Android/iOS app or H5 over QR pairing, IM channels including WeChat, Feishu, DingTalk, Telegram, and WhatsApp, plus scheduled (cron) tasks, image generation, multi-theme UI, and desktop pets

## Use Cases

- Running several Claude Code sessions across branches and worktrees with GUI-based diff review instead of terminal juggling
- Approving agent permission requests and dispatching new tasks from your phone away from the desk
- Coordinating multi-agent teams on one repo with parallel execution and conflict review

## Technical Details

- Built as an Electron application with React and TypeScript, shipped for macOS, Windows, and Linux, storing sessions and configuration locally first
- macOS Computer Use synthesizes a separate virtual cursor and input stream so agent-driven UI automation of other apps does not occupy physical mouse and keyboard
- Remote access pairs the mobile app, H5 page, or IM channel (WeChat, Feishu, DingTalk, Telegram, WhatsApp) with the desktop instance over QR code; approvals and task dispatch flow back through the same channel
- Agent Teams coordinate through a lead/member model with parallel members, task assignment, and per-task status tracking, while model request tracing exposes the underlying model API traffic
