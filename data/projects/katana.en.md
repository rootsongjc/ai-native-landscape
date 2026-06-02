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

## Overview

Katana is a next-generation crawling and spidering framework developed by ProjectDiscovery for automated web data extraction. Built with a modular architecture and a concurrency-driven engine, it provides flexible crawling strategies, dynamic rendering support, and multiple output options for efficient and scalable website crawling.

## Key Features

Katana delivers high-throughput concurrent crawling with task queue management, along with headless browser and JavaScript rendering support for handling complex modern pages. It offers plugin-based crawling rules with extensible output formats such as JSON and CSV, and integrates tightly with the ProjectDiscovery ecosystem including Nuclei and HTTPx for combined detection and automation.

## Use Cases

Katana is ideal for asset discovery in the early stages of web security scanning, including passive and active crawling, directory enumeration, and site mapping. Security researchers, penetration testers, and incident response teams use it as an efficient component in their discovery and data collection toolchain.

## Technical Details

Implemented in Go, Katana provides both a CLI tool and programmatic interfaces with high-concurrency goroutines, configurable crawl rates, and retry policies. Its outputs integrate easily with CI pipelines and other ProjectDiscovery tools, enabling teams to build end-to-end discovery and verification workflows.
