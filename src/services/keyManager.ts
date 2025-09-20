import { ethers } from 'ethers';

export const generateWallet = () => {
  return ethers.Wallet.createRandom();
};

export const encryptWallet = async (wallet: ethers.Wallet, password: string) => {
  return await wallet.encrypt(password);
};

export const decryptWallet = async (json: string, password: string) => {
  return await ethers.Wallet.fromEncryptedJson(json, password);
};
