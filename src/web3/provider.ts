export const getRpcUrl = (
  chain: string,
  network: 'mainnet' | 'testnet' = 'mainnet'
): string => {
  const key = `NEXT_PUBLIC_${chain.toUpperCase()}_${network.toUpperCase()}_RPC`;
  return process.env[key] || process.env.NEXT_PUBLIC_DEFAULT_RPC || '';
};

export const getProvider = async (
  options: ProviderOptions & { network?: 'mainnet' | 'testnet' } = {}
): Promise<ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider> => {
  const chain = options.chain || process.env.NEXT_PUBLIC_DEFAULT_CHAIN || 'ethereum';
  const network = options.network || 'mainnet';
  const rpcUrl = getRpcUrl(chain, network);

  if (options.useWalletConnect) {
    return await getWalletConnectProvider(chain); // optionally pass network too
  }

  if (typeof window !== 'undefined' && (window as any).ethereum) {
    await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    return new ethers.providers.Web3Provider((window as any).ethereum);
  }

  return new ethers.providers.JsonRpcProvider(rpcUrl);
};
