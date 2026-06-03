---
name: MCP Servers
slug: mcp-servers
homepage: 'https://modelcontextprotocol.io'
repo: https://github.com/modelcontextprotocol/servers
license: Other
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Tool Protocol
  - Agent
  - Integration
description: Official reference implementations of Model Context Protocol servers, providing standardized tool interfaces for AI agents to interact with external systems and data sources.
logo: ''
author: Anthropic
ossDate: '2024-11-19'
featured: true
thumbnail: ''
source: ''
status: tracked
---

## Overview

MCP Servers is the official repository of reference server implementations for the Model Context Protocol (MCP), the open standard that enables AI agents to securely connect to external data sources and tools. These servers provide production-ready integrations for popular services including filesystems, databases, GitHub, Slack, Google Drive, and more.

## Key Features

- Reference MCP server implementations for 20+ popular services and tools
- Filesystem, GitHub, PostgreSQL, Slack, Google Drive, Puppeteer, and Brave Search servers
- TypeScript SDK for building custom MCP servers
- Standardized tool, resource, and prompt interfaces
- Production-ready implementations with proper error handling

## Use Cases

- Connecting AI agents to enterprise data sources via standardized protocol
- Building MCP-compatible tool servers for custom business systems
- Rapid prototyping of agent-tool integrations using reference implementations
- Establishing interoperable tool ecosystems across different AI frameworks

## Technical Details

- Built with TypeScript using the official MCP SDK
- Each server implements the MCP specification for tools, resources, and prompts
- Supports stdio and SSE transport modes for flexible deployment
- Serves as the canonical reference for MCP server development patterns
