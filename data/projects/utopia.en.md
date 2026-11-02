---
name: utopia
slug: utopia
homepage: null
repo: https://github.com/deeplethe/utopia
license: Apache-2.0
category: models-modalities
subCategory: foundation-models
tags:
  - Knowledge Graph
  - Bitemporal
  - RAG
  - MCP
description: >-
  An open-source enterprise world model from DeepLethe: a bitemporal knowledge graph that learns passively
  from your material, keeps ontology and time awareness in the base layer, and deploys offline as a single
  Rust binary plus Postgres.
author: deeplethe
ossDate: '2026-08-07'
featured: false
status: tracked
---

## Overview

Utopia, built by DeepLethe and billed as the first open-source enterprise world model, is an open substrate for knowledge engineering that learns passively and governs itself. Where a vector store or knowledge graph works to hold present knowledge, Utopia puts time awareness and ontology in the base layer: knowledge evolves as material arrives, and conflict detection, reasoning, and decision making all run against that ontology. It deploys offline, so a company can stand up a knowledge foundation and a decision core its agents can trust on hardware it controls.

## Key Features

- Bitemporal knowledge graph: every fact carries when it held in the world and when the system learned it; corrections close the old version and link the new one rather than overwriting
- Broad ingestion — PDF, DOCX, PPTX, XLSX, CSV, Markdown, HTML, and more, with scans read by MinerU or a vision model, recordings transcribed with speaker labels, and scheduled sync from web pages, RSS, GitHub, Jira, Notion, WebDAV, and S3-compatible buckets
- Hybrid search and chat: Tantivy full-text plus pgvector fused with RRF, streaming answers with inline citations that open the source passage, on any OpenAI-compatible endpoint so the whole system can run air-gapped
- Ontology workbench with cold-start packs (schema.org, W3C Org, PROV-O, FOAF, IOF Core), three-stage entity resolution with undo, agent adjudication, and a human review queue for doubtful cases
- Reasoning and conflict detection: ontology axioms compile into rules that derive facts by forward chaining, with three conflict kinds each offering explicit resolution choices
- Agents over MCP: an MCP server for every knowledge base with fine-grained permissions — reads are typed and dated, writes are proposals that go to a person first

## Use Cases

- Contract chains: answering which payment terms applied on a given date, from which amendment, with the sentence as evidence
- "Who held what, when" questions over changing records, including what the base believed at the time
- Agents reading the base over MCP, and systems (robotics, monitoring) pushing timestamped observations straight into the graph

## Technical Details

- One Rust binary and one Postgres: full-text search runs on Tantivy embedded in the binary, vectors live in pgvector, and the job queue is a table — deployed via docker compose on linux/amd64 and arm64 with the web console on port 1516
- Extraction turns documents into entities and facts following an editable ontology; edges are reified so an edge can carry attributes of its own
- Each fact keeps two clocks (valid time and system time); entity resolution runs exact alias matching, then embedding similarity, then a model's judgment, and every merge can be undone
- Search fuses Tantivy and pgvector results with RRF; the same read-only agent tools are exposed over MCP; mounted databases (Postgres, MySQL, ClickHouse, Trino, Databricks, Snowflake) are queried through the Ontology2SQL method, which proposes table-to-ontology mappings you confirm
