---
name: caveman
slug: caveman
homepage: https://docs.caveman.so/caveman
repo: https://github.com/JuliusBrussee/caveman
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Token Optimization
  - Agent Skills
  - CLI
  - Prompt Engineering
description: >-
  A skill plus local proxy for coding agents that cuts token usage by making the agent answer in a compressed "caveman"
  voice and shrinking tool output before the model reads it, with measured savings and no loss of answer quality.
author: JuliusBrussee
ossDate: '2026-04-04'
featured: false
status: tracked
---

## Overview

Caveman makes AI coding agents say less and read less while the code stays exact. One install (`npx @caveman-ai/cli@latest`) patches Claude Code, Codex, Gemini CLI, OpenCode, and 30+ other agents with six components: a compressed reply voice, pre-read compression of logs and tool output, automatic model and effort selection, reusable agent-written scripts, waste fixes, and compressed web browsing. External evaluations from Adobe Research, JetBrains, and Elastic back the token savings with no measurable quality loss.

## Key Features

- Say less: the agent answers in a structured short voice (63 → 20 tokens for the same fix, same code payload), with strict levels from `/caveman` down to `/megacave`
- Read less: logs, JSON, CSV, and test output are shrunk before the model reads them — 33.2% fewer input tokens measured across 54 Claude Code runs
- Auto: picks the model and reasoning effort per request, measured 54% cheaper than a maxed-out Opus configuration at the same task score
- Blocks: the agent keeps scripts it writes and reruns them instead of re-reading output (397 → 76 tokens for one test run)
- Waste fixes find where tokens go and fix it, including keeping the prompt cache warm while you pause
- Browse returns web pages compressed (129.8x smaller page)

## Use Cases

- Cutting cost and latency of daily coding-agent sessions without changing how you prompt
- Keeping subscription quotas and rate limits from interrupting long agent runs
- Running the same agent workflow across Claude Code, Codex, Gemini CLI, OpenCode, and other CLIs with one setup
- Teams wanting benchmarked token savings rather than blindly shortened answers

## Technical Details

- Installed via the `@caveman-ai/cli` npm package (Node 22.13+); the CLI detects installed agents and their logins and applies a prompt skill plus a local proxy layer that runs on your machine with your own keys
- The voice is not broken grammar but a fixed reply structure based on ASD-STE100 controlled English: answer first, one idea per sentence, 20 words max, active voice; negations, numbers, and units are never dropped and code, commands, paths, and error text stay verbatim
- User prompts are never rewritten — external research showed compressing the user's prompt backfires; compression targets only what the agent reads (tool output) and runs on (scripts)
- The proxy compresses tool_result payloads (logs, JSON, CSV, test output) before they reach the model, translates web pages into compact form, and keeps the provider prompt cache warm across pauses
- Each of the six components can be toggled individually (`caveman status`, `caveman off browse`); only the Auto model picker needs an account
