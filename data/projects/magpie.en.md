---
name: magpie
slug: magpie
homepage: https://usemagpie.ai
repo: https://github.com/yetone/magpie
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - Model Switching
  - CLI
description: >-
  A local gateway and menu-bar app that puts every coding agent's model in one place — Claude Code on Kimi, Codex on
  DeepSeek — switching models per agent, reusing subscriptions everywhere, and failing over across accounts and providers.
author: yetone
ossDate: '2026-09-23'
featured: false
status: tracked
---

## Overview

magpie is "every agent's model, one place": a local gateway plus menu-bar app that manages which model each of your coding agents uses. Pick any model for any agent from one list (Claude Code on Kimi, Codex on DeepSeek, Gemini CLI on GLM, OpenCode on your ChatGPT plan), and magpie rewrites the agent's own config atomically. One gateway serves them all, and when a quota runs out it moves on to your next account or provider so the agent never sees the error. It supports 80+ agents and runs on macOS, Windows, and Linux, in Docker, and on Termux.

## Key Features

- Pick any model for any agent from one searchable list; the agent's own config file is edited atomically, preserving comments, order, and formatting
- Use one provider everywhere: an API key, a local model, or the Claude, ChatGPT, Copilot, Gemini, or Grok plan you are signed in to
- Routing groups fail over between models and providers on quota exhaustion; multi-account rotation per provider
- Profiles save every agent's setup under one name ("Budget", "Focus") and switch them all in one move
- Optional secret masking: keys, passwords, and emails are masked on your computer before a request leaves and restored in the reply
- Full CLI and TUI (`magpie provider add`, `magpie claude deepseek/...`, `magpie quota`, `magpie tui`) alongside the desktop app, plus direct tool calls like `magpie tool generate_image`

## Use Cases

- Running multiple coding agents against the model or subscription you actually pay for, instead of each vendor's lock-in
- Keeping long agent sessions alive through quota limits by failing over across accounts and providers
- Switching an entire team-local or personal setup between profiles (e.g. "Budget" vs "Focus") in one command
- Pointing any base-URL-capable tool at one local gateway via standard OpenAI/Anthropic/Gemini env vars

## Technical Details

- The local gateway at `127.0.0.1:3425` speaks four protocols — OpenAI Chat Completions, OpenAI Responses, Anthropic Messages, and Gemini — and translates between them, including streaming, tool calls, and reasoning
- Model switching rewrites each agent's own config file atomically (comments, ordering, and formatting preserved) rather than proxying behind the agent's back; subscription discovery reads agents' sign-in files and the macOS Keychain, and can be turned off
- Routing groups chain models and providers with smart routing; a provider's next account takes over on quota exhaustion so the agent never sees the error
- Optional on-device secret masking rewrites keys, passwords, and emails out of prompts before requests leave the machine and restores them in replies (off by default)
- Written in Go (`go install github.com/yetone/magpie@latest`); ships as signed, notarized, self-updating desktop apps, plus TUI, web UI, CLI, Docker image, and a Termux build
