---
name: Google Workspace MCP Server
slug: google-workspace-mcp
homepage: https://workspacemcp.com
repo: https://github.com/taylorwilsdon/google_workspace_mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - MCP Server
  - Google Workspace
  - Gmail
  - Google Calendar
  - Google Drive
  - LLM Tools
description: A comprehensive Google Workspace MCP server and CLI giving AI assistants natural-language control over Gmail, Calendar, Drive, Docs, Sheets, Slides, Forms, Tasks, Contacts, and Chat via 120+ tools.
author: taylorwilsdon
ossDate: '2025-04-27'
featured: false
status: tracked
---

## Overview

Workspace MCP connects AI assistants to all twelve major Google Workspace services through a single MCP server exposing 120+ tools. It supports both local stdio operation for legacy clients and remote streamable HTTP deployment conforming to the latest MCP spec, and ships with a full-featured CLI plus a Code Mode for tools like Claude Code and Codex.

## Key Features

- 120+ tools covering Gmail, Drive, Calendar, Docs, Sheets, Slides, Forms, Tasks, Contacts, and Chat with fine-grained editing capabilities
- Multi-user OAuth 2.1 authentication, enabling centralized, secure hosting for an entire organization
- Three progressive tool tiers and a read-only mode for granular capability control
- Full CLI and Code Mode for use inside developer tools such as Claude Code and Codex

## Use Cases

- Letting AI assistants manage email, calendars, and documents end-to-end in natural language
- Centrally hosting a shared Workspace MCP instance behind a reverse proxy for a team or organization
- Automating document editing, spreadsheet operations, and Drive file workflows from coding agents

## Technical Details

- Python 3.10+ server published to PyPI as `workspace-mcp`, with dependencies pinned in `uv.lock`
- Stateless container deployment mode with zero disk writes, plus optional credential store backends (GCS/CMEK)
- Sensitive-path blocking via `validate_file_path()` that guards `.env*` files and home-directory credential stores like `~/.ssh/` and `~/.aws/` even with broadened `ALLOWED_FILE_DIRS`
- No telemetry or external network calls beyond Google APIs; supports external auth server and gateway passthrough auth
