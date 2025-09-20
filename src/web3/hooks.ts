import { useState, useEffect } from 'react';
import { getProvider } from './provider';

export const useWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = getProvider();
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setAddress(userAddress);
        setIsConnected(true);
      } catch (error) {
        console.error('Wallet connection failed:', error);
        setIsConnected(false);
      }
    };

    connectWallet();
  }, []);

  return { address, isConnected };
};
