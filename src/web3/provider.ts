import { ethers } from 'ethers';

export const getProvider = () => {
  if (window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  throw new Error('No Web3 provider found');
};
