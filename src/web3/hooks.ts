import { useState, useEffect } from 'react';
import { getProvider } from './provider';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = getProvider();
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        const userBalance = await provider.getBalance(userAddress);
        const network = await provider.getNetwork();

        setAddress(userAddress);
        setBalance(ethers.utils.formatEther(userBalance));
        setChainId(network.chainId);
        setIsConnected(true);
      } catch (error) {
        console.error('Wallet connection failed:', error);
        setIsConnected(false);
      }
    };

    connectWallet();
  }, []);

  return { address, isConnected, balance, chainId };
};
