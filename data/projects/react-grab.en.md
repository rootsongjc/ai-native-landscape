---
name: React Grab
slug: react-grab
homepage: https://react-grab.com
repo: https://github.com/aidenybai/react-grab
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Dev Tools
  - Frontend
  - Plugin
  - Vibe Coding
description: >-
  Select context for coding agents directly from your website. Makes tools like Cursor, Claude Code, and Copilot run up
  to 3x faster with more accurate results.
author: Aiden Bai
ossDate: '2025-01-15'
featured: true
status: tracked
---

## Overview

React Grab is an innovative developer tool that enables users to select code context for AI coding assistants directly from their browser. With simple keyboard shortcuts, developers can capture file names, React component information, and HTML source code for any UI element, providing precise context information to AI assistants.

The tool offers a visual interface that lets developers point at any UI element in their browser and automatically extract relevant code information. Tests show that using React Grab can make AI coding tools like Cursor, Claude Code, and GitHub Copilot run up to 3x faster while significantly improving accuracy.

## Key Features

- **One-Click Context Copy**: Simply point at any element and press ⌘C (Mac) or Ctrl+C (Windows/Linux) to copy file name, React component, and HTML source code
- **Cross-Framework Support**: Works with Next.js (App Router & Pages Router), Vite, Webpack, and other major React build tools
- **Plugin System**: Rich plugin API supporting custom context menu actions, toolbar menu items, lifecycle hooks, and theme overrides
- **MCP Integration**: Quickly integrate into the Model Context Protocol (MCP) ecosystem via command line
- **Visual Highlighting**: Real-time element highlighting on hover for intuitive selection experience
- **Development-Mode Only**: Only loads in development mode, with zero impact on production performance
- **Primitives API**: Build custom element selectors from scratch using standalone utility functions

## Use Cases

- **AI-Assisted Programming**: Provide precise UI element context to Cursor, Claude Code, Copilot, and other AI coding assistants
- **Code Review & Debugging**: Quickly locate and review source code locations for specific UI elements
- **Team Collaboration**: Rapidly share code information for UI elements with team members to improve communication
- **Learning React Structure**: Visually learn and understand component hierarchies in existing React applications
- **Automated Testing**: Assist in locating and selecting UI elements that need testing

## Technical Highlights

- **Lightweight Design**: Minimal gzip size with negligible impact on application performance
- **Native TypeScript Support**: Complete TypeScript type definitions for excellent developer experience
- **Monorepo Architecture**: Uses pnpm workspace and turbo for efficient package management and builds
- **Modular Design**: Separation of core functionality and plugin system for flexible extensibility
- **Browser Compatibility**: Supports modern browser Element APIs and React component detection
- **MIT License**: Fully open source, free to use and modify
- **Active Community**: Comprehensive contributing guide, Discord community, and issue tracking system
