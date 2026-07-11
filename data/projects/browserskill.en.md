---
name: BrowserSkill
slug: browserskill
homepage: null
repo: https://github.com/Tencent/BrowserSkill
license: MIT
category: coding-devtools
subCategory: browser-automation
tags:
  - AI Agent
  - Browser Automation
  - Dev Tools
description: A CLI and browser extension that lets any shell-capable AI agent borrow your real, logged-in browser to perform browser automation without interrupting your work.
author: Tencent
ossDate: '2026-06-22T07:24:40Z'
featured: false
status: tracked
---
## Introduction

BrowserSkill connects shell-capable AI agents such as Claude Code, Cursor, Codex, and others to your already logged-in browser. Instead of spinning up isolated sessions, agents borrow a specific tab explicitly, return it when the task is done, and leave the rest of your browser untouched, so you can keep working while automation runs in a separate visible Agent Window.

## Key Features

- Reuse real login state so agents work with sites you are already signed into, without separate test accounts
- Browser tasks run in a separate, visible Agent Window, keeping your own browser usable
- Works with any agent that can call a shell through the `bsk` CLI, with no lock-in to a model or framework
- Built-in human-in-the-loop handoff for captchas, logins, and confirmation dialogs

## Use Cases

- Automating web tasks on authenticated sites you already have open
- Letting coding agents drive real browser state during development and testing
- Web scraping, form filling, and end-to-end workflows that require human-only steps

## Technical Highlights

- Local runtime composed of the `bsk` CLI/daemon plus a Chrome/Edge extension
- Cross-platform support for macOS, Linux, and Windows, with a one-line installer
- Ships an installable skill that teaches agent harnesses how to use the `bsk` CLI
