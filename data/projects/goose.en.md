---
name: goose
slug: goose
homepage: https://block.github.io/goose/
repo: https://github.com/block/goose
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - AI Agent
  - Dev Tools
description: >-
  An open-source, locally extensible AI agent for engineering task automation (project scaffolding, code execution,
  testing, and publishing).
logo: ''
author: Goose
ossDate: '2024-08-23T19:03:36.000Z'
featured: false
status: tracked
---

## Overview

Goose is an autonomous AI coding agent developed by Block that can understand and modify codebases with minimal human intervention. It operates as a developer assistant that autonomously handles engineering tasks such as code generation, debugging, testing, and project scaffolding through an extensible plugin and recipe system. Goose runs locally via CLI or desktop client, giving developers full control over their automation workflows.

## Key Features

Goose provides a local CLI and desktop client with multi-model integration, enabling developers to compose common development workflows into reusable recipes. Its orchestratable plugin system supports building automation pipelines for project initialization, code generation, build, test, and publish tasks, with seamless integration for multiple LLM providers.

## Use Cases

Goose is ideal for project scaffolding and code generation to jumpstart development, automated test generation and CI helper scripts, and automating repetitive engineering tasks during daily development workflows. It excels at understanding existing codebases and making targeted modifications without requiring constant human oversight.

## Technical Details

Implemented in Rust and TypeScript for performance and extensibility, Goose interoperates with MCP, VS Code, and related tooling for easy integration into existing development environments. The project uses an Apache-2.0 license with well-documented examples, and its architecture supports both local execution and extensibility through custom toolkits and provider integrations.
