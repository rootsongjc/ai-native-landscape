---
name: DSH Superagent
slug: dsh-superagent-prototype
homepage: null
repo: https://github.com/deepseek-ai/dsh-superagent-prototype
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Agents
  - Coding Agent
  - Autonomous Agents
  - Dev Tools
description: >-
  DSH Superagent is a DeepSeek research prototype of a proactive coding agent for a single GitHub repository, packaged
  as a DeepSeek Harness bundle. It listens to GitHub and optionally Feishu, opens a work item when an allowed person
  asks, executes it in its own agent session and working directory, and answers in the original conversation such as
  with a pull request, under an authorization model designed to take as little human attention as possible.
author: deepseek-ai
ossDate: '2026-10-31'
featured: false
status: tracked
---
## Overview

DSH Superagent is a research prototype from DeepSeek that explores "super-agent" design towards a more autonomous agent system, published alongside the article *Exploring Super-agent Design: Towards a More Autonomous Agent System*. It is a proactive coding agent scoped to one GitHub repository, delivered as a bundle for DeepSeek Harness. When someone allowed asks the agent for work — on GitHub, or optionally Feishu — it opens a work item (a Ticket), works on it in its own agent session and directory, and answers in the original conversation, for example with a pull request. A web panel shows what needs a person.

The project is also a way of working with an agent: take as little human attention as possible, and give as much value as possible. The agent acts only when asked or when a rule the team wrote allows it, and speaks only when someone must act or can use a result. It is explicitly research code, largely engineered by coding agents, and intended as a reference for teams studying autonomous agent operation rather than a production product.

## Key Features

- **Proactive Work Intake**: Listens to GitHub (and optionally Feishu); an allowed person's request opens a Ticket with a Mandate, worked in a dedicated agent session and working directory
- **Authorization by Construction**: Allowed lists, team-written rules, and per-Ticket Mandates decide who may start work and what it may include; messages and quoted documents are inputs to a decision and cannot change permissions
- **Attention-Minimal Operation**: The agent acts only when asked or when a rule allows, and speaks only when a person must act or can use a result
- **Human-in-the-Loop Panel**: A web panel surfaces what needs a person — questions from workers, follow-ups awaiting a decision, and Eval candidates to accept, attach, or ignore
- **Conversation-Native Answers**: Results return to the original conversation thread (e.g., a pull request), with Tickets following the threads they opened until close
- **Agent-Guided Setup**: Multi-step setup is driven by a coding agent following SETUP.md, asking one short question at a time, showing the full plan once, then installing and configuring everything

## Use Cases

- **Autonomous Repo Maintenance**: Let an agent own routine coding work on a single repository — fixes, features, and follow-ups — landing as pull requests
- **Team Agent Operation**: Run an agent that serves a whole team while respecting who may start work and what each work item may include
- **Super-Agent Research**: Reference implementation for studying autonomous agent systems — intake, evaluation, execution, and authorization boundaries
- **Attentive Workflow Experiments**: Prototype "least attention, most value" agent workflows where the agent interrupts people only when necessary

## Technical Highlights

- **Engine as Single Writer**: `Engine` (`src/core/engine.ts`) is the only writer of Triggers, Threads, Decisions, Tickets, and Assignments; all methods are synchronous, each command mutates its aggregates in one transaction, and callers receive only their role's `Pick` of the Engine (`EngineForSources`, `EngineForMainSession`, `EngineForPeople`, `EngineForSettings`, `EngineForExecutor`)
- **Ports-and-Adapters Concurrency**: Ports (`Repositories`, `Policy`, `SourceScope`, `Assessor`, `Executor`, `Outbox`) enqueue external work inside the transaction; adapters perform it only after commit, keeping domain state and side effects consistent
- **Five-Part Engine Decomposition**: Intake, Evals, Tickets, Assignments, and Replies engine parts with strictly one-directional dependencies; imperative command names (`stopTicket`) versus past-tense adapter facts (`assignmentStarted`)
- **Eval Gate and Mandates**: `MasterAssessor` evaluates queued Triggers into Decisions (accept, stop, ignore, unavailable); explicit requests from allowed people versus inferred candidates from bots, with per-Ticket Mandates bounding each Assignment's scope
- **Transactional Outbox**: The Outbox keeps a message's receipt and queues its `reply` effect in one transaction; messages wait while their Source is off and drop when the conversation is gone
- **Pass Loop Runtime**: `Runtime` is the composition root — it locks the state directory, opens the Store, and runs one pass at a time (every two seconds and on demand): due effects first, then `Engine.evaluateDue`
- **Source Plugin Architecture**: GitHub and Feishu are Source plugins injected through the narrow `SourceHost` interface, with a `SourceRegistry` fanning Triggers into the Engine and DeepSeek Harness events driving cards, views, and inbox delivery
- **Subscription Without Authority**: Every message on a subscribed Thread reaches its Tickets as context — bypassing the gate — while granting no new authority; follow-ups are owned by the Ticket's Executor or handed back for fresh Eval
- **Engineering**: TypeScript codebase managed with pnpm; `pnpm check` runs typecheck, tests, and build together
