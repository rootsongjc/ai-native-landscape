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

## Detailed Introduction

DeepTutor, developed by the HKU Data Intelligence Lab, is a multi-agent personalized learning system designed to provide end-to-end support from knowledge retrieval and understanding to practice and assessment. The platform combines Retrieval-Augmented Generation (RAG), knowledge graph capabilities, and multi-agent collaborative reasoning to deliver document-level Q&A, automated exercise generation, interactive visual explanations, and simulated exam scenarios with traceable citations and session memory.

## Main Features

- Large-scale document Q&A: build knowledge bases and deliver cited answers via vector retrieval and RAG.
- Multi-agent problem solving: dual-loop architecture for analysis and solving with real-time streaming reasoning.
- Intelligent exercise generation: produce and validate practice questions by difficulty and exam style, supporting batch and mimic modes.
- Interactive learning visualization: transform complex concepts into interactive step-by-step demonstrations and visual aids.

## Use Cases

Ideal for university teaching, online course platforms, literature reviews, and self-learners: instructors can rapidly build question banks and mock exams; students benefit from interactive explanations and personalized practice; researchers can run deep retrieval and report generation for systematic reviews and idea synthesis.

## Technical Features

The system uses Python/FastAPI for backend and Next.js for frontend, supports Docker deployment and local development. The retrieval layer uses embeddings and knowledge graph structures; the research pipeline features a parallelized dynamic task queue and centralized citation management, and the platform supports plugin-style tool integrations (web search, code execution, PDF parsing, etc.).
