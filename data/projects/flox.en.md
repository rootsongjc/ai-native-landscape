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

## Detailed Introduction

Flox is a Nix-powered, portable development environment and package manager designed to provide reproducible, shareable environments across the full software lifecycle. By layering and replacing dependencies where it matters, Flox keeps runtime consistency between local development, CI pipelines, and image builds. See the [website](https://flox.dev) and [documentation](https://flox.dev/docs) for details.

## Main Features

- Reproducible environment builds: layering mechanism to manage and reproduce dependencies consistently.
- Environment sharing: package and share environments to simplify collaboration and onboarding.
- Multi-target image support: export environments as container images or other deployable artifacts for CI/CD.
- Developer-friendly CLI: the `flox` tool streamlines creating, installing, and activating environments.

## Use Cases

Flox is suitable for projects that require environment consistency and shareability, such as multi-service development, CI builds, teaching images, and enterprise development platforms. It particularly fits teams wanting portable environments without relying solely on traditional container boundaries. See tutorials in the [docs](https://flox.dev/docs/tutorials/creating-environments).

## Technical Features

Flox leverages the Nix package ecosystem for package management and environment isolation, applying a layered environment model to replace or override dependencies. The project is implemented in Rust and can build environments into images while keeping access to Nixpkgs for a large catalog of open-source packages. Licensed under GPL-2.0.
