---
name: Flox
slug: flox
homepage: https://flox.dev
repo: https://github.com/flox/flox
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - Sandbox
description: A Nix-powered, reproducible and shareable development environment and package manager.
logo: ''
author: Flox
ossDate: '2022-12-22T15:52:43Z'
featured: false
status: tracked
---

## Overview

Flox provides a deterministic foundation for the software development lifecycle, powered by Nix to deliver reproducible and shareable development environments. It ensures runtime consistency across local development, CI pipelines, and image builds by layering and replacing dependencies where needed, eliminating the "works on my machine" problem.

## Key Features

Flox offers reproducible environment builds through a layering mechanism that manages and reproduces dependencies consistently across machines. It supports environment packaging and sharing to simplify team collaboration and onboarding, multi-target image export for CI/CD integration, and a developer-friendly CLI that streamlines environment creation, installation, and activation.

## Use Cases

Flox is well-suited for projects requiring environment consistency and shareability, including multi-service development, CI build pipelines, teaching environments, and enterprise development platforms. It particularly benefits teams seeking portable environments without relying solely on traditional container boundaries.

## Technical Details

Flox leverages the Nix package ecosystem for package management and environment isolation, applying a layered environment model to replace or override dependencies. The project is implemented in Rust and can build environments into deployable images while maintaining access to Nixpkgs for a large catalog of open-source packages. It is licensed under GPL-2.0.
