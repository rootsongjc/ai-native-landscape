---
name: Framelink Figma MCP Server
slug: figma-context-mcp
homepage: null
repo: https://github.com/glips/figma-context-mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - Dev Tools
  - MCP
description: An MCP server that simplifies Figma design metadata for AI coding agents like Cursor.
author: GLips
ossDate: '2025-02-13T02:55:06.000Z'
featured: false
status: tracked
---
The Framelink Figma MCP Server is a Model Context Protocol server implementation that simplifies and translates Figma design metadata for AI coding agents (e.g. Cursor), enabling more accurate one-shot implementation of designs.

## Key features

- Simplifies layout and style metadata from Figma to provide models only the most relevant information.
- Integrates with Cursor and other MCP-capable clients, with quickstart instructions and demo materials.
- Offers CLI/startup options (npx or environment variables) and multi-language documentation for easy deployment.

## Use cases

- Allow AI agents in the IDE to fetch and use Figma design context to generate UI implementation code.
- Provide design-driven context to speed up development workflows from mockups to working interfaces.

## Technical notes

- Built in TypeScript, configurable as an MCP server with command-line startup options.
- Parses Figma API responses and emits a curated subset of layout and style metadata relevant for models.
- Includes localized READMEs and an established release process for production readiness.
