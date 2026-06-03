---
name: Chrome DevTools Protocol
slug: devtools-protocol
homepage: https://chromedevtools.github.io/devtools-protocol/
repo: https://github.com/chromedevtools/devtools-protocol
license: Other
category: coding-devtools
subCategory: developer-utilities
tags:
  - Dev Tools
description: >-
  Chrome DevTools Protocol is an open specification that defines commands, events, and types for browser debugging and
  automation.
author: Google
ossDate: '2017-03-28T18:01:17.000Z'
featured: false
status: tracked
---
## Summary

The Chrome DevTools Protocol (CDP) is an open, versioned protocol that defines a set of domains, commands, and events for instrumenting, inspecting, debugging, and profiling Chromium-based browsers. It enables tooling and automation to interact with browser internals programmatically, covering areas such as DOM manipulation, network interception, runtime evaluation, debugging, and performance monitoring.

## Key Features

- Clear domain-based command/event model covering page control, network, DOM, CSS, performance, runtime, and debugger.
- TypeScript definitions and generated bindings facilitate integration across environments and languages.
- Regularly synchronized with Chromium, backed by the Chrome DevTools team and a broad ecosystem of consumers.

## Use Cases

- Automated testing and headless browser automation for E2E tests, screenshots, and performance captures.
- Building profiling and debugging tools that rely on low-level browser introspection.
- CI monitoring and telemetry collection for page load metrics, resource timing, and error harvesting.

## Technical Notes

- Organized as domain JSON/PDL descriptors with generated TypeScript declarations and publishing via npm.
- Designed for extensibility and clear versioning to support evolving browser features.
- Widely used by community tools and supported by a maintained release process and changelog.
