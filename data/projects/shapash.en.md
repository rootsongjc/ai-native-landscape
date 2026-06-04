---
name: Shapash
slug: shapash
homepage: https://maif.github.io/shapash/
repo: https://github.com/maif/shapash
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Application
  - Dev Tools
  - Visualization
description: Generates interactive visual reports to explain machine learning model predictions for stakeholders.
author: MAIF
ossDate: '2020-04-29T07:34:23Z'
featured: false
status: tracked
---

Shapash is an open-source Python library maintained by MAIF that makes machine learning models interpretable through interactive visual reports. It bridges the gap between data science teams and business stakeholders by transforming complex model predictions into clear, shareable explanations built on top of SHAP.

## Key Features

- Generates browser-based interactive reports combining global feature importance with per-prediction local explanations
- Supports exploration of model behavior at any granularity, from dataset-level trends to individual predictions
- Integrates seamlessly with scikit-learn, XGBoost, LightGBM, and other popular ML frameworks
- Provides a user-friendly API that lowers the barrier to performing interpretability analysis
- Renders self-contained HTML reports that can be shared without additional infrastructure

## Use Cases

- Compliance audits and model transparency in regulated industries such as finance and healthcare
- Credit scoring and risk assessment where stakeholders require clear explanation of each prediction
- Pre-deployment model validation by data scientists before promoting models to production
- Communicating prediction rationale to product managers, legal teams, and non-technical stakeholders

## Technical Details

- Built entirely in Python, wrapping SHAP and other explanation backends to compute feature contributions
- Outputs self-contained HTML reports and supports exportable static reports for archiving and auditing
- Designed for lightweight integration into existing feature-engineering pipelines with minimal code changes
- Supports long-term traceability through versioned, shareable report artifacts
