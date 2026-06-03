---
name: Zed
slug: zed
homepage: https://zed.dev
repo: https://github.com/zed-industries/zed
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: Next-generation code editor designed for high-performance collaboration with humans and AI.
author: Zed Industries
ossDate: '2021-02-20T03:01:06.000Z'
featured: false
status: tracked
---

> Local-first, extreme performance, and real-time collaboration—Zed is redefining what modern developers expect from a code editor using a Rust technology stack.

## Overview

Zed is a next-generation, high-performance code editor built by core authors of Atom and Tree-sitter. It emphasizes local ultra-low latency, multiplayer real-time collaboration, and seamless integration with modern language toolchains. Built entirely in Rust and powered by gpui, a proprietary GPU-accelerated UI framework, Zed aims to deliver editing at "thought speed" on your local machine.

## Design Goals

Zed's core objectives include:

- Delivering sub-millisecond local response times for a supremely smooth editing experience.
- Enabling true multiplayer real-time editing with document-level synchronization through LiveKit and custom collaboration infrastructure.
- Providing project navigation, code intelligence, and structured language processing suited for large-scale engineering.
- Creating a unified terminal, extension, and editing experience that reduces plugin fragmentation.

These goals collectively position Zed as a next-generation development environment for human-AI collaboration.

## Technical Foundation

Zed is built entirely in Rust, with system architecture centered around gpui, a custom framework that leverages GPU-accelerated rendering for stable, high-frame-rate UI. Language parsing and structured editing rely on Tree-sitter, enabling fast syntax highlighting, incremental parsing, and code structure manipulation. Zed includes a built-in collaboration server component using LiveKit for real-time communication.

## Key Features

Here are Zed's major functionality highlights:

- High-performance local editing with exceptionally fast response times.
- Real-time multiplayer collaboration supporting synchronized multi-user editing similar to Google Docs.
- Tree-sitter-based language support with powerful syntax highlighting and structured editing capabilities.
- Built-in terminal for seamless developer workflow.
- Extensible plugin system for customizable functionality.
- Cross-platform support for macOS, Linux, and Windows.
- Enterprise-grade project management suited for large-scale collaborative engineering.

Zed's multiplayer collaboration features are particularly standout, making it ideal for pair programming and remote team scenarios.

## Platform and Installation

Zed supports macOS, Linux, and Windows with straightforward downloads from the official website or via Linux package managers. Web-based versions are not yet available; development progress can be tracked on GitHub.

## Development and Building

Zed provides detailed build documentation for macOS, Linux, and Windows, allowing users to compile from source locally. It supports local collaboration server deployment for self-hosted testing. The repository includes comprehensive contributor documentation and scripts covering CI pipelines, build tooling, and Nix support.

## License

Zed uses a multi-license model including AGPL, Apache, and GPL components. The project employs cargo-about for automated dependency license compliance verification, ensuring third-party dependencies meet open-source requirements.

## Positioning Summary

Zed is dedicated to building a local-first, ultra-high-performance, deeply collaborative modern development environment. Its technology stack—built on Rust, GPU-accelerated rendering, and Tree-sitter—demonstrates significant engineering and performance advantages in the evolution of code editors.

## Summary

Zed delivers extreme local performance and real-time collaboration as its core value, combining a Rust technology stack and Tree-sitter language parsing to advance code editors toward greater intelligence and efficiency. For developers prioritizing high performance and team collaboration, Zed is well worth exploring and following.
