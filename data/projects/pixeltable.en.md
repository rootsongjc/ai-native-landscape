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
logo: ''
author: Pixeltable
ossDate: '2023-05-10T18:03:02Z'
featured: false
status: tracked
---

## Overview

Pixeltable is an open-source declarative backend for multimodal AI applications that unifies the storage, indexing, transformation, and inference of images, video, audio, and documents under a single table interface. It replaces hand-built ETL scripts with incremental, versioned computations so teams can focus on model logic rather than pipeline plumbing.

## Key Features

- Native multimodal column types (`pxt.Image`, `pxt.Video`, `pxt.Document`) that treat media as first-class data alongside traditional structured fields.
- Declarative computed columns that define transformation and inference pipelines once, with automatic incremental execution and caching to avoid redundant recomputation.
- Built-in embedding indexes and semantic search on any column, enabling similarity retrieval and RAG workflows without external vector infrastructure.

## Use Cases

Teams building multimodal retrieval and Q&A systems can ingest, embed, and search images and documents in a single declarative table. Automated labeling and object-detection pipelines benefit from Pixeltable's incremental recomputation as new media arrive. Production ML workloads gain reproducibility and versioning for every data transformation and model inference step.

## Technical Details

Pixeltable stores media externally while managing metadata and computed results in PostgreSQL, using view-maintenance techniques to keep derived data fresh. Users can extend the system with custom UDFs and iterators, and pre-built adapters connect to OpenAI, Hugging Face, YOLOX, and other popular services. The project is Apache-2.0 licensed with an active contributor community.
