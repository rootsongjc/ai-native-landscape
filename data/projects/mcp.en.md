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

## Overview

The Model Context Protocol (MCP) is an open standard that defines how AI assistants connect to external tools, data sources, and services in a secure and structured manner. It provides a universal protocol for models to discover available capabilities, exchange contextual information, and invoke tools through a standardized interface, enabling any AI application to integrate with arbitrary systems without custom adapters for each combination.

## Key Features

- Standardized capability discovery and invocation protocol that allows AI models to dynamically find and use external tools and data sources.
- Security-focused design with permission boundaries, access controls, and auditable context exchange suitable for enterprise-managed environments.
- Reference implementations and client libraries across multiple programming languages to accelerate integration and reduce development effort.

## Use Cases

- Connecting AI assistants to enterprise databases, APIs, and internal tools to build auditable tool-calling workflows with controlled access.
- Unifying tool and data source integration across multi-host or edge deployments where consistent capability discovery and authorization are critical.
- Building composable AI agent systems where tools and context providers can be mixed and matched without custom integration code.

## Technical Details

- Protocol-first architecture using structured JSON-RPC messages for capability negotiation, context exchange, and tool invocation between clients and servers.
- Composable server and client reference implementations supporting multiple languages and runtime environments for broad ecosystem compatibility.
- Production-ready design with built-in support for permissions, logging, and observability to meet enterprise security and compliance requirements.
