---
name: OxideTerm
slug: oxideterm
homepage: https://oxideterm.app
repo: https://github.com/AnalyseDeCircuit/oxideterm
license: GPL-3.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Terminal
  - Rust
  - SSH
  - MCP
  - AI Terminal
  - Tauri
description: An AI-native terminal workspace built with Rust and Tauri, supporting local shells and remote SSH/SFTP with an integrated AI assistant and MCP server.
author: AnalyseDeCircuit
ossDate: '2026-01-21'
featured: false
status: tracked
---

## Overview

OxideTerm is a high-performance AI-native terminal workspace built with Rust and Tauri. It supports local shells, SSH, Serial, Telnet, and SFTP connections with an integrated AI Terminal Assistant and MCP Server. The design philosophy prioritizes zero Electron, zero OpenSSL, zero telemetry, and no subscription for core SSH workflows.

## Key Features

- Rust and Tauri-based terminal with GPU acceleration
- AI Terminal Assistant for command generation, output explanation, and troubleshooting
- Built-in MCP Server for external AI tool and workflow integration
- Multi-protocol support: SSH, Serial, Telnet, SFTP, port forwarding
- Local-first design with no telemetry and bring-your-own-key AI model support

## Use Cases

- Using as a primary terminal with AI assistance for daily development
- Remote server management via SSH/SFTP with AI-powered diagnostics
- Integrating terminal capabilities into AI workflows via MCP protocol

## Technical Details

- Built with Rust using the russh library and Tauri framework
- Zero Electron dependency — uses system webview for minimal footprint
- Supports BYOK (bring your own key) for AI model integration
- Includes file manager, port forwarding, and WSLg support
