import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { getRpcUrl } from "./provider";

const CHAIN_IDS: Record<string, number> = {
  ethereum: 1,
  polygon: 137,
  bsc: 56,
  avalanche: 43114,
  fantom: 250,
};

export const getWalletConnectProvider = async (
  chain: string = process.env.NEXT_PUBLIC_DEFAULT_CHAIN || "ethereum"
): Promise<ethers.providers.Web3Provider> => {
  const rpcUrl = getRpcUrl(chain);
  const wcProvider = new WalletConnectProvider({
    rpc: { [CHAIN_IDS[chain]]: rpcUrl },
    qrcode: true,
  });

  await wcProvider.enable();
  return new ethers.providers.Web3Provider(wcProvider);
};
