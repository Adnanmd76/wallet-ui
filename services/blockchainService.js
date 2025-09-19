// services/blockchainService.js
const { ethers } = require("ethers");
const axios = require("axios");
const solanaWeb3 = require("@solana/web3.js");

// Ethereum/BSC/Polygon
const ethProvider = new ethers.JsonRpcProvider(process.env.ETH_RPC);
const ethWallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethProvider);
const ethContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, require("../contracts/TokenABI.json"), ethWallet);

async function getEthBalance(address) {
  return await ethContract.balanceOf(address);
}

// Bitcoin via BlockCypher
async function getBitcoinBalance(address) {
  const res = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`);
  return res.data.final_balance;
}

// Solana
const solConnection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
async function getSolanaBalance(address) {
  const pubKey = new solanaWeb3.PublicKey(address);
  const balance = await solConnection.getBalance(pubKey);
  return balance / solanaWeb3.LAMPORTS_PER_SOL;
}

module.exports = {
  getEthBalance,
  getBitcoinBalance,
  getSolanaBalance
};