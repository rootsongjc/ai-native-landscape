---
name: Aider
slug: aider
homepage: https://aider.chat/
repo: https://github.com/aider-ai/aider
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: >-
  A terminal-based AI pair programmer that helps you write, edit, and manage code through natural language commands,
  supporting Git integration and multiple LLMs.
logo: ''
author: Aider
ossDate: '2023-05-09T18:57:49.000Z'
featured: false
status: tracked
---

Aider is a powerful terminal-based AI pair programming tool that supports multiple mainstream large language models, including Claude 3.7 Sonnet, DeepSeek R1 & Chat V3, OpenAI o1, o3-mini, and GPT-4o, while also being able to connect to local models. It can intelligently map and understand your entire codebase, supporting over 100 programming languages, including Python, JavaScript, Rust, Ruby, Go, C++, PHP, HTML, CSS, and more.

One of Aider's key features is its seamless Git integration, automatically committing changes and generating meaningful commit messages. You can use Aider in your favorite IDE or editor, simply adding comments to request changes. Additionally, it supports context understanding of images and web pages, as well as voice-to-code functionality, allowing you to request new features, test cases, or bug fixes through voice commands.

Aider also provides code quality assurance features, automatically performing code checks and tests after each modification, and can fix detected issues. For developers who prefer web interfaces, Aider offers convenient copy-paste functionality, making it easy to interact with LLMs in the browser.

Quick start:

```bash
# Installation
python -m pip install aider-install
aider-install

# Navigate to project directory
cd /to/your/project

# Choose model and configure
aider --model deepseek --api-key deepseek=<key>  # DeepSeek
aider --model sonnet --api-key anthropic=<key>   # Claude 3.7 Sonnet
aider --model o3-mini --api-key openai=<key>     # o3-mini
```

For more detailed information, please refer to the official documentation, including installation guides, usage tutorials, video tutorials, LLM connection configuration, troubleshooting, etc. The community resources are rich, including LLM leaderboards, GitHub repository, Discord community, release notes, and blog posts.
