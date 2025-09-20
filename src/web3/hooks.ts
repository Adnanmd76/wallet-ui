import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getProvider } from './provider';

interface WalletState {
  address: string | null;
  connected: boolean;
  balance: string | null;
  chainId: number | null;
}

interface WalletOptions {
  chain?: string;
  useWalletConnect?: boolean;
}

export const useWallet = (options: WalletOptions = {}) => {
  const [wallet, setWallet] = useState<WalletState>({
    address: null,
    connected: false,
    balance: null,
    chainId: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = await getProvider(options);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        const network = await provider.getNetwork();

        setWallet({
          address,
          connected: true,
          balance: ethers.utils.formatEther(balance),
          chainId: network.chainId,
        });
      } catch (err) {
        console.error('Wallet connection failed:', err);
        setWallet({
          address: null,
          connected: false,
          balance: null,
          chainId: null,
        });
      }
    };

    connectWallet();
  }, [options.chain, options.useWalletConnect]);

  return wallet;
};
