// src/App.js

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';

// ADN Contract ABI (Application Binary Interface)
// یہ کنٹریکٹ کے فنکشنز کی تفصیل ہے، جسے ہم فرنٹ اینڈ سے کال کر سکتے ہیں
const ADN_CONTRACT_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function symbol() view returns (string)",
  "function name() view returns (string)"
];

// ADN Contract Address (جب آپ اپنا کنٹریکٹ ڈپلائی کریں گے تو یہاں ایڈریس ڈالیں)
const ADN_CONTRACT_ADDRESS = "0x123..."; // یہاں اپنے کنٹریکٹ کا ایڈریس ڈالیں

function App() {
  // State variables
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  // والٹ کنکشن فنکشن
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        await tempProvider.send("eth_requestAccounts", []);
        const signer = tempProvider.getSigner();
        const userAccount = await signer.getAddress();
        
        setProvider(tempProvider);
        setAccount(userAccount);

        // کنٹریکٹ انسٹینس بنانا
        const tempContract = new ethers.Contract(ADN_CONTRACT_ADDRESS, ADN_CONTRACT_ABI, signer);
        setContract(tempContract);

        console.log("Wallet connected:", userAccount);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask not found. Please install MetaMask.");
    }
  };

  // ٹوکن کی معلومات حاصل کرنا (نام، سمبل، بلنس)
  const getTokenInfo = async () => {
    if (contract) {
      try {
        const name = await contract.name();
        const symbol = await contract.symbol();
        const userBalance = await contract.balanceOf(account);
        
        setTokenName(name);
        setTokenSymbol(symbol);
        setBalance(ethers.utils.formatUnits(userBalance, 18));
      } catch (error) {
        console.error("Error fetching token info:", error);
      }
    }
  };

  // ٹوکن ٹرانسفر فنکشن
  const transferTokens = async () => {
    if (contract && recipient && amount) {
      try {
        const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        alert("Transfer successful!");
        getTokenInfo(); // بلنس اپ ڈیٹ کرنے کے لیے
      } catch (error) {
        console.error("Error transferring tokens:", error);
        alert("Transfer failed. Please check the details and try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  // جب بھی اکاؤنٹ یا کنٹریکٹ تبدیل ہو تو ٹوکن کی معلومات حاصل کریں
  useEffect(() => {
    if (account && contract) {
      getTokenInfo();
    }
  }, [account, contract]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Adan Vault</h1>
        <p>Your secure wallet for ADN Coin</p>
        
        {!account ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <div>
            <p>Connected Account: {account}</p>
            <p>Token Name: {tokenName}</p>
            <p>Token Symbol: {tokenSymbol}</p>
            <p>Balance: {balance} {tokenSymbol}</p>
            
            <div className="transfer-section">
              <h2>Transfer ADN Coin</h2>
              <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={transferTokens}>Transfer</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;