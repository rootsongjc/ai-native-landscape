---
name: BlenderMCP
slug: blender-mcp
homepage: null
repo: https://github.com/ahujasid/blender-mcp
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Utility
description: >-
  BlenderMCP is an open-source tool that integrates Blender with Claude AI via the Model Context Protocol (MCP),
  enabling AI-assisted 3D modeling and scene manipulation.
author: Siddharth Ahuja
ossDate: '2025-03-07T09:58:58.000Z'
featured: false
status: tracked
---
BlenderMCP is an MCP server for Blender that allows AI agents to control Blender for 3D modeling and rendering tasks. It connects Blender to Claude AI using the Model Context Protocol, enabling AI-driven scene creation and interactive operations through natural language or structured commands.

## Real-Time Scene Control

- Two-way communication lets AI agents read scene state and issue commands to Blender in real time
- Supports creation, modification, and deletion of 3D objects with material and metadata synchronization
- Execute Blender Python scripts for complex operations and batch automation

## Asset Integration

- Integration with third-party asset libraries such as Poly Haven for rapid scene construction
- Import and manipulate textures, HDRIs, and 3D models directly through AI commands
- Accelerates prototype creation and automates repetitive 3D workflows

## AI-Assisted Workflows

- Natural language control for intuitive 3D modeling without manual tool manipulation
- Interactive scene building with AI-driven suggestions and modifications
- Batch scene generation for rendering pipelines and demonstrations

## Technical Foundation

- Uses MCP protocol over TCP/JSON for command exchange with cross-platform support
- Fully open-source and extensible for custom toolchain integration
- Compatible with the broader Blender plugin ecosystem for AI-driven creative toolchains
