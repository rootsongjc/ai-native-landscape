---
name: RTK
slug: rtk
homepage: https://www.rtk-ai.app/
repo: https://github.com/rtk-ai/rtk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
  - Optimization
  - Tool
  - Utility
description: >-
  RTK is a high-performance CLI proxy tool that reduces LLM token consumption by 60-90% through intelligent command-line
  output compression, significantly improving AI coding assistant efficiency and lowering costs.
author: rtk-ai
ossDate: '2026-01-22'
featured: false
status: tracked
---

RTK (Rust Token Killer) is a high-performance CLI proxy built in Rust, designed to slash LLM token consumption by 60-90%. It acts as a transparent middle layer that intercepts and compresses Bash command output before it reaches AI coding assistants.

## Overview

RTK is a zero-dependency, zero-configuration single-binary CLI proxy. It sits between your shell and LLM, automatically intercepting and compressing output from 100+ common development commands including git, cargo, npm, ls, cat, and more. By seamlessly integrating with AI coding tools like Claude Code, Cursor, and GitHub Copilot, it significantly reduces token costs and extends session duration. With over 51,000 GitHub stars, RTK is one of the most popular AI developer efficiency tools available today.

## Key Features

- **60-90% Token Reduction**: Intelligent filtering and compression of command-line output
- **Zero Dependencies, Zero Config**: Single Rust binary, works out of the box
- **Ultra-Low Latency**: Startup time under 10ms, virtually invisible to workflow
- **100+ Commands Supported**: Covers git, cargo, npm, ls, cat, and other common dev commands
- **Multi-Tool Compatible**: Works with Claude Code, Cursor, GitHub Copilot, and more
- **89% Average Noise Reduction**: Removes redundant output while preserving key information
- **3x Longer Sessions**: Less token consumption means longer effective sessions
- **MIT Licensed**: Fully open source and free

## Use Cases

- **AI Coding Cost Optimization**: Reduce token consumption costs for enterprise and individual developers using AI coding tools
- **Extended Session Development**: Prolong effective AI assistant sessions without context interruptions
- **CI/CD Pipeline Integration**: Optimize command output in automation workflows to reduce log analysis costs
- **Team Collaboration**: Standardize command output formats across team development environments
- **AI Tool Benchmarking**: Maintain consistent token usage baselines across different AI coding tools

## Technical Highlights

- Written in Rust, compiled to a single binary with no runtime dependencies
- Transparent proxy mode requiring no workflow modifications
- Hook-based integration for automatic command rewriting in Claude Code
- Built-in token savings analytics (`rtk gain`) and historical command auditing (`rtk discover`)
- Cross-platform support for macOS, Linux, and Windows
