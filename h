[33me1efe17[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m echo '### Pull Request کا ٹائٹل ###  Fix: Update and Correct Project Dependencies   ### Pull Request کی تفصیل ###  This PR fixes the project setup by:  1.  Correcting the invalid syntax in `package.json`. 2.  Adding all the required Web3 and UI dependencies (`@wagmi`, `@walletconnect`, `ethers`, `tailwindcss`, etc.) to make the project installable.  This resolves the `npm install` failure. ' > PR_DETAILS.txt (#118)
[33mbe90b25[m[33m ([m[1;31morigin/git-checkout--b-fix/project-setup[m[33m)[m git commit -m "fix(deps): Correct package.json syntax and add all web3 dependencies"
[33mf5920bd[m Add useWallet.ts hook to manage wallet address, balance, and chainId (#117)
[33m5343a8e[m[33m ([m[1;31morigin/feature/services-usewallet[m[33m)[m feat(services): add useWallet.ts hook for wallet state management
[33mc8df7f0[m Add api.ts to handle login, profile fetch, and logout (#116)
[33me9bf7ab[m[33m ([m[1;31morigin/feature/services-api[m[33m)[m feat(services): add api.ts for backend authentication and user profile
[33md600086[m Add txService.ts to handle ETH transactions and gas estimation (#115)
[33m3534199[m[33m ([m[1;31morigin/feature/services-tx-service[m[33m)[m feat(services): add txService.ts for ETH transfers and gas estimation
[33m4c5a94a[m feat(services): add tokenService.ts for ERC-20 balance, transfer, and… (#114)
[33m929db3b[m feat(services): add tokenService.ts for ERC-20 balance, transfer, and… (#113)
[33m9b79b4b[m[33m ([m[1;31morigin/feature/walletconnect-v2[m[33m)[m feat(services): add tokenService.ts for ERC-20 balance, transfer, and approval
[33m728cb6e[m[33m ([m[1;31morigin/feature/services-token-service[m[33m)[m feat(services): add tokenService.ts for ERC-20 balance, transfer, and approval
[33m2b16ce9[m Add keyManager.ts to handle wallet creation, encryption, and decryption (#112)
[33m268e80e[m[33m ([m[1;31morigin/feature/services-keymanager[m[33m)[m feat(services): add keyManager.ts for wallet generation and encryption
[33m5e904ef[m Delete src/services (#111)
[33mde6a865[m[33m ([m[1;31morigin/Adnanmd76-patch-19[m[33m)[m Delete src/services
[33m2dd1442[m 🔥 Removed duplicate root-level stacks-service file (#110)
[33mccf6555[m[33m ([m[1;31morigin/Adnanmd76-patch-18[m[33m)[m 🔥 Removed duplicate root-level stacks-service file
[33m40ccd6d[m Create tailwind.config.js (#109)
[33m338ffcc[m[33m ([m[1;31morigin/Adnanmd76-patch-17[m[33m)[m Create tailwind.config.js
[33mdda9a43[m Add TransactionModal component to enable ETH transfers via wallet (#108)
[33m5248ddd[m[33m ([m[1;31morigin/feature/ui-transaction-modal[m[33m)[m feat(ui): add TransactionModal component for ETH transfers
[33m80bee8c[m Integrate NetworkToggle into WalletControls for dynamic mainnet/testnet switching (#107)
[33m9cb2c96[m[33m ([m[1;31morigin/feature/ui-walletcontrols-network[m[33m)[m feat(ui): connect NetworkToggle to WalletControls and pass network to useWallet
[33m4fcbfd5[m Add network toggle support to provider.ts for mainnet/testnet RPC resolution (#106)
[33m45dfcfb[m[33m ([m[1;31morigin/feature/web3-provider-network-toggle[m[33m)[m feat(web3): extend provider.ts to support mainnet/testnet toggle per chain
[33me2000cb[m Add NetworkToggle component for mainnet/testnet switch and RPC status (#105)
[33m234039d[m[33m ([m[1;31morigin/feature/ui-network-toggle[m[33m)[m feat(ui): add NetworkToggle component with RPC health check
[33m729fe18[m Add WalletControls component with chain selector and WalletConnect toggle (#104)
[33m36b740d[m[33m ([m[1;31morigin/feature/ui-wallet-controls[m[33m)[m feat(ui): add WalletControls component for chain selection and WalletConnect toggle
[33mbb5dd76[m Enhance WalletStatus component to show wallet balance and chain ID (#103)
[33mf29cb05[m[33m ([m[1;31morigin/feature/ui-walletstatus-enhancement[m[33m)[m feat(ui): update WalletStatus.tsx to display balance and chain ID
[33m6ecd54c[m Enhance useWallet hook with chain selection and WalletConnect support (#102)
[33m9205b77[m[33m ([m[1;31morigin/feature/web3-hooks-walletconnect[m[33m)[m feat(web3): update useWallet hook to support chain and WalletConnect options
[33m4363781[m Refactor provider.ts to use getWalletConnectProvider for v2 support (#101)
[33m9599f9a[m[33m ([m[1;31morigin/feature/web3-provider-walletconnect[m[33m)[m feat(web3): integrate WalletConnect abstraction into provider.ts
[33mf5c06da[m Add WalletConnect v2 abstraction module in src/web3/walletconnect.ts (#100)
[33m5f4e115[m[33m ([m[1;31morigin/feature/web3-walletconnect[m[33m)[m feat(web3): add walletconnect.ts for WalletConnect v2 provider abstraction
[33mea15a2d[m Add environment variables for default chain and RPC endpoints (#99)
[33mc3fda55[m[33m ([m[1;31morigin/feature/web3-env-setup[m[33m)[m chore(env): add default chain and RPC URLs to .env
[33mb03e0b7[m Add multi-chain Web3 provider with JSON-RPC, injected wallets, and WalletConnect v2 (#98)
[33m54b1bce[m[33m ([m[1;31morigin/feature/web3-multichain-provider[m[33m)[m feat(web3): add multi-chain provider support with fallback and WalletConnect toggle
[33m207c3d7[m Extend useWallet Hook to Fetch Balance and Chain Info (#97)
[33mf7ec4ce[m[33m ([m[1;31morigin/feature/web3-wallet-balance-chain[m[33m)[m feat(web3): extend useWallet hook to include balance and chain ID
[33m3b499b3[m Integrate Web3 Wallet Components into Dashboard Page (#96)
[33m90d5151[m[33m ([m[1;31morigin/feature/web3-dashboard-integration[m[33m)[m feat(web3): render wallet connection components in dashboard page
[33m59323b0[m Add WalletStatus Component to Show Connected Wallet Address (#95)
[33m4ef44a8[m[33m ([m[1;31morigin/feature/web3-wallet-status[m[33m)[m feat(web3): add WalletStatus component to display connected wallet address
[33m087aee7[m Add WalletConnectButton Component for Web3 Wallet Status (#94)
[33me5aa12b[m[33m ([m[1;31morigin/feature/web3-connect-button[m[33m)[m feat(web3): add WalletConnectButton component to display wallet status
[33mccc96dd[m Add useWallet Hook for Web3 Wallet Connection (#93)
[33ma78be29[m[33m ([m[1;31morigin/feature/web3-wallet-hook[m[33m)[m feat(web3): add useWallet hook for managing wallet connection state
[33m738fd59[m Add Web3 Provider Setup Using Ethers.js (#92)
[33m39123c4[m[33m ([m[1;31morigin/feature/web3-provider-setup[m[33m)[m Update README with demo video and complete documentation`
[33mec77f8c[m  -m "feat: Implement basic wallet UI with balance, deposit, withdraw, and history" (#91)
[33m4265614[m[33m ([m[1;31morigin/Adnanmd76-patch-16[m[33m)[m Update index.html
[33mf83e999[m "feat: Implement basic wallet UI with balance (#90)
[33m877e065[m[33m ([m[1;31morigin/Adnanmd76-patch-15[m[33m)[m "feat: Implement basic wallet UI with balance
[33mcd2d1ec[m Merge pull request #89 from Adnanmd76/feature/update-index-navigation
[33m9cb0674[m[33m ([m[1;31morigin/feature/update-index-navigation[m[33m)[m feat: add navigation link to wallet balance page in index.ejs
[33m52c333c[m Merge pull request #88 from Adnanmd76/feature/wallet-styles
[33m27c38ac[m[33m ([m[1;31morigin/feature/wallet-styles[m[33m)[m feat: add public/styles.css for wallet balance view styling
[33m375d32a[m Merge pull request #87 from Adnanmd76/feature/wallet-balance-view
[33mc868588[m[33m ([m[1;31morigin/feature/wallet-balance-view[m[33m)[m feat: update wallet.ejs view for balance checker
[33me46ce94[m Merge pull request #86 from Adnanmd76/feature/contract-abi-support
[33m428b585[m[33m ([m[1;31morigin/feature/contract-abi-support[m[33m)[m feat: add TokenABI.json for Ethereum smart contract interaction
[33mfcd8e8d[m Merge pull request #85 from Adnanmd76/chore/server-wallet-integration
[33mcdab6c3[m[33m ([m[1;31morigin/chore/server-wallet-integration[m[33m)[m chore: integrate walletRoutes into server.js for blockchain API access
[33m70744dc[m Merge pull request #84 from Adnanmd76/feature/wallet-routes-endpoints
[33mb38a357[m[33m ([m[1;31morigin/feature/wallet-routes-endpoints[m[33m)[m feat: add walletRoutes.js to expose blockchain balance endpoints for ETH, BTC, and SOL
[33m0a99a60[m Merge pull request #83 from Adnanmd76/Adnanmd76-patch-14
[33m61d71a1[m[33m ([m[1;31morigin/Adnanmd76-patch-14[m[33m)[m feat: add blockchainService.js to support Ethereum, Bitcoin, and Solana balance queries
[33m7568a2e[m Merge pull request #82 from Adnanmd76/Adnanmd76-patch-13
[33mdab3076[m[33m ([m[1;31morigin/Adnanmd76-patch-13[m[33m)[m Create setup-wallet-ui.sh
[33m2076577[m Merge pull request #81 from Adnanmd76/contracts/say-hi.clar
[33m3469a55[m[33m ([m[1;31morigin/contracts/say-hi.clar[m[33m)[m git add contracts/say-hi.clar git commit -m "Add say-hi contract for Devnet and Hero Wallet integration"
[33m918c8b1[m Merge pull request #80 from Adnanmd76/Adnanmd76-patch-12
[33m09fda83[m[33m ([m[1;31morigin/Adnanmd76-patch-12[m[33m)[m Update hello.clar
[33m29d0730[m Merge pull request #79 from Adnanmd76/Adnanmd76-patch-11
[33m99c67d3[m[33m ([m[1;31morigin/Adnanmd76-patch-11[m[33m)[m Create Clarinet
[33mdf8f8c3[m Merge pull request #78 from Adnanmd76/Adnanmd76-patch-10
[33mac44343[m[33m ([m[1;31morigin/Adnanmd76-patch-10[m[33m)[m Create hello.clar
[33m797d783[m Merge pull request #77 from Adnanmd76/docs/index-summary
[33mcd2355d[m[33m ([m[1;31morigin/docs/index-summary[m[33m)[m docs(index): add documentation index for easy navigation
[33m1d3ee03[m Merge pull request #76 from Adnanmd76/docs/env-config
[33m1053e9b[m[33m ([m[1;31morigin/docs/env-config[m[33m)[m docs(config): add environment variable and secrets setup guide
[33m8ee8b72[m Merge pull request #75 from Adnanmd76/docs/license-summary
[33mdebc589[m Merge pull request #74 from Adnanmd76/docs/license-summary-1
[33meed28b2[m[33m ([m[1;31morigin/docs/license-summary-1[m[33m)[m docs(license): add human-readable MIT license summary
[33meeba4ca[m[33m ([m[1;31morigin/docs/license-summary[m[33m)[m docs(license): add human-readable MIT license summary
[33ma7a12bb[m Merge pull request #73 from Adnanmd76/docs/localization-guide
[33m3653d24[m[33m ([m[1;31morigin/docs/localization-guide[m[33m)[m docs(localization): add multi-language and RTL support documentation
[33meb6f968[m Merge pull request #72 from Adnanmd76/docs/contribution-checklist
[33m4a099c5[m[33m ([m[1;31morigin/docs/contribution-checklist[m[33m)[m add contribution checklist for new collaborators
[33mc406c00[m Merge pull request #70 from Adnanmd76/Adnanmd76-patch-9
[33m828172c[m add testing strategy and CI validation guide
[33m9df4a22[m Merge pull request #69 from Adnanmd76/chore/deploy-script
[33m6ec336e[m[33m ([m[1;31morigin/chore/deploy-script[m[33m)[m add production deploy script for Wallet UI
[33m3126423[m Merge pull request #68 from Adnanmd76/Adnanmd76-patch-8
[33m51a6899[m[33m ([m[1;31morigin/Adnanmd76-patch-8[m[33m)[m Create README-template.md
[33m1701d52[m Merge pull request #67 from Adnanmd76/docs/ci-status
[33mbbc6754[m[33m ([m[1;31morigin/docs/ci-status[m[33m)[m add CI/CD status and workflow guide in docs/ci-status.md
[33mc1a4b1d[m Merge pull request #66 from Adnanmd76/Adnanmd76-patch-7
[33m8ad4d03[m[33m ([m[1;31morigin/Adnanmd76-patch-7[m[33m)[m Update branding-guide.md
[33m12ac49b[m Merge pull request #65 from Adnanmd76/Adnanmd76-patch-6
[33m6407eec[m[33m ([m[1;31morigin/Adnanmd76-patch-6[m[33m)[m add branding-guide.md with logo, color, and typography rules
[33m572d389[m Merge pull request #64 from Adnanmd76/Adnanmd76-patch-5
[33m0382f6f[m[33m ([m[1;31morigin/Adnanmd76-patch-5[m[33m)[m add CHANGELOG.md with version history and updates
[33mf792b9e[m Merge pull request #63 from Adnanmd76/Adnanmd76-patch-4
[33m24fbacd[m[33m ([m[1;31morigin/Adnanmd76-patch-4[m[33m)[m add setup-dev.sh for local development automation
[33m534992a[m Merge pull request #62 from Adnanmd76/Adnanmd76-patch-3
[33mf8d4d79[m[33m ([m[1;31morigin/Adnanmd76-patch-3[m[33m)[m add UI component Wallet UI
[33mdc44100[m Merge pull request #61 from Adnanmd76/Adnanmd76-patch-2
[33m0361b8f[m[33m ([m[1;31morigin/Adnanmd76-patch-2[m[33m)[m enhance documentation with detailed examples and structure
[33m874350d[m Merge pull request #60 from Adnanmd76/Enhance-Project-Documentation
[33m0b650d8[m[33m ([m[1;31morigin/Enhance-Project-Documentation[m[33m)[m enhance documentation with detailed examples and structure
[33m9057a58[m[33m ([m[1;31morigin/docs/detailed-guides[m[33m)[m Merge pull request #59 from Adnanmd76/Adnanmd76-patch-1
[33m02d1c3f[m[33m ([m[1;31morigin/Adnanmd76-patch-1[m[33m)[m docs(readme): complete rewrite with full feature list and Crypto SDK integration
[33m85f43b2[m Merge pull request #58 from Adnanmd76/git-checkout--b-feature/your-feature-name
[33mb1c0cb7[m[33m ([m[1;31morigin/git-checkout--b-feature/your-feature-name[m[33m)[m git commit -m "feat: add your feature"
[33mdc1cc28[m Merge pull request #57 from Adnanmd76/ci/setup-github-actions
[33mc13d747[m[33m ([m[1;31morigin/ci/setup-github-actions[m[33m)[m ci(actions): add GitHub Actions workflow for build and test
[33m2680a3c[m Merge pull request #56 from Adnanmd76/docs/full-readme-update
[33m608ca62[m[33m ([m[1;31morigin/docs/full-readme-update[m[33m)[m complete rewrite with full feature list and Crypto SDK integration
[33md1ced4d[m Merge pull request #55 from Adnanmd76/docs/sdk-readme-update
[33mc0c5304[m[33m ([m[1;31morigin/docs/sdk-readme-update[m[33m)[m ---  ##add Crypto SDK integration details and usage examples
[33m6d9fba5[m Merge pull request #54 from Adnanmd76/feature/sdk-encryption-module
[33m3163b7b[m[33m ([m[1;31morigin/feature/sdk-encryption-module[m[33m)[m feat(utils): add AES encryption and decryption helpers
[33mbbc5eb6[m Merge pull request #53 from Adnanmd76/feature/sdk-blockchain-module
[33m9dabe61[m[33m ([m[1;31morigin/feature/sdk-blockchain-module[m[33m)[m feat(sdk): add blockchain transaction and balance functions
[33mcb44e70[m Merge pull request #52 from Adnanmd76/feature/sdk-wallet-module
[33m942e0a5[m[33m ([m[1;31morigin/feature/sdk-wallet-module[m[33m)[m feat(sdk): add wallet integration module using crypto-sdk
[33ma6e0026[m Merge pull request #51 from Adnanmd76/Adnanmd76-patch-4
[33m8fc671a[m Delete `final-deployment-project` -> `contracts` ->
[33m6c59847[m Merge pull request #50 from Adnanmd76/Adnanmd76-patch-3
[33mcd2841b[m Update and rename `final-deployment-project` -> `contracts` -> `counter.clar` to `final-deployment-project` -> `contracts` ->
[33m48ca556[m Merge pull request #49 from Adnanmd76/Adnanmd76-patch-2
[33m7e591bc[m Create `final-deployment-project` -> `contracts` -> `counter.clar`
[33m7f7218b[m Merge pull request #48 from Adnanmd76/Adnanmd76-patch-1
[33m9fb32d3[m Create hello-world.clar         ```
[33m073794d[m Merge pull request #47 from Adnanmd76/Adnanmd76-patch-4
[33ma55c8e1[m Merge pull request #46 from Adnanmd76/main
[33m42f1b3b[m Merge pull request #45 from Adnanmd76/Adnanmd76-patch-4
[33m60c3eba[m Merge pull request #44 from Adnanmd76/main
[33mf488175[m Merge pull request #43 from Adnanmd76/Adnanmd76-patch-3
[33mb009acc[m Merge pull request #42 from Adnanmd76/main
[33mb5d16fb[m Merge pull request #41 from Adnanmd76/Adnanmd76-patch-2
[33m926ab08[m Merge pull request #40 from Adnanmd76/Adnanmd76-patch-1
[33m6fc40a5[m Merge pull request #39 from Adnanmd76/main
[33m37e64a6[m Merge pull request #38 from Adnanmd76/Adnanmd76-patch-5
[33m11b4e8e[m Create App.js
[33m949034b[m Merge pull request #37 from Adnanmd76/Adnanmd76-patch-4
[33m40f7e32[m Update services
[33m3bad54f[m Merge pull request #36 from Adnanmd76/Adnanmd76-patch-3
[33m9851760[m Create services
[33m35c26fc[m Create Service
