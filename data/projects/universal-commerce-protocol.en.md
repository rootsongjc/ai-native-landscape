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
status: tracked
---

## Overview

The Universal Commerce Protocol (UCP) is an open, standards-driven specification that establishes a shared language and interaction primitives for commerce between AI agents, platforms, merchants, payment providers, and credential providers. By modeling commerce actions as discoverable Capabilities with optional Extensions, UCP enables autonomous and semi-autonomous transaction flows that work across disparate systems. The protocol aims to eliminate bespoke integrations by providing a universal interface for agent-driven commerce.

## Key Features

A capability-driven composable architecture expresses commerce actions such as Checkout, Identity Linking, and Order as discrete, reusable units that can be extended for enhanced experiences. Merchants publish capability profiles that platforms discover and configure automatically, dramatically reducing per-integration engineering effort. The transport-agnostic design supports REST, MCP, and agent-to-agent (A2A) communication, giving implementers full flexibility in deployment topology.

## Use Cases

Agent-assisted shopping experiences where AI agents discover products, populate carts, and complete payments on behalf of users represent the primary use case. Third-party platforms can invoke unified capabilities across multiple merchants to build seamless cross-merchant shopping and booking workflows. Payment service providers and credential exchanges benefit from standardized token flows that simplify identity and payment integration.

## Technical Details

UCP prioritizes reuse of existing standards for payments, identity, and security rather than inventing new solutions. The extensible capability model keeps core definitions minimal while permitting targeted Extensions for specialized commerce features. Comprehensive documentation, example implementations, and SDKs accelerate developer adoption and conformance testing.
