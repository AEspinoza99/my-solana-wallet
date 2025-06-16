import { createSolanaRpc, address } from "@solana/kit";
import type { Transaction } from "../components/transactionType";

// Create RPC connection to Solana mainnet
const rpc = createSolanaRpc("https://api.devnet.solana.com");

export async function getWalletBalance(walletAddress: string): Promise<number> {
  try {
    console.log("Fetching balance for:", walletAddress);

    // Solana address
    const walletAddr = address(walletAddress); //converts string to solana wallet obj
    console.log("Address conversion successful");

    // balance in lamports
    const balanceResponse = await rpc.getBalance(walletAddr).send();
    console.log("Raw balance response:", balanceResponse);

    // Convert lamports to SOL
    const balanceInSol = Number(balanceResponse.value) / 1_000_000_000;
    console.log("Balance in SOL:", balanceInSol);

    return balanceInSol;
  } catch (error) {
    console.error("ORIGINAL ERROR:", error);
    console.error("Error type:", typeof error);
    console.error(
      "Error message:",
      error instanceof Error ? error.message : "Unknown error"
    );
    throw new Error("Invalid wallet address or network error");
  }
}

export async function getWalletTransactions(
  walletAddress: string
): Promise<Transaction[]> {
  try {
    console.log("Fetching transactions for:", walletAddress);

    const walletAddr = address(walletAddress);
    const signatures = await rpc
      .getSignaturesForAddress(walletAddr, { limit: 5 })
      .send();
    console.log("Transaction signatures:", signatures);

    console.log("Full signatures response:", signatures);
    console.log("Keys in signatures:", Object.keys(signatures));
    console.log("Type of signatures:", typeof signatures);

    // const transactions: Transaction[] = signatures.value.map((sig) => ({
    //   id: sig.signature,
    //   type: Math.random() > 0.5 ? "Received" : "Sent",
    //   amount: `${Math.random() > 0.5 ? "+" : "-"}${(Math.random() * 2).toFixed(
    //     2
    //   )} SOL`,
    //   time: new Date(sig.blockTime! * 1000).toLocaleDateString(),
    //   address: `${sig.signature.slice(0, 4)}...${sig.signature.slice(-4)}`,
    // }));

    return [];
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}
