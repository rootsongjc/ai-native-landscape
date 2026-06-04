---
name: Skill Seeker
slug: skill-seeker
homepage: null
repo: https://github.com/yusufkaraaslan/skill_seekers
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
description: >-
  Automatically convert documentation sites, GitHub repos, and PDFs into uploadable Claude skills with conflict
  detection.
author: Yusuf Karaaslan
ossDate: '2025-10-17T14:43:48Z'
featured: false
status: tracked
---

Skill Seeker is an open-source tool that automatically scrapes documentation websites, GitHub repositories, and PDFs, then enhances and packages them into Claude-ready skill ZIP files. It combines deep AST-level code analysis with conflict detection to ensure generated skills accurately reflect the underlying implementation.

## Key Features

- Unified extraction from documentation sites, code repositories, and PDF documents
- Built-in conflict detection that automatically highlights discrepancies between documentation and code
- Local AI enhancement of generated SKILL.md files with practical examples and usage patterns
- Produces packaged ZIP files ready for direct upload to Claude's skill system
- AST-level deep code analysis ensures accuracy of the generated knowledge base

## Use Cases

- Creating reusable skills for popular frameworks such as React, Django, or Godot without manual curation
- Consolidating scattered internal documentation and codebases into structured AI assistants
- Generating searchable learning artifacts from existing teaching materials for educators
- Keeping AI skill packages synchronized as documentation and code evolve over time

## Technical Details

- Built in Python 3.10+ with both a CLI tool and an optional MCP server for Claude Code integration
- Uses asynchronous parallel scraping to handle large documentation bases with tens of thousands of pages
- Ships with presets for common frameworks alongside user-configurable scraping rules for custom projects
- Supports incremental updates to keep generated skills current with source changes
