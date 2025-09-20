import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

const RPC_URLS: Record<string, string> = {
  ethereum: process.env.NEXT_PUBLIC_ETH_RPC || '',
  polygon: process.env.NEXT_PUBLIC_POLYGON_RPC || '',
  bsc: process.env.NEXT_PUBLIC_BSC_RPC || '',
  avalanche: process.env.NEXT_PUBLIC_AVALANCHE_RPC || '',
  fantom: process.env.NEXT_PUBLIC_FANTOM_RPC || '',
};

const CHAIN_IDS: Record<string, number> = {
  ethereum: 1,
  polygon: 137,
  bsc: 56,
  avalanche: 43114,
  fantom: 250,
};

export interface ProviderOptions {
  chain?: string;
  useWalletConnect?: boolean;
}

export const getRpcUrl = (chain: string): string => {
  return RPC_URLS[chain] || process.env.NEXT_PUBLIC_DEFAULT_RPC || '';
};

export const getProvider = async (
  options: ProviderOptions = {}
): Promise<ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider> => {
  const chain = options.chain || process.env.NEXT_PUBLIC_DEFAULT_CHAIN || 'ethereum';
  const rpcUrl = getRpcUrl(chain);

  // 1) WalletConnect v2 provider (QR + session)
  if (options.useWalletConnect) {
    const wcProvider = new WalletConnectProvider({
      rpc: { [CHAIN_IDS[chain]]: rpcUrl },
      qrcode: true,
    });
    await wcProvider.enable();
    return new ethers.providers.Web3Provider(wcProvider);
  }

  // 2) Injected MetaMask / browser wallet
  if (typeof window !== 'undefined' && (window as any).ethereum) {
    await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    return new ethers.providers.Web3Provider((window as any).ethereum);
  }

  // 3) Fallback JSON-RPC
  return new ethers.providers.JsonRpcProvider(rpcUrl);
};
