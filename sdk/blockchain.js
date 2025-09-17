// blockchain.js
import { sendTransaction, getBalance } from 'crypto-sdk';

export function transferFunds(toAddress, amount) {
  return sendTransaction({ to: toAddress, value: amount });
}

export function fetchBalance(walletAddress) {
  return getBalance(walletAddress);
}
