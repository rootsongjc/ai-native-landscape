---
name: SkillHub
slug: skillhub
homepage: null
repo: https://github.com/iflytek/skillhub
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
  - Dev Tools
description: >-
  SkillHub is an open-source, enterprise-grade agent skill registry by iFlytek that supports publishing, versioning,
  team namespaces, and RBAC governance for skill packages, deployable on-premise with Docker or Kubernetes.
author: iFlytek
ossDate: '2026-03-11T12:17:05Z'
featured: false
status: tracked
---

## Overview

SkillHub is an open-source, enterprise-grade agent skill registry developed by iFlytek. It provides teams with a private, governed platform for publishing, discovering, and managing reusable agent skill packages. SkillHub supports semantic versioning, team namespaces, RBAC access control, and audit logging, and can be deployed behind the enterprise firewall using Docker or Kubernetes to ensure data sovereignty and compliance.

## Key Features

- Self-hosted deployment: supports Docker and Kubernetes, keeping skill packages inside the enterprise firewall for full data sovereignty.
- Publish and versioning: semantic versioning, custom tags (beta, stable), and automatic latest tracking.
- Skill discovery: full-text search with filters by namespace, downloads, ratings, and recency.
- Team namespaces: organize skills under team or global scopes, with per-namespace members and roles (Owner/Admin/Member).
- Review and governance: team admins review within namespaces, platform admins control global promotions, all governance actions are audit-logged.
- CLI tools: native REST API plus a compatibility layer for ClawHub-style registry clients.
- Pluggable storage: local filesystem for development, S3/MinIO for production, switchable via configuration.
- Internationalization: multi-language support based on i18next.

## Use Cases

- Centralized management and distribution of agent skills within an enterprise, ensuring quality and compliance.
- Serving as a skill registry and installation backend for agent platforms such as OpenClaw, AstronClaw, and Loomy.
- Enabling tiered governance of skills through namespaces and role-based access control in team collaboration.
- Large-scale Kubernetes deployment providing independent skill repositories for multiple teams.

## Technical Highlights

- Backend built with Spring Boot 3.2.3 and Java 21, multi-module Maven project using PostgreSQL 16 and Redis 7.
- Frontend based on React 19, TypeScript, and Vite, using TanStack Router/Query, Tailwind CSS, and Radix UI.
- Includes a Prometheus + Grafana monitoring stack and Kubernetes deployment manifests.
- Licensed under Apache License 2.0.
