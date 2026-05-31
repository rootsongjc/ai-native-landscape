---
name: AWS MCP
slug: mcp
homepage: https://awslabs.github.io/mcp/
repo: https://github.com/awslabs/mcp
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - MCP
description: >-
  MCP defines a standardized protocol for models, tools and hosts to securely exchange context and capability
  descriptions.
logo: ''
author: Amazon Web Services
ossDate: '2025-03-21T00:39:00Z'
featured: false
status: tracked
---

## Detailed Introduction

The Model Context Protocol (MCP) is a standardized protocol introduced by AWS Labs for secure, scalable exchange of context and capability descriptions between models, tools, and hosts. MCP enables models to discover and invoke external tools, access runtime context, and negotiate capabilities in a controlled manner, enabling auditable tool-enabled reasoning and task execution. See the [project homepage](https://awslabs.github.io/mcp/) for documentation.

## Main Features

- Standardized capability description and discovery for interoperable model-tool integration.
- Security-focused context exchange and permission boundaries suitable for managed environments.
- Reference implementations and client libraries to accelerate integration and validation.

## Use Cases

- Integrating LLMs with external retrieval, databases, or compute services to build auditable tool-calling pipelines.
- Unifying model capability descriptions across multi-host or edge deployments to simplify discovery and authorization.
- Research and engineering reference for validating safe and practical model-tool collaboration patterns.

## Technical Features

- Protocol-first design: structured capability and context descriptions enabling dynamic discovery and negotiation.
- Composable implementations: server and client references supporting multiple languages and runtimes.
- Production-aware: emphasis on permissions, auditing and observability for enterprise deployments.
