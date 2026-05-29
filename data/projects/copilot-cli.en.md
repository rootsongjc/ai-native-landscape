---
name: GitHub Copilot CLI
slug: copilot-cli
homepage: null
repo: https://github.com/github/copilot-cli
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: >-
  An interactive command-line coding assistant that brings GitHub Copilot into your terminal, improving local
  development efficiency and code understanding.
logo: ''
author: GitHub
ossDate: '2025-09-26T00:00:00.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

GitHub Copilot CLI brings the Copilot coding agent to your terminal. It lets developers collaborate with an AI assistant locally using natural language to build, debug, and refactor code. Deep GitHub integration enables access to repository context, issues, and pull requests, with agentic planning and previewed actions to keep users in control. It is suited for engineers and teams who need rapid prototyping, code navigation, and automation for everyday development workflows.

## Key Features

- Terminal-native: Interact with Copilot directly in the command line without switching to a browser or IDE.
- GitHub integration: Access repository context, issues, and PRs with proper authentication and organization policies.
- Agent capabilities: Support for multi-step task planning and execution, generating and suggesting changes.
- Extensibility: Support custom MCP servers to extend capabilities in local or private environments.

## Use Cases

- Code generation and refactoring: Quickly scaffold code and refactor functions or modules to save repetitive work.
- Debugging and explanation: Ask natural-language questions about code behavior or errors and get contextual explanations and suggestions.
- Repository automation: Perform common repository-related operations such as drafting changes, creating PRs, or querying issues.
- Onboarding and learning: Help new contributors navigate the codebase and provide contextual examples.

## Technical Details

- Multi-model support: Defaults to Claude Sonnet 4.5 and allows switching to other available models for different tasks.
- Authentication & security: Supports GitHub account or fine-grained PAT authentication, following organization policies.
- Cross-platform: Supported on macOS and Linux; Windows support is experimental.
- Safety & control: Shows a preview before executing filesystem or code modifications and requires user confirmation.
