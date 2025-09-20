import React from 'react';
import WalletConnectButton from '../components/WalletConnectButton';
import WalletStatus from '../components/WalletStatus';

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Wallet Dashboard</h1>
      <WalletConnectButton />
      <WalletStatus />
    </div>
  );
};

export default Dashboard;
