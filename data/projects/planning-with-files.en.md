---
name: Planning with Files
slug: planning-with-files
homepage: https://www.aikux.ai
repo: https://github.com/othmanadi/planning-with-files
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
  - Workflow
description: A Manus-inspired workflow that uses persistent Markdown files to manage plans and agent skills.
logo: ''
author: Othman Adi
ossDate: '2026-01-03T07:37:28Z'
featured: false
status: tracked
---

## Overview

Planning with Files is a Manus-inspired, file-based approach to AI agent planning that stores plans, tasks, and skill definitions as version-controlled Markdown files. By keeping all planning state in the file system, it makes agent workflows auditable, diffable, and easy to collaborate on using standard developer tools.

## Key Features

- Plain-Markdown plan storage that integrates naturally with Git, making every plan change versioned, reviewable, and reversible.
- File-driven integration points for agent skills and tool-call flows, so tasks are defined and tracked as editable text artifacts.
- Lightweight, framework-agnostic design that fits into existing developer toolchains including editors, CI/CD, and code review processes.

## Use Cases

Teams developing agent skills can keep plans and execution records alongside source code, enabling code-reviewable plan changes and rollback. Researchers prototyping agent workflows benefit from the ability to diff and iterate on plans as text files. Automated pipelines that require auditability and traceability can store runtime state in the repository for full historical visibility.

## Technical Details

The project treats the file system as a first-class planning artifact, relying on structured Markdown for portability and long-term storage. It is designed to coexist with Git, editors, and CI systems so that agent plans and skill definitions can be engineered with the same rigor as application code. Structured documents and explicit context files make retrieval, comparison, and manual review straightforward.
