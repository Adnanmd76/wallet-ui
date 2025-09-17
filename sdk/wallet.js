// wallet.js
import { connectWallet } from 'crypto-sdk';

export function initWallet() {
  return connectWallet();
}
