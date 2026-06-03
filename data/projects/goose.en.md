---
name: goose
slug: goose
homepage: https://block.github.io/goose/
repo: https://github.com/block/goose
license: Apache-2.0
category: applications-products
subCategory: workflow-automation
tags:
  - AI Agent
  - Dev Tools
description: >-
  An open-source, locally extensible AI agent for engineering task automation (project scaffolding, code execution,
  testing, and publishing).
author: Goose
ossDate: '2024-08-23T19:03:36.000Z'
featured: false
status: tracked
---
Goose is an autonomous AI coding agent developed by Block that can understand and modify codebases with minimal human intervention. It operates as a developer assistant that autonomously handles engineering tasks through an extensible plugin and recipe system, running locally via CLI or desktop client with full developer control over automation workflows.

## Local Agent Runtime

- CLI and desktop client for local execution with full control
- Multi-model integration supporting multiple LLM providers
- Understands existing codebases and makes targeted modifications
- Operates autonomously on code generation, debugging, and testing tasks

## Extensible Plugin and Recipe System

- Composable recipes that encode common development workflows into reusable templates
- Orchestratable plugin system for building automation pipelines
- Covers project initialization, code generation, build, test, and publish tasks
- Custom toolkits for extending agent capabilities to domain-specific workflows

## Engineering Automation

- Project scaffolding and code generation to jumpstart development
- Automated test generation and CI helper script creation
- Repetitive engineering task automation during daily development
- Codebase understanding and modification without constant human oversight

## Technical Stack

- Implemented in Rust and TypeScript for performance and extensibility
- Interoperates with MCP, VS Code, and related tooling
- Apache-2.0 license with well-documented examples
- Architecture supports local execution and extensibility through custom provider integrations
