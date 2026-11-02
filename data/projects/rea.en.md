---
name: rea
slug: rea
homepage: https://rea.tools
repo: https://github.com/morluto/rea
license: MIT
category: coding-devtools
subCategory: developer-utilities
tags:
  - Reverse Engineering
  - MCP
  - CLI
  - Security
description: >-
  An MCP server and agent skill for reverse engineering anything — native
  binaries, JavaScript and Electron apps, .NET assemblies, and websites — with
  analysis running locally and every conclusion backed by evidence.
author: morluto
ossDate: '2026-04-14'
featured: false
status: tracked
---

## Overview

REA (Reverse Engineer Anything) connects an AI agent to tools for inspecting native binaries, JavaScript and Electron apps, .NET assemblies, and websites. Point it at a feature in an app you do not have source for, and the agent can explain how the feature works, show the evidence behind each conclusion, and build a similar version for your own project. The same tools are usable directly from the terminal.

## Key Features

- One MCP for reverse engineering across binaries, applications, and runtime behavior
- Inspect native binaries through an existing Hopper, Ghidra, IDA, or Kuna installation
- Static analysis of JavaScript and Electron apps, including ASAR packages, with no native analysis engine required
- Every result includes the evidence and the limitations behind each conclusion
- Setup registers both the MCP server and matching workflow instructions with the agent
- Also usable as plain CLI commands from the terminal

## Use Cases

- Understand how a feature in a closed-source app works and rebuild it in your own project
- Audit Electron or JavaScript applications without their source code
- Investigate native binaries alongside disassembly workflow in Hopper, Ghidra, or IDA

## Technical Details

- Distributed as the `rea-agents` npm package; `npx rea-agents setup` registers REA's MCP server and workflow instructions with Claude Code, Codex, Cursor, Gemini CLI, Grok Build, and other agents, backing up existing configuration before changes
- Native binary analysis bridges into an existing Hopper, Ghidra, IDA, or Kuna installation; setup can optionally install Hopper with approval, while static JavaScript/Electron analysis needs no native engine
- MCP contracts advertise compact input schemas by default to reduce context overhead; `REA_MCP_INPUT_SCHEMA_PROFILE` and `REA_MCP_OUTPUT_SCHEMA_PROFILE` switch between compact and full schema profiles while keeping canonical server-side validation
- Analysis runs entirely locally; on Linux, process-ownership checks for tool launches (Ghidra, JADX, firmware tools) require a procps-compatible `ps` on REA's PATH
