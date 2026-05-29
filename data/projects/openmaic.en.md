---
name: OpenMAIC
slug: openmaic
homepage: null
repo: https://github.com/thu-maic/openmaic
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Application
  - Framework
description: >-
  OpenMAIC is an open-source AI platform that transforms any topic or document into a rich, interactive classroom
  experience through multi-agent orchestration. It features one-click lesson generation, AI teachers and classmates for
  real-time interaction, rich scene types (slides, quizzes, interactive simulations, and project-based learning),
  whiteboard drawing, voice explanations, and export to PPTX or HTML formats.
logo: ''
author: THU-MAIC (清华大学)
ossDate: '2025-03-16'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

OpenMAIC (Open Multi-Agent Interactive Classroom) is an open-source AI education platform developed by the MAIC team at Tsinghua University. Built on multi-agent orchestration technology, it transforms any topic or document into an immersive interactive classroom experience. Through collaboration between AI teachers and AI classmates, the system achieves various teaching scenarios including slide lectures, real-time discussions, interactive quizzes, simulation experiments, and project-based learning.

The core technical architecture is built with Next.js + React + TypeScript, using LangGraph for multi-agent state machine orchestration, and supports multiple LLM providers including OpenAI, Anthropic, Google Gemini, and DeepSeek. The platform has published a JCST 2026 paper: "From MOOC to MAIC: Reimagine Online Teaching and Learning through LLM-driven Agents".

## Key Features

- **One-Click Lesson Generation**: Describe a learning topic or upload reference materials, and AI automatically builds complete lesson outlines and scene content
- **Multi-Agent Classroom**: AI teachers and classmates deliver lectures, discussions, and interactions in real time, supporting roundtable debates and Q&A mode
- **Rich Scene Types**:
  - Slide Lectures: Voice narration, spotlight effects, and laser pointer animations
  - Interactive Quizzes: Single/multiple choice, short answer with real-time AI grading and feedback
  - Interactive Simulations: HTML-based visual experiments like physics simulators and flowcharts
  - Project-Based Learning (PBL): Role-playing with AI agents to complete structured projects
- **Whiteboard & Voice**: Agents draw diagrams, formulas, and concept maps on a shared whiteboard in real time, with text-to-speech (TTS) and speech recognition support
- **Export Functionality**: Export to editable PowerPoint (.pptx) or standalone interactive HTML pages
- **OpenClaw Integration**: Generate classrooms directly from 20+ messaging apps like Feishu, Slack, and Telegram

## Use Cases

- **Online Education**: Provide intelligent online teaching tools for teachers and students with automatic content generation and interactive sessions
- **Self-Directed Learning**: Learners can quickly generate personalized learning content based on their interests and needs
- **Corporate Training**: Transform enterprise documents and training materials into interactive training courses
- **Knowledge Sharing**: Convert papers, reports, and other documents into easy-to-understand interactive explanations
- **Educational Research**: Explore applications of LLM-driven agents in educational scenarios

## Technical Highlights

- **Two-Stage Generation Pipeline**: Outline generation → Scene content generation, ensuring structured courses and high-quality content
- **LangGraph Orchestration**: State machine manages agent turns and discussion flows, supporting 28+ action types
- **Playback Engine**: State machine drives classroom playback and real-time interaction (idle → playing → live)
- **Multimodal Output**: Supports voice, whiteboard drawing, spotlight, laser pointer, and various presentation forms
- **Extensible Architecture**: Based on Next.js App Router with modular design for easy extension and customization
- **i18n Support**: Interface supports Chinese and English
- **Flexible Deployment**: One-click Vercel deployment or Docker containerization
- **Advanced Document Parsing**: Optional MinerU integration for complex tables, formulas, and OCR parsing
- **License**: AGPL-3.0, commercial licensing inquiries: thu_maic@tsinghua.edu.cn
