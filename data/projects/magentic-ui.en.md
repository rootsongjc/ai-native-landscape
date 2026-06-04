---
name: Magentic-UI
slug: magentic-ui
homepage: null
repo: https://github.com/microsoft/magentic-ui
license: Unknown
category: coding-devtools
subCategory: browser-automation
tags:
  - AI Agent
description: >-
  A research prototype of a human-centered web agent that can browse and perform actions on the web, generate and
  execute code, and generate and analyze files.
author: Microsoft
ossDate: '2025-05-05T20:24:30.000Z'
featured: false
status: tracked
---

Magentic-UI is a research prototype of a human-centered interface powered by a multi-agent system that can browse and perform actions on the web, generate and execute code, and generate and analyze files.

## Key Features

1. **Human-Centered Design**: Unlike traditional agents, Magentic-UI puts humans in the loop, allowing users to monitor, control, and adjust tasks in real-time.

2. **Multi-Agent System**: Built on AutoGen, Magentic-UI leverages a team of specialized agents to handle different aspects of web tasks.

3. **Web Automation with Control**: Automate web tasks while maintaining user oversight with action approval mechanisms.

4. **File Operations**: Upload, generate, and analyze files as part of task execution.

5. **Code Generation and Execution**: Generate and execute code to accomplish complex tasks.

6. **Plan Learning and Retrieval**: Learn from previous runs to improve future automation and save plans in a gallery for reuse.

## Use Cases

- **Web Task Automation**: Automate repetitive web tasks like form filling, data extraction, and online ordering while maintaining human oversight.

- **Complex Web Navigation**: Handle tasks requiring deep navigation through websites not indexed by search engines.

- **Integrated Web and Code Tasks**: Perform tasks that require both web navigation and code execution, such as generating charts from online data.

- **Research and Experimentation**: Study human-agent interaction and experiment with web agents in a controlled environment.

## Technical Details

Magentic-UI builds on Magentic-One, a powerful multi-agent team released by Microsoft, and is powered by AutoGen, Microsoft's leading agent framework. It features:

- Co-Planning: Collaboratively create and approve step-by-step plans using chat and the plan editor
- Co-Tasking: Interrupt and guide task execution using the web browser directly or through chat
- Action Guards: Sensitive actions are only executed with explicit user approvals
- Parallel Task Execution: Run multiple tasks in parallel with status indicators

## Installation

Magentic-UI is available on PyPI and can be installed with:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install magentic-ui --upgrade

# Set your API key
export OPENAI_API_KEY="your-api-key-here"

# Launch Magentic-UI
magentic-ui --port 8081
```

For more detailed installation instructions, including Docker requirements and custom LLM configurations, visit the GitHub repository.
