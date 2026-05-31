---
name: MCP-UI
slug: mcp-ui
homepage: null
repo: https://github.com/idosal/mcp-ui
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Framework
  - MCP
description: >-
  MCP-UI is a collection of UI SDKs for the Model Context Protocol that enables servers to deliver interactive web
  components and remote DOM resources to MCP hosts.
logo: ''
author: idosal
ossDate: '2025-05-13T22:41:43.000Z'
featured: false
status: tracked
---

## Introduction

MCP-UI provides server and client SDKs that let servers define UIResources (inline HTML, external URLs, or remote-dom scripts) and deliver them over MCP so hosts can securely render interactive UI snippets inside their clients.

## Key Features

- Server SDKs: `@mcp-ui/server` utilities to create UIResources for TypeScript, Python, and Ruby.
- Client renderers: `@mcp-ui/client` React components and a Web Component (`<ui-resource-renderer>`) to render resources and handle UI actions.
- Supports remote-dom content type for lightweight, host-rendered UI using remote-dom specifications.
- Security-first rendering via sandboxed iframes and event-based UI action callbacks.

## Use Cases

- Render interactive forms, previews, and embedded apps within MCP-enabled hosts.
- Expose UI-driven tool calls from agents to hosts to enable richer automation workflows.
- Share reusable UI resources across servers and host implementations in multi-language environments.

## Technical Highlights

- Remote DOM integration based on Shopify's remote-dom for secure, efficient host rendering.
- Examples and demos in the repository, plus a documentation site at mcpui.dev.
- Active releases and multi-language SDK support (TypeScript, Python, Ruby).
