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

## Overview

Skill Seeker is an open-source tool that automatically scrapes documentation websites, GitHub repositories, and PDFs, then enhances and packages them into Claude-ready skill ZIP files. It combines deep AST-level code analysis with conflict detection to ensure generated skills accurately reflect the underlying implementation.

## Key Features

Skill Seeker supports unified extraction from multiple source types including documentation sites, code repositories, and PDF documents, with built-in conflict detection that highlights discrepancies between documentation and code. It offers local AI enhancement of the generated SKILL.md with practical examples, and produces a packaged ZIP file ready for direct upload to Claude's skill system.

## Use Cases

Developers can quickly create reusable skills for popular frameworks and libraries such as React, Django, or Godot without manual curation. Teams can consolidate scattered internal documentation and codebases into structured AI assistants, and educators can generate searchable learning artifacts from existing teaching materials.

## Technical Details

Built in Python 3.10+, Skill Seeker provides both a CLI tool and an optional MCP server for integration with Claude Code. It uses asynchronous parallel scraping to handle large documentation bases with tens of thousands of pages, and ships with presets for common frameworks alongside user-configurable scraping rules for custom projects.
