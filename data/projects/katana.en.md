---
name: Katana
slug: katana
homepage: https://projectdiscovery.io/open-source
repo: https://github.com/projectdiscovery/katana
license: Unknown
category: coding-devtools
subCategory: developer-utilities
tags:
  - CLI
description: >-
  An open-source web crawling and spidering framework by ProjectDiscovery focused on high concurrency, modularity, and
  integration with security tooling.
author: ProjectDiscovery
ossDate: '2021-01-02T16:56:05Z'
featured: false
status: tracked
---

Katana is a next-generation crawling and spidering framework developed by ProjectDiscovery for automated web data extraction. Built with a modular architecture and a concurrency-driven engine, it provides flexible crawling strategies, dynamic rendering support, and multiple output options for efficient and scalable website crawling.

## Key Features

- High-throughput concurrent crawling with task queue management for scalable data extraction
- Headless browser and JavaScript rendering support for handling complex modern single-page applications
- Plugin-based crawling rules with extensible output formats such as JSON and CSV
- Tight integration with the ProjectDiscovery ecosystem including Nuclei and HTTPx for combined detection and automation
- Configurable crawl rates, retry policies, and scope controls for polite and targeted crawling

## Use Cases

- Asset discovery in the early stages of web security scanning, including passive and active crawling
- Directory enumeration and site mapping for penetration testing and bug bounty reconnaissance
- Automated data collection pipelines feeding into security analysis and vulnerability detection workflows
- Integration with CI pipelines for continuous security monitoring and change detection

## Technical Highlights

- Implemented in Go with high-concurrency goroutines for efficient resource utilization
- Provides both a CLI tool and programmatic interfaces for flexible integration
- Outputs integrate easily with other ProjectDiscovery tools for end-to-end discovery and verification workflows
