---
name: Code2Prompt
slug: code2prompt
homepage: https://code2prompt.dev/
repo: https://github.com/mufeedvh/code2prompt
license: MIT
category: training-optimization
subCategory: prompt-quality
tags:
  - Dev Tools
  - Prompt Engineering
  - Utility
description: A tool that converts codebases into a single LLM prompt for code analysis, generation, and automation workflows.
author: mufeedvh
ossDate: '2024-03-09T12:42:06.000Z'
featured: false
status: tracked
---
Code2Prompt is an open-source tool that transforms a codebase into a structured LLM prompt, useful for code analysis, automated review, and generation tasks. It traverses project directories, builds a file tree, and collects file metadata to produce context-rich prompts that save developers from manually assembling code context for large models.

## Key features

- Automatic code processing: convert codebases of any size into readable, formatted prompts
- Smart filtering: include/exclude files using glob patterns and respect .gitignore rules
- Flexible templating: customize generated prompts with Handlebars templates
- Token tracking: monitor and control token usage to stay within model context limits
- Git integration: optionally include diffs, commit history, and branch comparisons

## Use cases

- Automated code review: provide LLMs with complete, structured code context to assist reviews
- Test and example generation: extract context to generate unit tests or example code
- Developer assistants: supply rich project context for AI-powered dev tools and agents
- Documentation and migration: help understand legacy codebases for refactoring and migration

## Technical notes

- Multi-form support: offers CLI, SDK (Python binding), and MCP server mode
- High-performance core: Rust-based core library for speed and safety
- Extensibility: templates and filter strategies allow tailoring output for different scenarios
- Community-driven: open-source with active contributors and detailed docs (<https://code2prompt.dev/docs/welcome/>)
