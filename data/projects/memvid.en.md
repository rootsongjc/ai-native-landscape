---
name: Memvid
slug: memvid
homepage: https://www.memvid.com/
repo: https://github.com/olow304/memvid
license: Apache-2.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
  - Utility
description: Encode millions of text chunks into portable MP4 files for millisecond semantic search and offline-first AI memory.
author: Saleban Olow (@Olow304)
ossDate: '2025-05-27T16:01:08.000Z'
featured: false
status: tracked
---

## Overview

Memvid encodes text chunks as QR codes inside video frames and leverages modern video codecs to compress and index large knowledge bases into portable MP4 files. This design provides millisecond-level semantic search without external databases, making it ideal for offline and edge deployments.

## Key Features

- 50–100× storage reduction compared to plain text or vector DBs by packing repetitive QR frames.
- Sub-100ms retrieval via direct frame seek, QR decode and lookup.
- Zero infrastructure: just Python and MP4 files—works anywhere video plays.

## Use Cases

- Package documentation, PDFs or knowledgebases into single distributable memory files for offline QA.
- High-speed semantic search on edge devices or constrained networks.
- Document assistants, library search and archival storage with compact footprint.

## Technical Highlights

- Text→QR→Frame pipeline that exploits codec compression for repeated visual patterns.
- Parallel encoding, configurable embedding models, and support for advanced codecs (AV1/H.265).
- Python API, CLI and an optional local interactive UI for easy integration.
