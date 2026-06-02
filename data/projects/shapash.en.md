---
name: Shapash
slug: shapash
homepage: https://maif.github.io/shapash/
repo: https://github.com/maif/shapash
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - Dev Tools
  - Visualization
description: Generates interactive visual reports to explain machine learning model predictions for stakeholders.
logo: ''
author: MAIF
ossDate: '2020-04-29T07:34:23Z'
featured: false
status: tracked
---

## Overview

Shapash is an open-source Python library maintained by MAIF that makes machine learning models interpretable through interactive visual reports. It bridges the gap between data science teams and business stakeholders by transforming complex model predictions into clear, shareable explanations built on top of SHAP.

## Key Features

Shapash generates browser-based interactive reports that combine global feature importance with per-prediction local explanations, making it easy to explore model behavior at any granularity. It integrates seamlessly with popular ML frameworks including scikit-learn, XGBoost, and LightGBM, and provides a user-friendly API that lowers the barrier to performing interpretability analysis.

## Use Cases

Shapash is ideal for regulated industries such as finance and healthcare where model transparency is required for compliance audits, credit scoring, and risk assessment. Data scientists also use it to validate models before deployment and to communicate prediction rationale to product managers, legal teams, and other non-technical stakeholders.

## Technical Details

Built entirely in Python, Shapash wraps SHAP and other explanation backends to compute feature contributions and renders them as self-contained HTML reports. It is designed for lightweight integration into existing feature-engineering pipelines and supports exportable static reports for archiving, auditing, and long-term traceability.
