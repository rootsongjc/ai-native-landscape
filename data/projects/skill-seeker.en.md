---
name: Skill Seeker
slug: skill-seeker
homepage: null
repo: https://github.com/yusufkaraaslan/skill_seekers
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
description: >-
  Automatically convert documentation sites, GitHub repos, and PDFs into uploadable Claude skills with conflict
  detection.
logo: ''
author: Yusuf Karaaslan
ossDate: '2025-10-17T14:43:48Z'
featured: false
status: tracked
---

## Detailed Introduction

Skill Seeker is an open-source tool that scrapes documentation sites, GitHub repositories, and PDFs, then enhances and packages them into Claude-ready skill ZIP files. It includes deep code analysis (AST), conflict detection between docs and implementation, and local enhancement options (no API cost). MCP integration enables direct use within Claude Code.

## Main Features

- Multi-source scraping: unified extraction from docs, repos, and PDFs.
- Conflict detection: highlights discrepancies between documentation and code.
- AI enhancement: local or API-based enrichment of SKILL.md with examples.
- Packaging & upload: produces a ZIP ready for Claude skill upload.

## Use Cases

- Quickly create skills for frameworks or libraries (React, Django, Godot, etc.).
- Consolidate internal docs and repositories into team-facing AI assistants.
- Education and reference: generate searchable learning artifacts from examples.

## Technical Features

- Language: Python (3.10+), CLI and optional MCP server.
- Performance: async and parallel scraping for large docbases (10k+ pages).
- Extensibility: presets for common frameworks and user-configurable scraping rules.
