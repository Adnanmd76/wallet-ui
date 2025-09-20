import React from 'react';
import { useWallet } from '../web3/hooks';

const WalletStatus: React.FC = () => {
  const { address, isConnected } = useWallet();

  if (!isConnected) return null;

  return (
    <div style={{ padding: '8px', backgroundColor: '#f0f0f0', borderRadius: '6px' }}>
      <strong>Wallet Connected:</strong> {address}
    </div>
  );
};

export default WalletStatus;
