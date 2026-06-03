---
name: Cloudflare VibeSDK
slug: vibesdk
homepage: https://build.cloudflare.dev/
repo: https://github.com/cloudflare/vibesdk
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Dev Tools
description: >-
  An open-source AI app generation and deployment platform that turns natural language descriptions into full-stack apps
  with live previews and one-click deploy.
author: Cloudflare
ossDate: '2025-08-25T15:07:31.000Z'
featured: false
status: tracked
---

## Summary

Cloudflare VibeSDK is an open-source example platform that generates full-stack applications from natural language prompts, offering live previews in sandboxed containers and easy deployment to Cloudflare Workers. It's useful for teams building hosted AI development platforms or internal tooling.

## Key features

- Phase-wise AI code generation with automated checks and error correction.
- Live containerized previews for rapid validation.
- Integrations with multiple LLM providers via AI Gateway.
- GitHub export and one-click deploy to Workers for Platforms.

## Use cases

- SaaS products offering extensible low-code app builders for end users.
- Internal teams creating landing pages, dashboards, or automation without engineering overhead.
- Developers prototyping and validating generative development pipelines.

## Technical highlights

- Frontend: React + Vite + TailwindCSS.
- Backend: Cloudflare Workers + Durable Objects, D1 (Drizzle) for persistence.
- Runtime: Cloudflare Containers for safe app execution.
- Deployment: Workers for Platforms, R2, KV and other Cloudflare services.
