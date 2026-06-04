---
name: Open Interpreter
slug: open-interpreter
homepage: https://openinterpreter.com/
repo: https://github.com/openinterpreter/open-interpreter
license: AGPL-3.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Dev Tools
description: >-
  An open-source tool that turns natural language into locally executable code and commands, offering an interactive
  terminal and developer assistant capabilities.
author: Open Interpreter Contributors
ossDate: '2023-07-14T07:10:44.000Z'
featured: false
status: tracked
---

## Overview

Open Interpreter is an open-source bridge from natural language to executable code/commands. Users can run scripts, analyze data, control browsers, and more directly from conversational prompts, bringing LLM-powered automation into local workflows.

## Key Features

- Interactive terminal and developer assistant: start sessions with the `interpreter` command, supports streaming output and session persistence.
- Multi-backend model support: integrates with LiteLLM, OpenAI-compatible endpoints, and local model modes.
- Execution capabilities: runs Python, Shell, JavaScript, and performs file operations, plotting, and browser automation (requires user approval).
- Configurable profiles and settings for personalized behaviors and permissions.

## Use Cases

- Data analysis and visualization via natural-language prompts.
- Automating routine tasks: batch file processing, web scraping, and system scripting.
- Teaching and demonstrations: convert natural-language requests into runnable examples for education.

## Technical Highlights

- Implemented in Python with modular `interpreter` packages and extensive docs and examples.
- Licensed under AGPL-3.0—suitable for open-source use but with copyleft considerations.
- Offers desktop early access, Colab demos, and REST control examples for flexible deployment.
