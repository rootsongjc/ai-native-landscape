---
name: gtr — Git Worktree Runner
slug: git-worktree-runner
homepage: https://www.coderabbit.ai/
repo: https://github.com/coderabbitai/git-worktree-runner
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
description: A portable, cross-platform CLI that simplifies git worktree management, editor integration, and AI tool workflows.
logo: ''
author: CodeRabbit
ossDate: '2025-08-07T21:13:33Z'
featured: false
status: tracked
---

## Detailed Introduction

gtr (Git Worktree Runner) is a repository-scoped, cross-platform CLI that wraps and extends native `git worktree` functionality to improve developer workflows. It automates per-branch worktree creation, selective config copying, optional dependency installation, and integrates with editors and AI coding tools to support parallel development and review scenarios.

## Main Features

- Simplified commands: intuitive subcommands such as `gtr new`, `gtr editor`, and `gtr ai` for common worktree tasks.
- Editor integration: open worktrees in Cursor, VS Code, Zed, and others with a single command.
- AI tool support: launch terminal/editor-based AI tools (Aider, Claude, etc.) inside a worktree to enable parallel agent workflows.
- Automation & hooks: configurable file copying, post-create/post-remove hooks, and optional post-create dependency steps.

## Use Cases

gtr is useful when maintaining multiple concurrent branches or environments in the same repository: fixing bugs while developing features, reviewing pull requests without interrupting current work, running parallel CI or test instances, or enabling multiple AI agents to work on the same project in isolated worktrees.

## Technical Features

Implemented in Bash, gtr is designed for repository-scoped operation and supports macOS, Linux, and Windows via Git Bash/WSL. It favors configuration over flags, provides shell completions, platform-aware path handling, and a pluggable adapters system for editors and AI tools.
