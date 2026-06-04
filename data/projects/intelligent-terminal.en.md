---
name: Intelligent Terminal
slug: intelligent-terminal
homepage: https://devblogs.microsoft.com/commandline/announcing-intelligent-terminal-version-0-1/
repo: https://github.com/microsoft/intelligent-terminal
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - Terminal
  - ACP
  - Copilot
  - Developer Tools
description: >-
  An experimental fork of Windows Terminal with native agent integration, supporting any ACP-compatible
  agent CLI including GitHub Copilot, Claude, Codex, and Gemini.
author: microsoft
ossDate: '2026-05-18T10:57:07Z'
featured: false
status: tracked
---

## Overview

Intelligent Terminal is an experimental fork of Windows Terminal by Microsoft that brings native AI agent integration directly into the command line. It works with any Agent Client Protocol (ACP)-compatible agent CLI, auto-detecting installed agents like GitHub Copilot, Claude, Codex, and Gemini on first launch.

## Key Features

- **Agent Status Bar**: Real-time agent status displayed in the terminal interface
- **Agent Pane**: Integrated side panel for interacting with AI agents using shell output context
- **Agent Management**: Auto-detection and configuration of ACP-compatible agent CLIs
- **Error Detection**: Automatic detection and AI-assisted resolution of command-line errors
- **Shell Context Awareness**: Agent has direct context on shell output without copy-pasting

## Use Cases

- Developers seeking AI-assisted command-line workflows without leaving the terminal
- Teams standardizing on Windows who want integrated AI assistance in their daily CLI work
- Power users who want to interact with multiple AI agents (Copilot, Claude, Codex, Gemini) from one terminal

## Technical Details

- Fork of Windows Terminal with ACP (Agent Client Protocol) integration
- Supports auto-detection of multiple agent CLIs
- Windows 11 22H2+ required (build 22621.6060+)
- MIT licensed, built with C++
