import { useEffect, useState } from 'react';
import { getProvider } from './provider';

interface WalletState {
  address: string | null;
  balance: string | null;
  chainId: number | null;
  connected: boolean;
}

interface WalletOptions {
  chain?: string;
  network?: 'mainnet' | 'testnet';
  useWalletConnect?: boolean;
}

export const useWallet = ({
  chain = 'ethereum',
  network = 'mainnet',
  useWalletConnect = false,
}: WalletOptions): WalletState => {
  const [wallet, setWallet] = useState<WalletState>({
    address: null,
    balance: null,
    chainId: null,
    connected: false,
  });

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = await getProvider({ chain, network, useWalletConnect });
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        const networkInfo = await provider.getNetwork();

        setWallet({
          address,
          balance: balance ? balance.toString() : null,
          chainId: networkInfo.chainId,
          connected: true,
        });
      } catch (err) {
        console.error('Wallet connection failed:', err);
        setWallet((prev) => ({ ...prev, connected: false }));
      }
    };

    connectWallet();
  }, [chain, network, useWalletConnect]);

  return wallet;
};
