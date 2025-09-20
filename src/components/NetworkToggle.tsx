import React, { useState, useEffect } from 'react';

interface NetworkToggleProps {
  chain: string;
  onChange: (network: 'mainnet' | 'testnet') => void;
}

const NetworkToggle: React.FC<NetworkToggleProps> = ({ chain, onChange }) => {
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>('mainnet');
  const [rpcStatus, setRpcStatus] = useState<'online' | 'offline' | 'checking'>('checking');

  useEffect(() => {
    const checkRpc = async () => {
      setRpcStatus('checking');
      try {
        const url = process.env[`NEXT_PUBLIC_${chain.toUpperCase()}_${network.toUpperCase()}_RPC`];
        const res = await fetch(url, { method: 'POST', body: '{}' });
        setRpcStatus(res.ok ? 'online' : 'offline');
      } catch {
        setRpcStatus('offline');
      }
    };

    checkRpc();
  }, [chain, network]);

  const handleToggle = () => {
    const newNetwork = network === 'mainnet' ? 'testnet' : 'mainnet';
    setNetwork(newNetwork);
    onChange(newNetwork);
  };

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded">
      <button onClick={handleToggle} className="px-3 py-1 bg-blue-500 text-white rounded">
        {network === 'mainnet' ? 'Switch to Testnet' : 'Switch to Mainnet'}
      </button>
      <span className={`text-sm ${rpcStatus === 'online' ? 'text-green-500' : 'text-red-500'}`}>
        RPC: {rpcStatus}
      </span>
    </div>
  );
};

export default NetworkToggle;
