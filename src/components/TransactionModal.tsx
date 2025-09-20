import React, { useState } from 'react';
import { ethers } from 'ethers';
import { getProvider } from '../web3/provider';

interface TransactionModalProps {
  chain?: string;
  useWalletConnect?: boolean;
  network?: 'mainnet' | 'testnet';
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  chain = 'ethereum',
  useWalletConnect = false,
  network = 'mainnet',
}) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async () => {
    try {
      setStatus('Sending...');
      const provider = await getProvider({ chain, useWalletConnect, network });
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.utils.parseEther(amount),
      });
      await tx.wait();
      setStatus('Transaction confirmed ✅');
    } catch (err) {
      console.error(err);
      setStatus('Transaction failed ❌');
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded shadow space-y-4">
      <h3 className="text-lg font-semibold">Send ETH</h3>
      <input
        type="text"
        placeholder="Recipient address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Send
      </button>
      {status && <p className="text-sm">{status}</p>}
    </div>
  );
};

export default TransactionModal;
