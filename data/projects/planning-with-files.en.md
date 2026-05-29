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
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

Planning with Files is an open-source project by Othman Adi that takes inspiration from the Manus workflow. It enables a file-centered approach to planning and task management by persisting plans, tasks, and agent skill definitions as Markdown files. Storing state and configuration in the file system makes plans versionable, auditable, and easy to collaborate on, while allowing integration with agent skills (for example, Claude-based skills) and developer toolchains.

## Main Features

- Persistent plan storage using plain Markdown for easy editing and diffing.
- Integration points for agents and skills, allowing tasks and tool-call flows to be defined in files.
- Developer-friendly tooling designed to fit into existing Git workflows and CI/CD.
- Lightweight and extensible design suitable for both experimentation and production workflows.

## Use Cases

Ideal for teams or individuals who want to keep planning and execution records as text files: research prototypes, agent skill development, Git-centric task management, or automated workflows that require auditability and rollback via version control. Keeping runtime state and configuration in a repository enables code-reviewable plan changes.

## Technical Features

The project treats the file system as a first-class artifact, relying on structured Markdown for portability and long-term storage. It emphasizes seamless integration with existing tools (Git, editors, CI) so agent plans and skill definitions can be engineered alongside application code. Structured documents and context make retrieval, diffing, and manual review straightforward.
