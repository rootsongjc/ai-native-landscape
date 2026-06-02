---
name: DeepTutor
slug: deeptutor
homepage: https://hkuds.github.io/DeepTutor
repo: https://github.com/hkuds/deeptutor
license: Unknown
category: rag-knowledge
subCategory: knowledge-graphs
tags:
  - Agents
  - Application
  - Assistant
  - Knowledge Graph
  - RAG
  - Visualization
description: A multi-agent personalized learning system integrating RAG, knowledge graphs, and interactive visualizations.
logo: ''
author: HKUDS
ossDate: '2025-12-28T15:35:54Z'
featured: false
status: tracked
---

## Overview

DeepTutor is an agent-native, open-source personalized tutoring platform developed by HKUDS. It combines Retrieval-Augmented Generation (RAG), knowledge graphs, and multi-agent collaborative reasoning to deliver end-to-end learning support from knowledge retrieval to practice and assessment.

## Key Features

- Large-scale document Q&A with cited answers powered by vector retrieval and RAG pipelines.
- Multi-agent problem solving with a dual-loop architecture supporting real-time streaming reasoning.
- Intelligent exercise generation that produces and validates practice questions by difficulty and exam style.
- Interactive learning visualization that transforms complex concepts into step-by-step demonstrations.

## Use Cases

- University teaching and online course platforms where instructors build question banks and mock exams.
- Self-learners who benefit from interactive explanations and personalized practice sessions.
- Researchers conducting literature reviews and systematic reviews with deep retrieval and report generation.

## Technical Details

- Built with Python/FastAPI backend and Next.js frontend, supporting Docker deployment and local development.
- Retrieval layer combines embeddings with knowledge graph structures for semantic search.
- Parallelized dynamic task queue with centralized citation management and plugin-style tool integrations.
