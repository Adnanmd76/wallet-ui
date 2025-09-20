import React from 'react';
import { useWallet } from '../web3/hooks';

const WalletConnectButton: React.FC = () => {
  const { address, isConnected } = useWallet();

  return (
    <button style={{ padding: '10px 20px', borderRadius: '6px', backgroundColor: '#4CAF50', color: '#fff' }}>
      {isConnected ? `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
};

export default WalletConnectButton;
