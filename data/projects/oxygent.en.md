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
logo: ''
author: 京东
ossDate: '2025-07-18T02:40:42Z'
featured: false
status: tracked
---

## Overview

OxyGent is a multi-agent collaboration framework from JD's open-source team that introduces the Oxy Abstraction to make multi-agent systems modular, observable, and evolvable. It enables developers to compose cooperative workflows by defining agents, tools, and permission boundaries while a built-in runtime engine handles scheduling and inter-agent communication.

## Key Features

- Oxy Abstraction layer that decouples agent logic from infrastructure, enabling independent evolution of each component in a multi-agent system.
- Built-in observability primitives for tracing agent interactions, monitoring task progress, and auditing decisions across the full workflow lifecycle.
- Plugin-based tool integration with fine-grained permission controls, allowing enterprise teams to safely connect databases, APIs, and external services.

## Use Cases

Enterprise teams can use OxyGent to automate customer support pipelines that coordinate multiple specialized agents across different systems. It also fits cross-system data processing, business process orchestration, and intelligent operations where auditability and compliance are required.

## Technical Details

Implemented in Python for seamless integration with enterprise backends, OxyGent supports composable agent definitions and finite-state control for testability and replayability. Runtime metrics, structured audit logs, and a configurable permission model give operations teams the controls needed for production compliance.
