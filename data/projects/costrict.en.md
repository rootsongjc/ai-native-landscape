---
name: Costrict
slug: costrict
homepage: https://costrict.ai
repo: https://github.com/zgsm-ai/costrict
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Application
  - Code Agent
  - Vibe Coding
description: >-
  Costrict (formerly Shenma) is an open-source enterprise-grade AI coding assistant by Sangfor, centered on "serious
  programming" with Strict Mode, Code Review, Code Completion, and private deployment support.
logo: ''
author: 深信服 (Sangfor)
ossDate: '2025-04-10T02:06:51Z'
featured: false
status: tracked
---

## Overview

Costrict (formerly Shenma) is a free, open-source enterprise-grade AI coding assistant developed by Sangfor, designed specifically for "intranet development + high-quality requirements" scenarios. Since its launch in May 2025, the project has gained significant traction on GitHub. Costrict's core mission is to help enterprises safely and conveniently leverage AI productivity through private deployment that ensures code asset security, while providing an end-to-end standardized AI development workflow.

## Key Features

- **Strict Mode**: Systematically breaks down a single requirement into steps including requirements analysis, architecture design, task planning, and test generation, aligning AI-generated code with enterprise development standards for high-quality, controllable output.
- **Code Review**: Indexes and parses entire code repositories to implement enterprise-level RAG-based coding knowledge. Uses a "multi-expert model specialized checks + multi-model cross-validation" strategy, supporting checks on functions, selected code lines, files, and entire projects.
- **Code Completion**: Automatically generates subsequent code based on cursor context with sub-second output speed.
- **Vibe Coding Mode**: Designed for rapid development and simple tasks, supporting multi-turn natural language dialogue for real-time refinement and precise code generation.
- **MCP Service Integration**: Seamlessly connects to the MCP open ecosystem to integrate external APIs, connect to databases, and develop custom tools.
- **API and Model Customization**: Includes multiple free advanced models, supports third-party APIs (Anthropic, OpenAI), custom OpenAI-compatible APIs, and local models via LM Studio/Ollama.
- **Mode Customization**: Provides multiple default modes (Code, Orchestrator, etc.) and supports custom modes for different scenarios.
- **Context Awareness**: Automatically incorporates large file repository data into context, supports adding files/folders, terminals, and issues via @ key, plus image upload support.
- **OpenSpec Integration**: Seamlessly integrates with OpenSpec for AI agents to handle change proposals with standardized feature planning, implementation, and review workflows.
- **Privacy and Security**: Ensures code security through physical isolation and end-to-end encryption, offering comprehensive enterprise private deployment solutions.

## Use Cases

- Enterprise intranet development environments with strict code security requirements needing AI coding assistants with private deployment.
- Large teams requiring standardized AI development workflows to ensure code quality and traceability.
- Organizations needing large-scale code review and quality governance of existing codebases.
- Multi-language development teams (Python, Go, Java, JavaScript/TypeScript, C/C++, etc.) requiring a unified AI coding tool.

## Technical Highlights

- Runs as a plugin for VS Code and JetBrains IDEs, with a CLI tool also available, covering mainstream development environments.
- Licensed under Apache 2.0, supporting enterprise customization and secondary development.
- Strict Mode's "project reverse engineering" capability quickly understands existing project structures and generates style-consistent code.
- Multi-model cross-validation mechanism effectively reduces hallucinations and error rates in AI-generated code.
