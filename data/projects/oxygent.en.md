---
name: OxyGent
slug: oxygent
homepage: https://oxygent.jd.com
repo: https://github.com/jd-opensource/oxygent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Framework
  - Multi-Agent
description: >-
  A multi-agent collaboration framework for enterprise applications that emphasizes local-first workflow composition and
  tool integration.
author: 京东
ossDate: '2025-07-18T02:40:42Z'
featured: false
status: tracked
---

OxyGent is a multi-agent collaboration framework from JD's open-source team that introduces the Oxy Abstraction to make multi-agent systems modular, observable, and evolvable. It enables developers to compose cooperative workflows by defining agents, tools, and permission boundaries while a built-in runtime engine handles scheduling and inter-agent communication.

## Oxy Abstraction Layer

- Decouples agent logic from infrastructure so each component in a multi-agent system evolves independently
- Composable agent definitions with finite-state control for testability and replayability
- Plugin-based tool integration supporting databases, APIs, and external services

## Observability & Governance

- Built-in tracing primitives for monitoring agent interactions across the full workflow lifecycle
- Structured audit logs for compliance and decision auditing
- Runtime metrics and configurable permission models for production-grade control
- Fine-grained permission controls ensuring enterprise teams safely connect to internal systems

## Enterprise Use Cases

- Automated customer support pipelines coordinating multiple specialized agents across systems
- Cross-system data processing and business process orchestration
- Intelligent operations where auditability, compliance, and traceability are required
