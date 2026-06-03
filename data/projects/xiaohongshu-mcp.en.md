---
name: Xiaohongshu MCP
slug: xiaohongshu-mcp
homepage: https://www.haha.ai/xiaohongshu-mcp
repo: https://github.com/xpzouying/xiaohongshu-mcp
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - MCP
description: >-
  Xiaohongshu MCP — an open-source Model Context Protocol (MCP) service for Xiaohongshu content operations, supporting
  login checks, publishing, recommendations, search, and comment interactions.
author: xpzouying
ossDate: '2025-08-03T09:08:45.000Z'
featured: false
status: tracked
---

Xiaohongshu MCP is an open-source Model Context Protocol service purpose-built for Xiaohongshu (Little Red Book) content operations. It exposes login verification, content publishing, recommendation feeds, search, post details, and comment interactions as standard MCP tools, making them accessible from any MCP-compatible client such as Claude Code, Cursor, or VSCode.

## Content Operations

- **Publish** image and text posts with title, body, and images
- **Retrieve** homepage recommendations and search results
- **Extract** post details including engagement metrics
- **Post comments** on target posts for interaction management

## Authentication and Session Management

- Login status checking with cookie-based session reuse
- Supports both headless and visual browser modes
- Session persistence reduces repeated authentication overhead

## Integration and Extensibility

- Standard **HTTP + MCP** interfaces for straightforward integration with AI clients
- Built with **Go** for a clean, extensible codebase that is easy to audit
- Compatible with Claude Code, Cursor, VSCode, and MCP Inspector out of the box
- Open-source for customization, compliance control, and secondary development
