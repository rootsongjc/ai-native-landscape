---
name: workerd
slug: workerd
homepage: null
repo: https://github.com/cloudflare/workerd
license: Apache-2.0
category: platform-infra
subCategory: deployment-operations
tags:
  - Deployment
  - Dev Tools
description: >-
  workerd is Cloudflare's open-source JavaScript/Wasm server runtime designed to run Workers-compatible nanoservices and
  edge applications in local or self-hosted environments.
author: Cloudflare
ossDate: '2022-09-15T15:15:16.000Z'
featured: false
status: tracked
---

workerd (pronounced "worker-dee") is the JavaScript/Wasm runtime that powers Cloudflare Workers. It can be used as an application server to self-host Workers-compatible applications, as a development tool for local testing, or as a programmable HTTP proxy.

## Key Features

- Worker-compatible runtime with Web-standard APIs such as `fetch()`.
- Support for JavaScript/TypeScript and WebAssembly, with build tooling based on Bazel and prebuilt binaries available via npm.
- Capability bindings and Cap'n Proto configuration model for composable and secure service wiring.
- Integration with Wrangler and Miniflare for local development workflows.

## Use Cases

- Self-host Workers-compatible applications for compliance or offline scenarios.
- Run workerd as a programmable HTTP proxy or application server in place of traditional microservices.
- Use workerd in developer toolchains to iterate on edge code locally before deploying to Cloudflare.

## Technical Highlights

- Single-threaded event loop model optimized for high-concurrency I/O.
- Web-standard APIs enable easy portability between browser/edge and server environments.
- Apache-2.0 licensed, active community, and frequent updates.
