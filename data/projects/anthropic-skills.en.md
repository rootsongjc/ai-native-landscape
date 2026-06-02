---
name: Skills
slug: anthropic-skills
homepage: https://www.anthropic.com/
repo: https://github.com/anthropics/skills
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Tool
description: An open-source library from Anthropic for defining, sharing, and reusing task-oriented capability modules.
logo: ''
author: Anthropic
ossDate: '2025-09-22T15:53:31Z'
featured: false
status: tracked
---

## Overview

Skills is Anthropic's public repository for Agent Skills -- folders of instructions and scripts designed to give Claude new capabilities and expertise. Each skill is a self-contained module with documentation, examples, and metadata that can be shared across different agents and workflows, reducing the complexity of building multi-step agentic systems.

## Key Features

- Standardized skill definition patterns providing consistent invocation and testing across projects
- Example implementations and best practices for quick onboarding and skill reuse
- Composable capability modules designed to be shared across different agents and workflows
- Official Anthropic-maintained repository with community contribution support

## Use Cases

Packaging common operations into reusable capabilities for task automation, information retrieval, and cross-system integration. Building modular agent workflows where single-step actions and multi-step procedures can be composed and shared. Teams looking to standardize how they extend Claude's capabilities across projects.

## Technical Details

Module-oriented skill descriptors with invocation conventions for runtime integration. Language-agnostic design with examples in common implementation languages for portability. Focus on testability and composability enables validation within CI pipelines. Skills are organized as folders containing instructions and scripts for straightforward discovery and loading.
