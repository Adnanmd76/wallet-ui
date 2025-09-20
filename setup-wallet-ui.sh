#!/bin/bash

# Step 1: Create folders
mkdir -p wallet-ui/contracts
mkdir -p wallet-ui/deployments
mkdir -p wallet-ui/frontend
mkdir -p wallet-ui/chainhook

# Step 2: Create say-hi.clar
cat > wallet-ui/contracts/say-hi.clar <<EOF
;; Say Hi contract for Hero Wallet integration
(define-public (say-hi)
  (ok "Hello Muhammad"))
EOF

# Step 3: Create default.devnet-plan.yaml
cat > wallet-ui/deployments/default.devnet-plan.yaml <<EOF
version: 1.0
network: devnet
deployments:
  - contract: say-hi
    path: contracts/say-hi.clar
    deployer: deployer
EOF

# Step 4: Create Devnet.toml
cat > wallet-ui/Devnet.toml <<EOF
[network]
name = "devnet"
block_time = 10

[accounts.deployer]
mnemonic = "test mnemonic phrase here"
balance = 100000000000

[accounts.wallet_1]
mnemonic = "another test mnemonic"
balance = 50000000000
EOF

# Step 5: Create call-say-hi.ts
cat > wallet-ui/frontend/call-say-hi.ts <<EOF
// API integration using Stacks.js
import {
  makeContractCall,
  broadcastTransaction,
} from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

export async function callSayHi() {
  const txOptions = {
    contractAddress: 'ST...your address',
    contractName: 'say-hi',
    functionName: 'say-hi',
    functionArgs: [],
    senderKey: 'your private key',
    network: new StacksTestnet(),
  };

  const transaction = await makeContractCall(txOptions);
  const result = await broadcastTransaction(transaction, txOptions.network);
  console.log('Transaction result:', result);
}
EOF

# Step 6: Create config.yaml
cat > wallet-ui/chainhook/config.yaml <<EOF
hooks:
  - event_type: contract-call
    contract_name: say-hi
    function_name: say-hi
    action: POST
    url: https://your-backend.com/api/on-say-hi
EOF

# Step 7: Git add and commit
cd wallet-ui
git init
git add .
git commit -m "Initial setup: say-hi contract, Devnet config, API integration, and Chainhook trigger"
