---
name: Aider
slug: aider
homepage: https://aider.chat/
repo: https://github.com/aider-ai/aider
license: Apache-2.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: >-
  A terminal-based AI pair programmer that helps you write, edit, and manage code through natural language commands,
  supporting Git integration and multiple LLMs.
author: Aider
ossDate: '2023-05-09T18:57:49.000Z'
featured: false
status: tracked
---
## Overview

Aider is an AI pair programming tool that runs in your terminal, letting you pair program with LLMs to start new projects or build on existing code. It supports multiple mainstream models including Claude, DeepSeek, OpenAI, and local models, while intelligently mapping and understanding your entire codebase across over 100 programming languages.

## Key Features

- Seamless Git integration that automatically commits changes and generates meaningful commit messages
- Support for multiple LLM providers (Claude, DeepSeek, OpenAI) and local models via Ollama
- Context understanding of images, web pages, and voice-to-code functionality for hands-free coding
- Automatic code quality assurance with built-in checking, testing, and issue fixing after each modification

## Use Cases

Pair programming with AI for starting new projects or building on existing codebases. Refactoring, debugging, and adding features through natural language commands in your terminal or favorite IDE. Useful for developers who want AI assistance integrated directly into their existing workflow without switching tools.

## Technical Details

Python-based CLI tool installed via pip with support for over 100 programming languages. Connects to LLM providers via API keys and supports local models. Works with any editor or IDE by adding comments to request changes. Features a modular architecture with automatic Git operations, code analysis, and multi-file editing capabilities.
