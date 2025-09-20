import { ethers } from 'ethers';
-import WalletConnectProvider from '@walletconnect/web3-provider';
+import { getWalletConnectProvider } from './walletconnect';
 import { getRpcUrl } from './provider'; // assuming you still have this helper

 const RPC_URLS: Record<string, string> = { … };
 const CHAIN_IDS: Record<string, number> = { … };

 export interface ProviderOptions {
   chain?: string;
   useWalletConnect?: boolean;
 }

 export const getProvider = async (
   options: ProviderOptions = {}
 ): Promise<ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider> => {
   const chain = options.chain || process.env.NEXT_PUBLIC_DEFAULT_CHAIN || 'ethereum';
   const rpcUrl = getRpcUrl(chain);

-  // WalletConnect v2 provider inline
-  if (options.useWalletConnect) {
-    const wcProvider = new WalletConnectProvider({
-      rpc: { [CHAIN_IDS[chain]]: rpcUrl },
-      qrcode: true,
-    });
-    await wcProvider.enable();
-    return new ethers.providers.Web3Provider(wcProvider);
-  }
+  // 1) WalletConnect v2 via abstraction
+  if (options.useWalletConnect) {
+    return await getWalletConnectProvider(chain);
+  }

   // 2) Injected browser wallet
   if (typeof window !== 'undefined' && (window as any).ethereum) {
     await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
     return new ethers.providers.Web3Provider((window as any).ethereum);
   }

   // 3) Fallback JSON-RPC
   return new ethers.providers.JsonRpcProvider(rpcUrl);
 };
