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

## Overview

gtr (Git Worktree Runner) is a Bash-based, cross-platform CLI by CodeRabbit that simplifies git worktree management with editor and AI tool integration. It wraps and extends native git worktree functionality to automate per-branch worktree creation, selective config copying, and optional dependency installation, supporting parallel development and review workflows.

## Key Features

gtr provides intuitive subcommands such as `gtr new`, `gtr editor`, and `gtr ai` for common worktree operations. It integrates with editors including Cursor, VS Code, and Zed to open worktrees with a single command, and supports launching AI tools like Aider and Claude inside worktrees for parallel agent workflows. Configurable file copying, hooks, and optional dependency steps automate the setup process.

## Use Cases

gtr is valuable for maintaining multiple concurrent branches in the same repository, such as fixing bugs while developing features or reviewing pull requests without interrupting current work. It supports running parallel CI or test instances and enables multiple AI agents to work on the same project in isolated worktrees simultaneously.

## Technical Details

Implemented in Bash for maximum portability, gtr operates at the repository scope and supports macOS, Linux, and Windows via Git Bash/WSL. It favors configuration over command-line flags, provides shell completions and platform-aware path handling, and uses a pluggable adapter system for editor and AI tool integrations.
