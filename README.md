
<img width="1024" height="1024" alt="Digital Wallet Logo - Blue and Gray_20250905_180504_0000" src="https://github.com/user-attachments/assets/a7c61e2f-79f9-420c-b63a-43d1ba016e0e" />

💳 Wallet UI

A modern, responsive user interface for digital wallet applications built with React and Tailwind CSS. Now integrated with Crypto SDK for multichain wallet connectivity, secure encryption, and blockchain transactions.

---

📦 Tech Stack

| Technology       | Version | Description                                 |
|------------------|---------|---------------------------------------------|
| React            | 18.2.0  | UI library for building user interfaces     |
| Tailwind CSS     | 3.3.0   | Utility-first CSS framework                 |
| Redux Toolkit    | 1.9.0   | State management library                    |
| Axios            | 1.4.0   | HTTP client for API requests                |
| Chart.js         | 4.3.0   | Charts for balance visualization            |
| Crypto SDK       | latest  | Multichain wallet + encryption + blockchain |

---

✨ Key Features

🎨 User Interface
- Modern Design with smooth animations  
- Dark/Light Mode toggle  
- Responsive layout for desktop, tablet, and mobile  
- Multi-language support (i18n ready)

💰 Wallet Functionality
- Real-time balance overview with currency conversion  
- Transaction history with filters and search  
- Multi-currency support (crypto + fiat)  
- Quick actions: Send, receive, exchange  
- Wallet Connect: Hiro, Xverse, MetaMask support  
- Wallet UI Components: Connect button, balance card, transaction list

🔒 Security Features
- Biometric authentication (Fingerprint, Face ID)  
- PIN protection with customizable attempts  
- Auto-lock session management  
- 2FA-ready transaction verification  
- AES encryption for private keys

---

🔗 Crypto SDK Integration

This project integrates with Crypto SDK Guide to enable:

- Multichain wallet connectivity  
- Secure AES encryption for private keys  
- Blockchain transaction handling

📁 SDK Modules

| File Path                  | Purpose                                      |
|----------------------------|----------------------------------------------|
| sdk/wallet.js            | Connects wallets using connectWallet()     |
| sdk/blockchain.js        | Handles transactions and balance checks      |
| sdk/utils/encryption.js  | AES encryption/decryption for sensitive data |

---

🚀 Usage Example

`js
import { initWallet } from './sdk/wallet';
import { transferFunds, fetchBalance } from './sdk/blockchain';
import { encryptData, decryptData } from './sdk/utils/encryption';

async function runWalletFlow() {
  const wallet = await initWallet(); // Connect wallet
  const balance = await fetchBalance(wallet.address); // Get balance
  const tx = await transferFunds('0xReceiverAddress', 0.5); // Send transaction

  const encryptedKey = encryptData(wallet.privateKey, 'my-secret');
  const decryptedKey = decryptData(encryptedKey, 'my-secret');
}
`

---

🖼️ Wallet UI Preview

- Connect Wallet Button  
- Balance Card Component  
- Transaction List  
- Send/Receive Modal  
- Multichain Toggle Dropdown

> UI built with React + Tailwind. Fully responsive and customizable.

---

🛠 Installation

Prerequisites
- Node.js (v18.x or higher)
- npm or yarn

Steps

`bash

Clone the repository
git clone https://github.com/Adnanmd76/wallet-ui.git

Navigate into the project
cd wallet-ui

Install dependencies
npm install

Install Crypto SDK
npm install crypto-sdk

Start the development server
npm run dev
`

---

🔗 Wallet Connect Support

| Wallet     | Supported | Method |
|------------|-----------|--------|
| Hiro       | ✅        | window.stacks.connect() |
| Xverse     | ✅        | window.xverse.connect() |
| MetaMask   | ✅        | window.ethereum.request() |
| Custom SDK | ✅        | connectWallet() from Crypto SDK |

---

🧪 Testing

`bash

Run unit tests
npm run test
`

---

📜 License & Badges

![License: MIT](https://opensource.org/licenses/MIT)  
![React](https://reactjs.org/)  
![Tailwind CSS](https://tailwindcss.com/)  
![JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

🤝 Contact

For questions, feedback, or collaboration:

- GitHub: Adnanmd76
- Email: adnanmd76@gmail.com
- YouTube Demo: Watch here

---
