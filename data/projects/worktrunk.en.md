---
name: Worktrunk
slug: worktrunk
homepage: https://worktrunk.dev
repo: https://github.com/max-sixty/worktrunk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - CLI
  - Dev Tools
  - Tool
description: A developer-focused CLI that simplifies Git worktree workflows for parallel agent and LLM-driven tasks.
author: max-sixty
ossDate: '2025-10-17T22:13:14Z'
featured: false
status: tracked
---

## Detailed Introduction

Worktrunk is a developer-oriented CLI that makes Git worktree operations feel as easy as working with branches. Designed for parallel agent workflows and automation driven by Large Language Models (LLM), it provides simple commands to create, switch, merge and remove worktrees, reducing the friction of managing many concurrent working directories.

## Main Features

- Intuitive `wt` commands such as `wt switch`, `wt list`, `wt merge`, and `wt remove` for common worktree tasks.
- Project hooks to run custom scripts on create, pre-merge, and post-merge events for automation.
- Integration points for LLM-generated commit messages and agent-friendly workflows to streamline automated changes.
- Cross-platform installation (Homebrew, Cargo) and comprehensive documentation to support local and CI usage.

## Use Cases

Worktrunk is useful for developers and teams running multiple parallel tasks or agents: creating isolated worktrees per agent or task, running local experiments without interference, automating project setup and merge checks via hooks, and simplifying worktree lifecycle management in collaborative or CI environments.

## Technical Characteristics

Implemented in Rust, Worktrunk delivers a fast, compact CLI binary. It maps each worktree to a single branch and derives paths automatically. The project offers a hooks system and extension points for LLM integrations, enabling seamless embedding into automated development pipelines and agent-driven workflows.
