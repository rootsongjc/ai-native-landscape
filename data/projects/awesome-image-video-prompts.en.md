---
name: Awesome Image & Video Prompts
slug: awesome-image-video-prompts
homepage: https://agentcraft.dev/en/prompts/
repo: https://github.com/ai-boost/awesome-image-video-prompts
license: GPL-3.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Prompts
  - Image Generation
  - Video Generation
  - Prompt Engineering
description: >-
  An open collection of more than 2,200 copy-ready prompts for the leading AI image and video models (GPT Image, Nano
  Banana, Seedance, Kling, Veo, Wan, MiniMax), each quoted verbatim from its source and shown next to the real output it
  produced. It also includes agent recipes for editing video with ffmpeg, with the full set searchable in an online
  gallery.
author: ai-boost
ossDate: '2023-11-09'
featured: false
status: tracked
---
## Overview

Awesome Image & Video Prompts is a curated, bilingual prompt library for the leading AI video and image models, covering the leaders of the Artificial Analysis video arena — Seedance, MiniMax H3, Kling, Veo, Wan, Gemini Omni, GPT Image, and Nano Banana. Every prompt is quoted verbatim from its source — the model maker's own guide or model card, or a creator's post on X with the video attached — and displayed next to the actual output it produced, with the original credited and linked. Maintained since 2023 (formerly Awesome-GPTs), the collection spans 952 video prompts and 1,277 image prompts, plus five agent recipes for editing video with ffmpeg.

The prompts are grouped by what you want to make rather than by model, so a "cinematic short film" or "product shot" intent leads to working prompts across whichever model you use. An online gallery at agentcraft.dev lets visitors search, filter, and copy prompts by category and tag.

## Key Features

- **Source-Verified Prompts**: Each entry quotes the prompt verbatim from the model maker's guide or a creator's post, names its model and generation mode (text-to-video, reference-to-video), and links the original with like count and date
- **Output-Paired Entries**: Every prompt is shown next to its real output — animated GIF/JPG previews click through to the original post with sound
- **Intent-Based Organization**: Video prompts grouped into cinematic, action, sci-fi/fantasy, anime, ads, dialogue, music, vlogs, nature, animals, and VFX; image prompts into posters, infographics, UI mockups, product shots, portraits, characters, illustration, comics, photo-to-art, architecture, maps, collage, and photo editing
- **Cross-Cutting Tag Browser**: A shared tag taxonomy (camera moves, hard cuts, character reference, montage, and more) enables browsing across categories
- **Agent Recipes for Video Editing**: Five recipes for having agents edit video with ffmpeg, plus guides, skills, and 3D workflows with agents
- **Bilingual and Searchable**: English and Simplified Chinese READMEs with mirrored content pages, and an online gallery at agentcraft.dev for search, filter, and copy

## Use Cases

- **Prompt Reference Library**: Find a proven, source-attributed prompt for a specific image or video task instead of writing from scratch
- **Model Comparison**: See how the same creative intent is prompted across Seedance, Kling, Veo, Wan, MiniMax, and others
- **Learning Prompt Structure**: Study how official guides and top creators structure shot lists, timing blocks, and camera directions
- **Agent Video Workflows**: Follow the ffmpeg agent recipes to automate video editing steps with coding agents

## Technical Details

- **Content-as-Data Layout**: Prompts live in per-category markdown files under `pages/en/` and `pages/zh/`, each entry anchored (`#model-slug`) for deep linking from the index, tags page, and gallery
- **Verbatim Attribution Model**: Prompts are stored as quoted text in collapsible blocks with structured metadata — model name, generation mode, source URL, like count, and capture date — rather than paraphrased
- **Preview Asset Pipeline**: Animated and still previews in `previews/` pair each entry with its real output, doubling as thumbnails that link to the original creator post
- **Tag Index**: `pages/en/tags.md` defines the cross-category tag vocabulary referenced by chips on every entry
- **Legacy Continuity**: The original Awesome-GPTs list is preserved under `legacy/awesome-gpts.md` after the project's scope shifted to image and video prompts
- **Maintained Cadence**: A dated "Recently added" changelog in the README tracks ongoing curation
