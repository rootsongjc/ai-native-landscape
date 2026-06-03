---
name: Flox
slug: flox
homepage: https://flox.dev
repo: https://github.com/flox/flox
license: GPL-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - Sandbox
description: A Nix-powered, reproducible and shareable development environment and package manager.
author: Flox
ossDate: '2022-12-22T15:52:43Z'
featured: false
status: tracked
---
Flox provides a deterministic foundation for the software development lifecycle, powered by Nix to deliver reproducible and shareable development environments. It ensures runtime consistency across local development, CI pipelines, and image builds by layering and replacing dependencies where needed, eliminating the "works on my machine" problem.

## Reproducible Environments

- Layering mechanism that manages and reproduces dependencies consistently across machines
- Deterministic builds that produce identical results regardless of the host system
- Environment isolation without relying on traditional container boundaries
- Access to the Nixpkgs catalog for a large selection of open-source packages

## Sharing and Collaboration

- Environment packaging and sharing to simplify team collaboration and onboarding
- Single-command environment activation for new team members
- Version-pinned dependencies ensuring all collaborators run identical stacks
- Portable environments that work across Linux, macOS, and CI platforms

## CI/CD and Deployment

- Multi-target image export for seamless CI/CD integration
- Build environments into deployable container images or other artifacts
- Replace or override specific dependencies without rebuilding the entire environment
- Developer-friendly CLI that streamlines creation, installation, and activation

## Technical Foundation

- Implemented in Rust for performance and reliability
- Leverages the Nix package ecosystem for package management and environment isolation
- Layered environment model for dependency override and composition
- Licensed under GPL-2.0
