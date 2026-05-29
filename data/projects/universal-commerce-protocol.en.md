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
logo: ''
author: Universal Commerce Protocol
ossDate: '2025-12-31T02:17:21Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

The Universal Commerce Protocol (UCP) is an open, standards-driven specification that provides a common language and primitives for commerce interactions between AI agents, platforms, merchants, payment service providers, and credential providers. By defining Capabilities and Extensions, UCP enables platforms to discover merchant-supported features and securely initiate checkout and order flows with or without human intervention.

## Main Features

- Capability-driven, composable architecture: commerce actions are expressed as discrete Capabilities (e.g., Checkout, Identity Linking, Order) with optional Extensions for enhanced experiences.
- Dynamic discovery and configuration: merchants publish capability profiles so platforms can automatically discover and configure integrations, reducing one-off integration work.
- Transport-agnostic design: the protocol is transport-neutral and supports REST, MCP (Model Context Protocol), or agent-to-agent (A2A) transports.

## Use Cases

- Agent-assisted shopping: agents can discover products, populate carts, and complete payments on behalf of users, enabling autonomous shopping experiences.
- Platform integration: third-party platforms can call unified capabilities across multiple merchants for seamless cross-merchant experiences.
- PSP and credential provider integration: standardized token and credential exchange flows simplify payment and identity integrations.

## Technical Features

- Built on open standards: UCP prefers existing standards for payments, identity, and security to avoid reinventing solutions.
- Extensible capability model: keeps core capability definitions concise while allowing targeted extensions for specialized features.
- Developer-friendly: comprehensive documentation, examples, and SDKs support rapid implementation and conformance testing.
