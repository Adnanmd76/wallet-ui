import React, { useState } from 'react';
import { useWallet } from '../web3/hooks';
import NetworkToggle from './NetworkToggle';

const chains = ['ethereum', 'polygon', 'bsc', 'avalanche', 'fantom'];

const WalletControls = () => {
  const [selectedChain, setSelectedChain] = useState('ethereum');
  const [useWalletConnect, setUseWalletConnect] = useState(false);
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');

  const wallet = useWallet({ chain: selectedChain, useWalletConnect, network });

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded shadow space-y-4">
      <div>
        <label className="block font-semibold mb-1">Select Chain:</label>
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {chains.map((chain) => (
            <option key={chain} value={chain}>
              {chain.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={useWalletConnect}
            onChange={(e) => setUseWalletConnect(e.target.checked)}
          />
          <span>Use WalletConnect</span>
        </label>
      </div>

      <NetworkToggle chain={selectedChain} onChange={setNetwork} />

      <div className="mt-4 text-sm">
        {wallet.connected ? (
          <div>
            <p><strong>Address:</strong> {wallet.address}</p>
            <p><strong>Balance:</strong> {wallet.balance} ETH</p>
            <p><strong>Chain ID:</strong> {wallet.chainId}</p>
          </div>
        ) : (
          <p className="text-red-500">Wallet not connected</p>
        )}
      </div>
    </div>
  );
};

export default WalletControls;
