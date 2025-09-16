# Copilot Instructions for AI Coding Agents

## Project Overview
- **Wallet UI** is a React-based digital wallet interface, styled with Tailwind CSS.
- Modular structure: UI in `src/components/`, pages in `src/pages/`, smart contracts in `src/contracts/`.
- Backend logic in `server.js` and `stacks-service.js`.
- EJS templates for SSR in `views/`.
- Static assets in `public/` and `src/assets/`.

## Architecture & Data Flow
- **Frontend**: React components (`src/components/`), route pages (`src/pages/`), assets (`src/assets/`).
- **Backend**: Node.js server (`server.js`) exposes APIs and serves EJS views. `stacks-service.js` handles blockchain/wallet logic.
- **Contracts**: `.clar` smart contract files in `src/contracts/`.
- **SSR/Hybrid**: EJS templates in `views/` for wallet pages.
- **Static**: `public/` for manifests, icons, and static files.

## Developer Workflows
- **Install dependencies**: `npm install` (preferred) or `yarn install`
- **Start full-stack dev server**: `npm start` (runs frontend and backend)
- **Run backend only**: `node server.js`
- **Build frontend**: `npm run build`
- **Testing**: `npm test` (Jest, React Testing Library)
- **Generate favicons**: `node scripts/generate-favicon.js`
- **Deploy**: Vercel integration via `vercel.json`

## Conventions & Patterns
- **React**: Functional components, hooks, modular file structure. Place new UI in `src/components/`, new pages in `src/pages/`.
- **Styling**: Tailwind CSS utility classes. Only global CSS is `public/styles.css` for resets.
- **Routing**: React Router for navigation (see `src/pages/`).
- **API**: Use Axios for HTTP requests (see usage in components/pages).
- **Smart Contracts**: `.clar` files in `src/contracts/`; backend interacts via `stacks-service.js`.
- **Icons**: Use `src/assets/logo.svg` and React Icons.
- **SSR**: EJS templates in `views/` for server-rendered wallet pages.

## Integration Points
- **Vercel**: Deployment config in `vercel.json`.
- **CodeSandbox**: Supported; see root for config files.
- **Blockchain**: Interact with smart contracts via `stacks-service.js` and `.clar` files.

## Examples
- **Add a page**: Create React component in `src/pages/`, add route in React Router.
- **Add a contract**: Place `.clar` file in `src/contracts/`, update backend service if needed.
- **Update favicon**: Run `node scripts/generate-favicon.js`, update manifest in `public/`.

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
