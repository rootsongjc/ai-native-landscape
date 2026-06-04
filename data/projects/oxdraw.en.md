---
name: oxdraw
slug: oxdraw
homepage: null
repo: https://github.com/rohanadwankar/oxdraw
license: MIT
category: applications-products
subCategory: productivity-tools
tags:
  - Dev Tools
  - Visualization
description: >-
  oxdraw is a diagram-as-code tool that combines declarative Mermaid sources with a draggable visual editor for
  reproducible, editable diagrams.
author: Rohan Adwankar
ossDate: '2025-10-07T19:59:40.000Z'
featured: false
status: tracked
---

## Overview

oxdraw is a diagram-as-code tool that uses Mermaid as the declarative source while offering a draggable web editor for fine-grained visual adjustments. Visual edits persist back to the `.mmd` source as comments, preserving reproducibility and compatibility with other Mermaid-based workflows.

## Key Features

- Declarative + visual editing: author diagrams in Mermaid and refine positions, paths, and styling visually;
- CLI and editor modes: render images via CLI or launch the interactive editor to tweak diagrams live;
- Rich editor interactions: grid snapping, alignment guides, edge control points, and per-node styling;
- Integration-ready: CLI tool suitable for CI/CD rendering and programmatic diagram pipelines.

## Use Cases

- Produce architecture and flow diagrams that are both machine-generated and human-polished;
- Tidy AI-generated Mermaid files into presentation-ready visuals;
- Version and track diagram changes in source control for documentation and design workflows;
- Integrate diagram rendering into static site generation and automation pipelines.

## Technical Highlights

- High-performance Rust-based renderer and CLI support;
- React-based frontend editor providing draggable editing and fine-grained styling controls;
- Visual changes serialized as comments in Mermaid files to maintain compatibility and traceability;
- Multi-format output (SVG/PNG) for flexible publishing.
