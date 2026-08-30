---
name: Omarchy
slug: omarchy
homepage: https://omarchy.org
repo: https://github.com/omacom/omarchy
license: MIT
category: coding-devtools
subCategory: developer-utilities
tags:
  - Linux
  - Arch Linux
  - Desktop Environment
  - Developer Environment
  - Coding Agent
  - Hyprland
  - Wayland
description: An opinionated Arch Linux desktop by DHH built on the Hyprland Wayland compositor, treating AI coding agents as first-class citizens with pre-wired agent launchers, subscription usage tracking, and crash diagnosis.
author: DHH (omacom)
ossDate: '2025-06-01T07:26:22Z'
featured: false
status: tracked
---

## Overview

Omarchy is a beautiful, modern, and opinionated Linux distribution created by David Heinemeier Hansson (DHH). It turns a bare Arch Linux base into a polished tiling desktop built around the Hyprland Wayland compositor, aiming to give developers a zero-fiddling workstation that rivals the macOS experience. Notably, it treats AI coding agents as first-class citizens of the desktop rather than afterthoughts.

## Key Features

- Agent-neutral coding CLI support: Claude Code, Codex, OpenCode, Copilot CLI, Crush, Grok, Pi, Oh My Pi, Antigravity, and Ori ship as pre-wired lazy-loaded launchers, with a pickable default agent launched via a global hotkey.
- Agents panel in the top bar that tracks subscription plans, 5-hour/weekly limit consumption, and token usage by day and model across machines.
- Automated crash diagnosis: watches systemd-coredump and hands crashes to your default agent along with a built-in diagnose-crash skill.
- Ships an Omarchy agent skill (symlinked into Claude Code, Codex, Pi, and Antigravity skill directories) so agents can tweak Hyprland config, the bar, and themes themselves.
- Full installer with default disk encryption, dual-boot/free-space installs, unattended fleet installs, and bootable system snapshots on every update.
- Curated application set with terminals (Alacritty, Kitty, Foot, Ghostty), Neovim, lazygit, tmux, and a theme system that syncs to agent UIs.

## Use Cases

- A ready-out-of-the-box Linux workstation for developers migrating from Mac or Windows who want a tiling Wayland desktop without Arch setup pain.
- A unified environment for running multiple AI coding agents side by side, with shared themes, usage dashboards, and agent-driven system configuration.
- A repeatable base image for VMs and fleet machines via unattended installs from a configuration drive.

## Technical Details

- Built on Arch Linux with the Hyprland Wayland compositor; configuration is assembled from versioned config trees in the repo (`config/hypr`, terminal, shell, and application configs) rather than hand-edited dotfiles.
- Agent CLIs are mise-managed stubs in `~/.local/bin` that download on first run and stay current via `omarchy update`; new ones wrap with `omarchy-mise-install <package> [command-name]`.
- The agents usage panel regenerates records every 15 minutes via `omarchy agent usage-update` and can merge usage from other machines through a synced folder.
- Crash watching hooks systemd-coredump: notifications invoke the default agent with the diagnose-crash skill; per-program muting via `omarchy crash mute`.
- System snapshots are created automatically on every update and boot/restored through the Limine boot loader, restoring the root filesystem while preserving `/home`.
- The ISO installer defaults to full-disk encryption, supports free-space dual-boot installs, and can run fully unattended from a second configuration drive.
