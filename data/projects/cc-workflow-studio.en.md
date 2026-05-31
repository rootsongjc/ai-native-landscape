---
name: CC Workflow Studio
slug: cc-workflow-studio
homepage: null
repo: https://github.com/breaking-brake/cc-wf-studio
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Agents
  - Dev Tools
  - Framework
  - Vibe Coding
description: >-
  CC Workflow Studio is a VS Code extension that provides a visual drag-and-drop canvas for designing AI agent
  orchestrations without writing code. It supports multi-agent workflows, sub-agent orchestration, Agent Skills, and MCP
  tool integration, with AI-assisted editing through natural language conversations and one-click export to multiple
  formats with direct execution from the editor.
logo: ''
author: breaking-brake
ossDate: '2025-03-16'
featured: false
status: tracked
---

## Overview

CC Workflow Studio is a visual workflow editor designed specifically for AI agents, available as a VS Code extension. Through an intuitive drag-and-drop canvas, developers can design complex AI agent orchestrations without writing code. Built on React Flow, it supports core building blocks of agentic engineering including multi-agent workflows, sub-agent orchestration, Agent Skills, and MCP tool integration.

The platform features "Edit with AI" functionality that enables conversational workflow iteration through MCP Server integration with AI agents like Claude Code and GitHub Copilot. Simply describe changes in natural language to generate or refine workflows. Supports one-click export to multiple agent-ready formats and direct workflow execution from the editor with real-time results.

## Key Features

- **Visual Workflow Editor**: Intuitive drag-and-drop canvas for designing AI agent orchestrations without code
- **Agentic Engineering**: Support for multi-agent workflows, sub-agent orchestration, Agent Skills, and MCP tool integration
- **Edit with AI**: Iteratively improve workflows through natural language conversations with AI to add features or refine logic
- **One-Click Export & Run**: Export workflows to multiple agent-ready formats and run directly from the editor
- **Multi-Platform Support**: Supports Claude Code, GitHub Copilot Chat/CLI, OpenAI Codex CLI, Roo Code, Gemini CLI, Antigravity, Cursor, and more
- **Native MCP Integration**: Native interaction with AI agents through MCP Server protocol

## Use Cases

- **Agent Development**: Provide developers with visual tools to design and test AI agent workflows
- **Workflow Automation**: Quickly build complex AI automation processes through drag-and-drop
- **Multi-Agent Orchestration**: Design and manage collaboration workflows across multiple AI agents
- **Rapid Prototyping**: Use natural language to quickly generate and iterate on workflow prototypes
- **Skill Development**: Develop custom skills and commands for Claude Code, GitHub Copilot, and other agents

## Technical Highlights

- **Built with React Flow**: Powerful visual editing capabilities based on React Flow
- **VS Code Extension**: Seamless integration into the VS Code development environment
- **MCP Server Protocol**: Bidirectional communication with AI agents through MCP Server
- **Multi-Format Export**:
  - Claude Code: `.claude/agents/` and `.claude/commands/`
  - GitHub Copilot Chat: `.github/prompts/`
  - GitHub Copilot CLI: `.github/skills/`
  - OpenAI Codex CLI: `.codex/skills/`
  - Roo Code: `.roo/skills/`
  - Gemini CLI: `.gemini/skills/`
  - Antigravity: `.agent/skills/`
  - Cursor: `.cursor/agents/` and `.cursor/skills/`
- **Built-in Execution**: Run workflows directly in the editor and view execution results in real-time
- **License**: AGPL-3.0
