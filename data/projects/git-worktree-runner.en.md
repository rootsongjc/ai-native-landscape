---
name: gtr — Git Worktree Runner
slug: git-worktree-runner
homepage: https://www.coderabbit.ai/
repo: https://github.com/coderabbitai/git-worktree-runner
license: Apache-2.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Dev Tools
description: A portable, cross-platform CLI that simplifies git worktree management, editor integration, and AI tool workflows.
author: CodeRabbit
ossDate: '2025-08-07T21:13:33Z'
featured: false
status: tracked
---
gtr (Git Worktree Runner) is a Bash-based, cross-platform CLI by CodeRabbit that simplifies git worktree management with editor and AI tool integration. It wraps and extends native git worktree functionality to automate per-branch worktree creation, selective config copying, and optional dependency installation, supporting parallel development and review workflows.

## Worktree Management

- Intuitive subcommands: `gtr new`, `gtr editor`, `gtr ai` for common operations
- Automatic per-branch worktree creation with clean isolation
- Selective config file copying to replicate environment settings
- Optional dependency installation hooks for automated setup

## Editor Integration

- One-command worktree opening in Cursor, VS Code, and Zed
- Pluggable adapter system for adding new editor support
- Platform-aware path handling across macOS, Linux, and Windows
- Shell completions for fast command-line interaction

## AI Tool Workflows

- Launch Aider and Claude inside worktrees for parallel agent workflows
- Multiple AI agents can work on the same project in isolated worktrees simultaneously
- Configuration-driven approach favors config files over command-line flags

## Parallel Development

- Maintain multiple concurrent branches without stashing or switching
- Fix bugs, develop features, and review PRs simultaneously
- Run parallel CI or test instances across different worktrees
- Maximum portability via Bash implementation, compatible with Git Bash and WSL
