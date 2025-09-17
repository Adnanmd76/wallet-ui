# ⚙️ CI/CD Status & Workflow Guide

This document defines the CI/CD setup and current pipelines for **Wallet UI** using GitHub Actions.  
It ensures quality, stability, and reliable deployments.

---

## 📊 Status Badges

| Workflow          | Status                                                                 |
|-------------------|------------------------------------------------------------------------|
| Build & Test      | ![Build](https://img.shields.io/github/actions/workflow/status/Adnanmd76/wallet-ui/main.yml?branch=main) |
| License           | ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) |
| React Version     | ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react) |
| Lint & Test       | ![CI](https://github.com/Adnanmd76/wallet-ui/actions/workflows/ci.yml/badge.svg) |
| Build & Deploy    | ![Deploy](https://github.com/Adnanmd76/wallet-ui/actions/workflows/deploy.yml/badge.svg) |

---

## ✅ Current Pipelines

- **Linting & Formatting** → Runs on every push and PR  
- **Unit Tests (Jest)** → Executes UI component tests  
- **Build Check** → Ensures project builds successfully in dev/prod  
- **E2E Tests (Cypress)** → Validates critical flows (login, wallet transfer, etc.)  

---

## 🛠 Workflow Files

- `/.github/workflows/ci.yml` → Lint & Test workflow  
- `/.github/workflows/deploy.yml` → Build & Deploy workflow  
- `/.github/workflows/main.yml` → Build & Test (shields badge integration)  

---

## 📝 Notes

- All PRs must pass **linting, unit tests, and build** before merge.  
- E2E tests are optional but recommended before release.  
- Pipelines must be fixed **before merging into `main`**.  

---

## 🔗 References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)  
- [Cypress Documentation](https://www.cypress.io/)  
- [Jest Testing](https://jestjs.io/)  
- [Shields.io Badges](https://shields.io/)
- 
