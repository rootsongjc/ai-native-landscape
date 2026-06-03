---
name: Pixeltable
slug: pixeltable
homepage: https://docs.pixeltable.com
repo: https://github.com/pixeltable/pixeltable
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Data
  - Dev Tools
  - Multimodal
description: A declarative data infrastructure for multimodal AI workloads that simplifies storage, indexing, and inference.
author: Pixeltable
ossDate: '2023-05-10T18:03:02Z'
featured: false
status: tracked
---

Pixeltable is an open-source declarative backend for multimodal AI applications that unifies the storage, indexing, transformation, and inference of images, video, audio, and documents under a single table interface. It replaces hand-built ETL scripts with incremental, versioned computations so teams can focus on model logic rather than pipeline plumbing.

## Native Multimodal Types

- First-class column types (`pxt.Image`, `pxt.Video`, `pxt.Document`) treating media alongside structured fields
- Declarative computed columns that define transformation and inference pipelines once
- Automatic incremental execution and caching to avoid redundant recomputation

## Built-in Search & Retrieval

- Embedding indexes and semantic search on any column without external vector infrastructure
- Similarity retrieval and RAG workflows directly within the table abstraction
- Supports retrieval-augmented generation, automated labeling, and object-detection pipelines

## Extensibility & Integration

- Custom UDFs and iterators for extending the system with domain-specific logic
- Pre-built adapters connecting to OpenAI, Hugging Face, YOLOX, and other popular services
- External media storage with PostgreSQL-managed metadata and view-maintenance for freshness
- Apache-2.0 licensed with an active contributor community
