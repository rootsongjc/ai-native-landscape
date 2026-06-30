---
name: OpenMontage
slug: open-montage
homepage: null
repo: https://github.com/calesthio/OpenMontage
license: AGPL-3.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Video Generation
  - Image Generation
  - Agent
  - Text-to-Speech
  - Remotion
description: The first open-source, agentic video production system that turns an AI coding assistant into a full video studio, handling research, scripting, asset generation, editing, and final composition.
author: Calesthio
ossDate: '2026-03-29T15:23:22Z'
featured: false
status: tracked
---

## Overview

OpenMontage is an open-source, agentic video production system that turns an AI coding assistant (Claude Code, GitHub Copilot, Cursor) into a complete video studio. Describe what you want in plain language and the agent handles research, scripting, asset generation, editing, and final composition through 12 pipelines and 52 tools.

## Key Features

- 12 production pipelines and 52 tools spanning image-based videos, real stock-footage composition, and animated shorts.
- 500+ agent skills for research, scripting, voiceover, editing, and rendering.
- Multi-provider asset generation (Veo, Kling, FLUX, Stable Diffusion, gpt-image-1) with TTS narration (ElevenLabs, OpenAI, Google Chirp3-HD).
- Final composition and rendering via Remotion, with word-level captions from WhisperX.

## Use Cases

- Produce cinematic trailers, animated shorts, and product ads from a natural-language prompt.
- Assemble real motion clips from free stock footage and open archives into a finished video.
- Generate branded marketing and social content end-to-end with minimal manual asset work.

## Technical Details

- Python-based agent system licensed under AGPL-3.0.
- Designed to run inside existing AI coding assistants rather than as a standalone app.
- Composable atelier (bespoke) and pipeline modes for both template-driven and fully custom scenes.
