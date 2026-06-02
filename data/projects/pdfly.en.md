---
name: pdfly
slug: pdfly
homepage: https://pdfly.readthedocs.io
repo: https://github.com/py-pdf/pdfly
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Application
  - CLI
  - Dev Tools
description: A command-line tool to extract (meta)data from PDFs and manipulate PDF files at scale.
logo: ''
author: py-pdf
ossDate: '2022-04-09T20:49:42Z'
featured: false
status: tracked
---

## Overview

pdfly is a lightweight CLI tool for extracting metadata from PDFs and performing common PDF manipulations at scale. It provides scriptable commands that fit naturally into automation pipelines, CI jobs, and batch-processing workflows, making it straightforward to integrate PDF operations without writing custom parsing code.

## Key Features

- Fast extraction of document metadata, text content, and structured information from one or many PDFs in a single command.
- Batch-oriented CLI designed for scripting and unattended execution in CI/CD or data pipelines.
- Configurable output formats and processing options that adapt to different archival, indexing, or analysis needs.

## Use Cases

Teams processing large document archives can use pdfly to extract and index metadata across thousands of PDFs automatically. It also serves post-OCR cleanup workflows and automated data extraction pipelines where PDFs need to be inspected or transformed before downstream analysis.

## Technical Details

Built in Python on top of proven PDF parsing libraries, pdfly exposes both a CLI and programmatic APIs for flexibility. It is released under the BSD-3-Clause license, with source code and documentation hosted on GitHub and Read the Docs.
