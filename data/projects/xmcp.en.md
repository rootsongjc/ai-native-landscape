---
name: xmcp
slug: xmcp
homepage: https://xmcp.dev
repo: https://github.com/basementstudio/xmcp
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Framework
  - MCP
description: >-
  A TypeScript framework for building and shipping MCP servers that streamlines developer experience and lowers the
  barrier to create tools on the Model Context Protocol ecosystem.
logo: ''
author: Basement Studio
ossDate: '2025-05-17T04:09:27Z'
featured: false
status: tracked
---

## Introduction

xmcp is a TypeScript MCP (Model Context Protocol) framework designed to help developers build, run, and ship MCP servers with excellent developer experience. It offers file-system routing for auto-registering tools and prompts, hot reloading, middleware support, extensible configuration, and flexible deployment options including Vercel.

## Key Features

- File-system routing: auto-register tools and prompts from `tools` and `prompts` directories.
- Hot reloading for rapid development iteration.
- Middleware toolkit for authentication and custom middleware.
- Extensible configuration and flexible deployment targets.

## Use Cases

- Bootstrapping developer-facing tool platforms that expose custom tools and prompts as services.
- Integrating MCP capabilities into existing Next.js or Express applications as a backend extension.
- Providing a DX-focused foundation for teams to standardize tooling, auth, and deployment workflows.

## Technical Highlights

- Implemented in TypeScript for strong typing and developer tooling.
- Convention-over-configuration approach simplifies registration and routing.
- MIT-licensed open source project with community-friendly contribution model.
