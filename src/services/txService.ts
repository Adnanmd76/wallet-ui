import { ethers } from 'ethers';

/**
 * Send an ETH transfer transaction.
 * @param signer ethers.Signer instance (WalletConnect or injected)
 * @param to Recipient address
 * @param amount ETH amount (in Ether string format)
 * @returns TransactionReceipt after confirmation
 */
export const sendEthTransaction = async (
  signer: ethers.Signer,
  to: string,
  amount: string
): Promise<ethers.providers.TransactionReceipt> => {
  const tx = await signer.sendTransaction({
    to,
    value: ethers.utils.parseEther(amount),
  });
  return await tx.wait();
};

/**
 * Estimate gas for any generic transaction.
 * @param provider ethers.providers.Provider instance
 * @param tx TransactionRequest object
 * @returns Estimated gas BigNumber
 */
export const estimateGas = async (
  provider: ethers.providers.Provider,
  tx: ethers.providers.TransactionRequest
): Promise<ethers.BigNumber> => {
  return await provider.estimateGas(tx);
};
