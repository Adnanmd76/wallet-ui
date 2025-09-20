# 🧪 Wallet UI Testing Guide

This document outlines the testing strategy for Wallet UI, including tools, structure, and CI integration.

---

## 🧰 Testing Tools

| Type           | Tool                  |
|----------------|-----------------------|
| Unit Testing   | Jest                  |
| Component Test | React Testing Library |
| E2E Testing    | Cypress (optional)    |
| CI Validation  | GitHub Actions        |

---

## 🧪 Unit Tests

- Located in: `__tests__/components/`  
- Covers:
  - Props validation
  - Render output
  - Event handling

### Example:

```tsx
test('ConnectWalletButton shows address when connected', () => {
  render(<ConnectWalletButton isConnected={true} address="0x123" />);
  expect(screen.getByText(/0x123/)).toBeInTheDocument();
});
🔗 Integration Tests
Located in: __tests__/flows/

Covers:

Wallet connect → balance fetch → transaction flow

Redux state updates

SDK response
npm run test -- --coverage
Output: /coverage/index.html

Target: 90%+ coverage across components and flows
⚙️ CI/CD Testing
Triggered via .github/workflows/main.yml

Runs on every push and pull_request

Steps:

Install dependencies

Run npm run test

Fail build if tests fail

🧪 Test File Structure
Code
__tests__/
├── components/
│   ├── ConnectWalletButton.test.tsx
│   ├── BalanceCard.test.tsx
├── flows/
│   ├── wallet-flow.test.ts
│   ├── transaction-flow.test.ts

📬 Contact for Testing Queries
GitHub: Adnanmd76
Email: adnanmd76@gmail.com
