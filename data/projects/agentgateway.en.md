---
name: agentgateway
slug: agentgateway
homepage: https://agentgateway.dev/
repo: https://github.com/agentgateway/agentgateway
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: >-
  A high-performance proxy data plane for agents, providing security, observability, and governance capabilities for
  agent-to-agent and agent-to-tool communication.
logo: ''
author: Solo.io
ossDate: '2025-03-18T20:55:22.000Z'
featured: false
status: tracked
---

## Introduction

Agentgateway is a high-performance agent connectivity and governance data plane implemented in Rust, designed to provide multi-tenant RBAC, dynamic configuration, and MCP/A2A protocol support for secure and reliable agent-to-tool connections in production environments.

## Key Features

- Rust implementation with high performance and low latency
- Support for MCP and Agent2Agent protocols with built-in security controls and RBAC
- Dynamic xDS configuration and multi-tenant support

## Use Cases

- Secure communication and routing in large-scale agent networks
- Converting traditional APIs to MCP resources for agent consumption
- Governance, auditing, and monitoring in multi-tenant environments

## Technical Highlights

- Uses xDS for dynamic configuration delivery with zero-downtime updates
- Enhanced access control and audit logging
- Provides UI and documentation for quick integration
