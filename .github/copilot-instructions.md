# Copilot Instructions for AI Coding Agents

## Project Overview
- **Wallet UI** is a React-based, modern digital wallet interface using Tailwind CSS for styling.
- The app is structured for modularity: UI components in `src/components/`, pages in `src/pages/`, and contract files in `src/contracts/`.
- Backend service logic is in `server.js` and `stacks-service.js`.
- Views for server-side rendering are in `views/` (e.g., `wallet.ejs`).
- Static assets and public files are in `public/` and `src/assets/`.

## Architecture & Data Flow
- **Frontend**: React components (see `src/components/`), pages (see `src/pages/`), and assets (see `src/assets/`).
- **Backend**: Node.js server (`server.js`) handles API requests and serves views. `stacks-service.js` may provide blockchain or wallet-related services.
- **Contracts**: Smart contract code is in `src/contracts/` (e.g., `hello-world.clar`).
- **Views**: EJS templates in `views/` for SSR or hybrid rendering.
- **Public**: `public/` contains static files, manifests, and icons.

## Developer Workflows
- **Install dependencies**: `npm install` or `yarn install`
- **Start development server**: `npm start` or `node server.js`
- **Build for production**: `npm run build`
- **Run backend only**: `node server.js`
- **Generate favicons**: `node scripts/generate-favicon.js`
- **Testing**: Use `npm test` (Jest, React Testing Library)
- **Deploy**: Vercel integration via `vercel.json` (see Vercel docs)

## Conventions & Patterns
- **React**: Functional components, hooks for state management, modular file structure.
- **Styling**: Tailwind CSS utility classes, no global CSS except for resets in `public/styles.css`.
- **Routing**: React Router (see `src/pages/` for route components).
- **API**: Use Axios for HTTP requests; see examples in components/pages.
- **Smart Contracts**: `.clar` files in `src/contracts/` for blockchain logic.
- **Icons**: Use `src/assets/logo.svg` and React Icons for UI.
- **SSR/Hybrid**: EJS templates in `views/` for server-rendered wallet pages.

## Integration Points
- **Vercel**: Deployment config in `vercel.json`.
- **CodeSandbox**: Integration supported (see repo root for config files).
- **Blockchain**: Interact with smart contracts via `stacks-service.js` and `.clar` files.

## Examples
- To add a new page: create a React component in `src/pages/`, add route in React Router.
- To add a new contract: place `.clar` file in `src/contracts/`, update backend service if needed.
- To update favicon: run `node scripts/generate-favicon.js` and update manifest in `public/`.

## Key Files & Directories
- `src/components/` — UI components
- `src/pages/` — Route/page components
- `src/contracts/` — Smart contracts
- `server.js` — Node.js backend
- `stacks-service.js` — Blockchain/wallet service
- `views/` — EJS templates
- `public/` — Static files, manifests, icons
- `scripts/` — Utility scripts

---
_If any section is unclear or missing, please provide feedback for further refinement._
