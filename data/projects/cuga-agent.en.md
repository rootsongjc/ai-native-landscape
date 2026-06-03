---
name: CUGA
slug: cuga-agent
homepage: https://cuga.dev
repo: https://github.com/cuga-project/cuga-agent
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
description: >-
  An open-source generalist agent for enterprise, supporting web/API execution, OpenAPI/MCP integrations, composable
  architecture, and policy-aware features.
author: CUGA Project
ossDate: '2025-09-11T11:58:55Z'
featured: false
status: tracked
---
CUGA is an open-source generalist agent framework designed for enterprise environments, supporting complex task execution across web and API interfaces. It integrates with OpenAPI and the Model Context Protocol (MCP) to provide a composable, auditable runtime with policy-aware controls for governed deployments.

## Execution and Integration

- End-to-end task execution across web, HTTP, and third-party API interfaces
- Built-in OpenAPI adapters that auto-discover and invoke REST endpoints from API specifications
- MCP (Model Context Protocol) integration for connecting to external tool servers and data sources
- Modular, composable architecture allowing agents to chain multiple tools and reasoning steps

## Policy and Governance

- Policy and permission controls that enable compliance enforcement and risk management in enterprise settings
- Full audit trail of agent decisions and actions for regulated industries
- Configurable guardrails and approval workflows for sensitive operations
- Support for role-based access control across agent capabilities

## Use Cases

- Automated business process orchestration spanning multiple enterprise systems
- Controlled data retrieval pipelines with built-in access policies and logging
- Task-oriented customer support agents with policy enforcement
- Automated services requiring full auditability and regulatory compliance

## Technical Stack

- Implemented primarily in Python with a focus on extensibility and observability
- SDKs and runtime components designed for incremental enterprise adoption
- Multiple reasoning modes with adapters for external LLM providers
- Flexible integration within existing enterprise identity and access management systems
