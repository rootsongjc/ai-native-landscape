---
name: GitHub MCP Server
slug: github-mcp-server
homepage: null
repo: https://github.com/github/github-mcp-server
license: Other
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
description: GitHub's official MCP server providing standardized interfaces for AI agents to interact with GitHub repositories.
author: GitHub
ossDate: '2025-03-04T16:42:04.000Z'
featured: false
status: tracked
---
GitHub MCP Server is GitHub's official Model Context Protocol server implementation that enables AI agents to seamlessly interact with GitHub APIs. It provides a standardized interface for AI assistants to access and manipulate GitHub resources including repositories, issues, and pull requests through the MCP protocol.

## Repository Operations

- Repository management including creation, forking, and configuration
- File operations for reading, creating, and updating repository content
- Branch management with creation, listing, and switching capabilities
- Commit history tracking and diff inspection

## Issue and Pull Request Management

- Comprehensive issue lifecycle management with search, creation, and status updates
- Pull request creation, review, and merge workflows accessible to AI agents
- Label, milestone, and assignment management for project organization
- Search capabilities across repositories, issues, and code

## API Integration and Security

- Full GitHub API integration covering both REST and GraphQL endpoints
- Strict permission validation scoped to the authenticated user's access
- Detailed audit logging for all agent-initiated operations
- Data protection aligned with GitHub's security standards

## Platform Integration

- Compatible with AI platforms such as Claude and OpenAI for development automation
- Natural language interactions for repository operations and project management
- Requires Node.js 18+ or Python 3.8+ along with GitHub credentials
- Maintained by GitHub's official team with active community involvement
