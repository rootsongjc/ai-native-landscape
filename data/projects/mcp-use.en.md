---
name: MCP Use
slug: mcp-use
homepage: https://mcp-use.com
repo: https://github.com/mcp-use/mcp-use
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - Dev Tools
  - MCP
description: >-
  The simplest way to interact with MCP servers and create custom agents, supporting connection of any LLM to MCP
  servers.
author: mcp-use
ossDate: '2025-03-28T10:06:31.000Z'
featured: false
status: tracked
---

MCP-Use is a fullstack MCP framework for building MCP Servers and MCP Apps that work with ChatGPT, Claude, and other AI agents. It provides SDKs for both TypeScript and Python, enabling developers to create, preview, and deploy MCP servers with minimal boilerplate.

## MCP Server Development

- Create MCP servers in just a few lines of code with the Python or TypeScript SDK
- Built-in auto-discovery of tools and resources — no manual registration needed
- Supports both `stdio` and `streamable-http` transports out of the box
- Conformance-tested against the official Model Context Protocol specification

## MCP Apps and Widgets

- Build interactive widgets that run across Claude, ChatGPT, and any MCP client — write once, run everywhere
- React-based widget components with theme support (light/dark) and pending states
- Auto-discovered from the `resources/` directory — no manual wiring required
- Ready-to-use templates including Chart Builder, Diagram Builder, Slide Deck, Maps Explorer, and more

## MCP Agent and Client

- Full MCP Agent implementation using LangChain with support for OpenAI, Anthropic, Groq, and local models
- MCPClient for direct tool calls without an LLM — connect to any MCP server programmatically
- Dynamic server selection: agents can pick the most suitable MCP server from a pool based on the task
- Multi-server support: use multiple MCP servers simultaneously within a single agent

## Inspector and Developer Tools

- Web-based Inspector for interactive testing and debugging of MCP servers
- Auto-included when using `server.listen()` — available at `/inspector` endpoint
- Online version at inspector.mcp-use.com for testing hosted MCP servers
- CLI tool with hot reload and one-command deployment to production

## Cross-Language Support

- **Python SDK** (`pip install mcp-use`): Complete server and agent implementation with Pydantic validation
- **TypeScript SDK** (`npm install mcp-use`): Full framework including server, apps, agents, and client
- **CLI Tools**: `create-mcp-use-app` for scaffolding, `@mcp-use/cli` for building and deploying
- Both SDKs follow idiomatic patterns of their respective languages with consistent API design
