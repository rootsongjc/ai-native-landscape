---
name: Katana
slug: katana
homepage: https://projectdiscovery.io/open-source
repo: https://github.com/projectdiscovery/katana
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
description: >-
  An open-source web crawling and spidering framework by ProjectDiscovery focused on high concurrency, modularity, and
  integration with security tooling.
logo: ''
author: ProjectDiscovery
ossDate: '2021-01-02T16:56:05Z'
featured: false
status: tracked
---

## Detailed Introduction

Katana is an open-source next-generation crawling and spidering framework developed by ProjectDiscovery. It is designed for efficient, scalable website crawling and active/passive discovery. With a modular architecture and a concurrency-driven engine, Katana offers flexible crawling strategies, dynamic rendering support, and multiple output options to support security research and large-scale asset discovery.

## Main Features

- High-throughput concurrent crawling with task queue management.
- Headless browser and JavaScript rendering support for complex pages.
- Plugin-based crawling rules and extensible output formats (JSON/CSV).
- Integration with the ProjectDiscovery ecosystem (e.g., Nuclei, HTTPx) for combined detection and automation.

## Use Cases

Suitable for asset discovery in the early stages of web security scanning, passive/active crawling, directory and path enumeration, and site mapping. Security researchers, penetration testers, and incident response teams can use Katana as an efficient component in their discovery and data collection toolchain.

## Technical Features

Implemented in Go, Katana provides a CLI tool and programmatic interfaces, supports high-concurrency goroutines, configurable crawl rates and retry policies, and produces outputs that integrate easily with CI pipelines and other ProjectDiscovery tools to build end-to-end discovery and verification workflows.
