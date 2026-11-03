---
name: YYLO Benchmark
slug: yylo-benchmark
homepage: https://www.npmjs.com/package/@yylo/benchmark
repo: https://github.com/yylo-dev/yylo-benchmark
license: MIT
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
  - Evaluation
  - AI Agent
  - Sandbox
  - LLM Judge
description: >-
  YYLO Benchmark is the evaluation companion to the YYLO orchestrator — a trusted-host experiment runner for historical
  Ledger tasks, supplied coding prompts, and workflows. Each candidate attempt runs in a fresh repository with default
  exclusions for answer-bearing files, outputs are retained for later re-evaluation with new checks or judges, and
  frozen project/task checklists plus deterministic loss give reproducible comparison rows. It deliberately does not
  choose a winner or combine judge opinions with test results.
author: yylo-dev
ossDate: '2026-08-17'
featured: false
status: tracked
---
## Overview

YYLO Benchmark is a thin trusted-host experiment runner for comparing models, harnesses, and configurations on historical Ledger tasks, supplied coding prompts, and workflows. Reviewed cases produce independent attempts whose outputs are retained; new checks or LLM judges can be applied to those retained outputs at any time, yielding comparison rows without re-running the attempts. It is the separate evaluation entry for the already-listed YYLO orchestrator, filed as its own tool rather than an expansion of the orchestrator entry.

The tool draws a hard line around what it is not: it does not choose a winner or combine judge opinions with test results, and it does not implement a workflow engine, production authority, provider catalog, repair loop, or automatic retry.

## Key Features

- **Fresh-Repository Attempts**: Every independent attempt starts from a fresh repository containing the reviewed pre-solution files — not a linked worktree or cloned future history
- **Retained Outputs, Re-Judged Anytime**: Attempt outputs are retained so different checks or judges (A, B, new ones later) can be applied without re-running candidates
- **Frozen Checklists**: Project- and task-level criteria live in explicit YAML/JSON files — no registry, discovery, weights, inheritance, or overrides — with deterministic loss
- **Answer-Hygiene Exclusions**: Reference solutions, completion responses, hidden checks, and other attempts are never supplied as candidate context; default exclusions cover `.juno_task`, hidden graders, and reference solutions
- **Provenance-Anchored Cases**: `--reference` and `--ledger-task` are optional provenance; the reference must descend from the base and is never copied into candidate input
- **No Winner-Choosing**: Produces comparison rows, not rankings or certifications

## Use Cases

- **Model Comparison on Real Tasks**: Run the same reviewed case across models or harnesses and compare retained outputs
- **Retrospective Evaluation**: Apply new checks or judges to historical attempts without re-running them
- **Checklist-Driven Quality Measurement**: Score attempts against reusable frozen project/task criteria with deterministic loss
- **Workflow Runner Evaluation**: Evaluate ordinary Workflow Runner YAML through delegation on the same case machinery

## Technical Details

- **v3 Record Model**: Case/attempt/evaluation records in the 0.2.x source; old v1/v2 APIs, plan/recover/doctor/regrade commands, and the governed-production boundary retired, with historical plans and evidence left untouched on their pinned implementations
- **Attempt Workspace Hygiene**: Fresh repository per attempt, symlinks and gitlinks rejected unless excluded or materialized in a reviewed input repository; setup and generated dependencies must be in ignore rules; retained output includes tracked files and unignored new files
- **Explicit Context Boundary**: Workspace/context hygiene, not filesystem/account/network isolation — the process inherits host authentication; routing/Git/Pi override environment variables are discarded to avoid accidental inherited sessions
- **Case Preparation Flow**: `yylo-benchmark case draft` asks Ledger for an assisted read-only proposal; `case create` takes `--source`, `--base` (pre-solution commit), `--prompt`, `--exclude`, and `--reviewed`, storing cases outside the source repository
- **Frozen Criteria Files**: `--project-criteria` / `--criteria` accept explicit YAML/JSON with name, version, assumptions, and criteria — deliberately no registry or weight system
- **Runtime Requirements**: Node 20.10+, Git, tar, and POSIX process groups; tests require no paid provider calls; Windows execution unsupported; distributed as `@yylo/benchmark` on npm
