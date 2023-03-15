import { Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';

// Connect to the Solana network
const connection = new Connection('https://api.mainnet-beta.solana.com');

// Private key of the sender account
const privateKey = new Uint8Array([177,212,63,84,102,191,47,237,200,211,207,147,6,70,95,174,233,230,86,76,209,188,68,204,161,228,38,60,221,1,100,216,107,67,146,57,9,161,21,178,187,99,106,93,7,41,141,113,42,102,173,167,61,139,139,6,115,210,53,24,185,129,64,158]
);

// Public key of the sender account
const senderPublicKey = new PublicKey('8DiPGddrH3PsPVnSDcTdBxVTe2pnWJu7XZtdpQgqNYV3');

const solanaWeb3 = require('@solana/web3.js');

// Replace with the endpoint URL of the Solana node you want to connect to
const endpointUrl = 'https://api.devnet.solana.com';

// Create a connection to the Solana node
const connection = new solanaWeb3.Connection(endpointUrl, 'confirmed');
