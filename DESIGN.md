---
version: alpha
name: AI Native Landscape
description: >-
  Visual identity for landscape.jimmysong.io, a bilingual (zh/en) static
  catalog of AI open-source projects with scoring, search, filtering, and a
  CNCF-style landscape map.
colors:
  primary: "#17639b"
  on-primary: "#ffffff"
  primary-soft: "#e6eff7"
  bg: "#f5f7fa"
  surface: "#ffffff"
  surface-soft: "#edf1f5"
  text: "#141c28"
  muted: "#4f5c6e"
  border: "#d6dde5"
  ok: "#24744f"
  warn: "#8f5a13"
  dark:
    primary: "#85b9e8"
    on-primary: "#111821"
    primary-soft: "#202e3b"
    bg: "#0d1117"
    surface: "#151a22"
    surface-soft: "#202732"
    text: "#e9edf4"
    muted: "#a9b5c3"
    border: "#303946"
    ok: "#80c4a0"
    warn: "#d8b274"
  brand:
    blue: "#1f7ff0"
    sky: "#5aa9ff"
    amber: "#f59e0b"
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.02em
  headline:
    fontFamily: IBM Plex Sans
    fontSize: 1.32rem
    fontWeight: 600
    lineHeight: 1.3
  title:
    fontFamily: IBM Plex Sans
    fontSize: 1.02rem
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: IBM Plex Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 0.9rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: IBM Plex Sans
    fontSize: 0.82rem
    fontWeight: 500
    lineHeight: 1.45
  caption:
    fontFamily: IBM Plex Sans
    fontSize: 0.76rem
    fontWeight: 400
    lineHeight: 1.45
  code:
    fontFamily: ui-monospace
    fontSize: 0.82rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 6px
  md: 10px
  lg: 14px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  gutter: 16px
  container: 1380px
  tile: 36px
components:
  page:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
  page-dark:
    backgroundColor: "{colors.dark.bg}"
    textColor: "{colors.dark.text}"
  site-header:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    padding: 12px
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  divider-dark:
    backgroundColor: "{colors.dark.border}"
    height: 1px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    height: 44px
    padding: 16px
  button-primary-dark:
    backgroundColor: "{colors.dark.primary}"
    textColor: "{colors.dark.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    height: 44px
    padding: 16px
  button-secondary-dark:
    backgroundColor: "{colors.dark.surface-soft}"
    textColor: "{colors.dark.primary}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 14px
  card-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.text}"
  card-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  card-meta-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.muted}"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 8px
  filter-active:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
  filter-active-dark:
    backgroundColor: "{colors.dark.primary-soft}"
    textColor: "{colors.dark.primary}"
  input:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.text}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    height: 44px
    padding: 12px
  status-ok:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ok}"
    typography: "{typography.label}"
  status-ok-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.ok}"
  status-warn:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.warn}"
    typography: "{typography.label}"
  status-warn-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.warn}"
  map-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    size: "{spacing.tile}"
  logo-block-tall:
    backgroundColor: "{colors.brand.blue}"
  logo-block-top:
    backgroundColor: "{colors.brand.sky}"
  logo-block-bottom:
    backgroundColor: "{colors.brand.amber}"
---

## Overview

AI Native Landscape is a dense, data-first reference site. It should read like a
well-kept engineering index: calm, neutral, and scannable, with one blue accent
that marks what is interactive. Hundreds of projects share a page, so chrome is
kept quiet and the content — names, logos, scores, tags — carries the visual
weight.

The site is fully static (Astro), bilingual (zh/en), and ships a light and a
dark theme with identical structure. Tokens are implemented as CSS custom
properties in `src/styles/global.css`; this file is the source of intent, that
file is the source of values at runtime.

## Colors

A cool gray-blue neutral ramp plus a single accent. The `colors.dark.*` group
mirrors every light token and is applied through `html[data-theme='dark']`.

| Token | CSS variable | Role |
|:------|:-------------|:-----|
| `primary` | `--accent` | Links, primary buttons, focus ring, active filters |
| `on-primary` | `--accent-contrast` | Text and icons on `primary` |
| `primary-soft` | `--accent-soft` | Selected and hover tint behind accent text |
| `bg` | `--bg` | Page canvas and sticky header |
| `surface` | `--surface` | Cards, panels, popovers, logo tiles |
| `surface-soft` | `--surface-soft` | Inputs, inset areas, subtle hover fills |
| `text` | `--text` | Headings and body copy |
| `muted` | `--muted` | Metadata, captions, secondary labels |
| `border` | `--border` | 1px hairlines around every surface |
| `ok` | `--ok` | Healthy / active status, positive score deltas |
| `warn` | `--warn` | Inactive, archived, or stale-data warnings |

Every text/background pair in the component tokens meets WCAG AA (4.5:1) in
both themes. Status colors are always paired with a text label, never used as
the only signal.

Two fixed palettes sit outside the theme ramp and do not change in dark mode:

- **Brand mark** — `colors.brand.*`. The logo is three rounded blocks, a tall
  `blue` one beside `sky` over `amber`, echoing the landscape map's nested
  boxes. These colors belong to the logo, favicon, and social images only;
  UI controls keep using `primary`.
