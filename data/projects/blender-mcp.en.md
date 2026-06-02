---
name: BlenderMCP
slug: blender-mcp
homepage: null
repo: https://github.com/ahujasid/blender-mcp
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Utility
description: >-
  BlenderMCP is an open-source tool that integrates Blender with Claude AI via the Model Context Protocol (MCP),
  enabling AI-assisted 3D modeling and scene manipulation.
logo: ''
author: Siddharth Ahuja
ossDate: '2025-03-07T09:58:58.000Z'
featured: false
status: tracked
---

## Overview

BlenderMCP is an MCP server for Blender that allows AI agents to control Blender for 3D modeling and rendering tasks. It connects Blender to Claude AI using the Model Context Protocol, enabling AI-driven 3D modeling, scene creation, and interactive operations through natural language or structured commands. The tool accelerates prototype creation and automates repetitive 3D workflows.

## Key Features

BlenderMCP provides two-way real-time communication that lets AI agents read scene state and issue commands to Blender. It supports creation, modification, and deletion of 3D objects with material and metadata synchronization, and can execute Blender Python scripts for complex operations and automation. Integration with third-party asset libraries such as Poly Haven enables rapid scene construction.

## Use Cases

BlenderMCP is well-suited for AI-assisted 3D modeling and interactive scene building, as well as intelligent art workflow automation and batch scene generation. It can also be used for rapid scene generation and editing for rendering and demonstrations, and serves as a tool for educational examples and automated course demonstrations.

## Technical Details

The tool uses MCP over TCP/JSON for command exchange with cross-platform support. It is fully open-source and extensible for custom toolchain integration, making it suitable as an entry point for AI-driven creative toolchains and the broader Blender plugin ecosystem.
