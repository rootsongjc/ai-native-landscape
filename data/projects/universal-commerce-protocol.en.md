---
name: Universal Commerce Protocol (UCP)
slug: universal-commerce-protocol
homepage: https://ucp.dev
repo: https://github.com/universal-commerce-protocol/ucp
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Application
  - MCP
description: >-
  A standardized protocol that enables AI agents, platforms, and commerce providers to interoperate securely and
  consistently.
author: Universal Commerce Protocol
ossDate: '2025-12-31T02:17:21Z'
featured: false
status: tracked
---

The Universal Commerce Protocol (UCP) is an open, standards-driven specification that establishes a shared language and interaction primitives for commerce between AI agents, platforms, merchants, payment providers, and credential providers. By modeling commerce actions as discoverable Capabilities with optional Extensions, UCP enables autonomous and semi-autonomous transaction flows that work across disparate systems. The protocol aims to eliminate bespoke integrations by providing a universal interface for agent-driven commerce.

## Capability-Driven Architecture

- Commerce actions such as Checkout, Identity Linking, and Order expressed as discrete, reusable units
- Extensible capability model keeps core definitions minimal while permitting targeted Extensions
- Merchants publish capability profiles that platforms discover and configure automatically
- Reduces per-integration engineering effort through standardized interfaces

## Transport and Interoperability

- Transport-agnostic design supports REST, MCP, and agent-to-agent (A2A) communication
- Full flexibility in deployment topology for implementers
- Reuses existing standards for payments, identity, and security rather than inventing new solutions
- Standardized token flows simplify identity and payment integration

## Agent-Driven Commerce

- AI agents discover products, populate carts, and complete payments on behalf of users
- Third-party platforms invoke unified capabilities across multiple merchants for cross-merchant workflows
- Payment service providers and credential exchanges benefit from standardized integration
- Comprehensive documentation, example implementations, and SDKs accelerate developer adoption