- **Status dots** — small categorical dots for a project's reference status
  (graduated, incubating, sandbox, archived, inactive, unavailable, and so
  on) use hard-coded hues defined next to `.status-dot--*` in
  `src/styles/global.css`. Reuse those; do not invent new ones.

## Typography

One family, IBM Plex Sans (falling back to Source Sans 3, Segoe UI, then
system sans), with `font-variant-numeric: tabular-nums` set globally so stars,
scores, and counts align in columns. CJK text falls through to the system font.

- **display** — the largest page headline (category pages); other page
  titles step down from it, and the homepage has no hero headline at all.
- **headline** — section headings.
- **title** — card titles and button labels.
- **body / body-sm** — prose and descriptions.
- **label / caption** — metadata rows, tags, filter chips; the most common
  sizes on the page.
- **code** — slugs, keyboard hints, and install snippets in the system
  monospace stack.

Weight is the hierarchy tool: 600 for headings and emphasis, 500 for labels,
400 for everything else. Avoid italics and weights above 600.

## Layout

Content sits in a centered column capped at `spacing.container` (1380px) with
`spacing.gutter` (16px) on each side. Spacing follows a 4px rhythm; 8px and
12px gaps dominate inside components, 16–24px separates groups, and 32–48px
separates page sections.

The homepage opens directly on the landscape map with no hero: a single
heading row carries the title, the catalog counts (projects, categories,
tomb), and the submit link in `label` size, then the map itself.

The landscape map nests category boxes → subcategory boxes → square logo tiles
(`spacing.tile`, 36px, with a 4px gap; 30px on narrow screens). The list view
is a responsive card grid. Layouts collapse to a single column at 720px and
simplify at 1100px. The header is sticky and stays on the page canvas color.

## Elevation & Depth

Depth is expressed with borders and tonal steps, not shadows. Surfaces sit on
the canvas with a 1px `border` hairline and at most a barely-there
`0 1px 3px rgba(20, 28, 40, 0.05)` shadow in light mode; dark mode uses no
shadow at all. The stack is `bg` → `surface` → `surface-soft` (inset). Only
transient layers — popovers, the search modal, tooltips — may float above
content.

## Shapes

Soft but not playful. `rounded.lg` (14px, `--radius`) for cards and panels,
`rounded.md` (10px) for buttons, inputs, and filter controls, `rounded.sm`
(6px) for logo tiles and small inline elements, and `rounded.full` for tags
and pills. Nested shapes always use a smaller radius than their container.

## Motion

Motion is functional and brief. Hover and focus changes on color, border, and
background run for 150ms with `ease`; theme-aware color fades run for
200ms. Popovers and tooltips fade with a few pixels of
translation. Nothing loops, bounces, or delays reading, and all transitions
should be disabled under `prefers-reduced-motion`.

## Voice & Content Strategy

Neutral, factual, and compact — a catalog, not a pitch. Describe what a
project does in one sentence, without superlatives. Numbers are shown as data
(stars, scores 0–100, dates) with tier labels: Must Watch, Strong
Recommendation, Recommendation, Worth Watching, General. Every user-facing
string exists in both Chinese and English with equivalent meaning; project and
product names are never translated.

## Components

- **Buttons** — `button-primary` for the single main action in a view,
  `button-secondary` (outlined in `primary`) for everything else. Both are
  44px tall for touch targets.
- **Cards** — `card` holds a project: logo, `title` name, `body-sm`
  description, a `card-meta` row, and `tag` pills. Hover changes the border
  color, not the elevation.
- **Tags** — `tag` pills are bordered, muted, and non-interactive by default.
- **Filters and toolbar** — `input` for search and selects; the current
  selection uses `filter-active`.
- **Status** — `status-ok` and `status-warn` color the label text for project
  health and data freshness.
- **Landscape map** — `map-tile` is a square logo tile on `surface`; search
  matches are highlighted and non-matches dimmed.
- **Header and dividers** — `site-header` is sticky on `bg`, separated by a
  `divider` hairline.
- **Logo** — `logo-block-tall`, `logo-block-top`, and `logo-block-bottom` are
  the three blocks of the brand mark, drawn as inline SVG in the header and
  footer and shipped as `public/favicon.svg`.

Each `*-dark` entry lists only the properties that change in the dark theme.
Focus is always a 2px `primary` outline with a 3px offset.

## Do's and Don'ts

- Do use `primary` only for interactive or selected elements.
- Do keep every surface bordered with the `border` hairline.
- Do verify new color pairs at WCAG AA in both light and dark themes.
- Do reference the CSS custom properties rather than hard-coding hex values.
- Do keep numeric columns aligned with tabular figures.
- Don't introduce a second accent hue, gradients, or decorative shadows in
  the UI; the brand mark and status dots are the only fixed-color exceptions.
- Don't recolor the brand mark to follow the theme.
- Don't rely on color alone to communicate status.
- Don't add a client-side UI framework or animation library; interactivity is
  vanilla JS inside Astro components.
- Don't ship a string in only one language.
