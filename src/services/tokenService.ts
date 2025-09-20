import { ethers } from 'ethers';

const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
];

export const getTokenBalance = async (
  provider: ethers.providers.Provider,
  tokenAddress: string,
  userAddress: string
): Promise<string> => {
  const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  const balance = await contract.balanceOf(userAddress);
  return ethers.utils.formatUnits(balance, 18);
};

export const transferToken = async (
  signer: ethers.Signer,
  tokenAddress: string,
  to: string,
  amount: string
) => {
  const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
  const tx = await contract.transfer(to, ethers.utils.parseUnits(amount, 18));
  return await tx.wait();
};

export const approveToken = async (
  signer: ethers.Signer,
  tokenAddress: string,
  spender: string,
  amount: string
) => {
  const contract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
  const tx = await contract.approve(spender, ethers.utils.parseUnits(amount, 18));
  return await tx.wait();
};
