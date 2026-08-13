---
name: BailingHub
slug: bailinghub
homepage: https://www.bailinghub.com
repo: https://github.com/bailinghub/bailinghub
license: Apache-2.0
category: platform-infra
subCategory: security-policy
tags:
  - A2B
  - Tool Governance
  - Control Plane
  - Human in the Loop
description: Open-source A2B control plane based on Agent Capability Contracts for safely connecting agents to existing business systems.
author: bailinghub
ossDate: '2026-07-09T09:08:51Z'
featured: false
status: tracked
---

## Overview

BailingHub (百灵中枢) is an open-source A2B (Agent-to-Business) control plane that safely connects AI agents to existing business systems. Based on Agent Capability Contracts (ACC) derived from OpenAPI specs, it enforces tool governance, audit trails, and human-in-the-loop approval before agents touch production systems.

## Key Features

- A2B control plane based on Agent Capability Contracts (ACC) over OpenAPI.
- Tool governance and permission control for agent-to-business access.
- Full audit trail of every agent action on business systems.
- Human-in-the-loop approval workflows; self-hostable.

## Use Cases

- Safely grant agents access to internal business systems.
- Govern and audit agent tool usage in enterprise environments.
- Enforce human approval gates for sensitive agent operations.

## Technical Details

- Agent Capability Contracts are generated from existing OpenAPI specs, so no rewrite is needed to expose legacy APIs to agents.
- Control-plane architecture: agents never touch business systems directly — every call passes through governed, permissioned contract endpoints.
- Every agent action on a business system lands in an audit trail; sensitive operations require human-in-the-loop approval.
- Self-hosted deployment keeps agent-to-business traffic inside the enterprise perimeter.
