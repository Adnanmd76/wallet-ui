import React from 'react';
import { useWallet } from '../web3/hooks';

const WalletStatus = () => {
  const { address, connected, balance, chainId } = useWallet();

  if (!connected) {
    return <div className="text-red-500">Wallet not connected</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Balance:</strong> {balance} ETH</p>
      <p><strong>Chain ID:</strong> {chainId}</p>
    </div>
  );
};

export default WalletStatus;
