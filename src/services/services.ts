import { createSolanaRpc, address } from "@solana/kit";

// Create RPC connection to Solana mainnet
const rpc = createSolanaRpc("https://api.mainnet-beta.solana.com");

export async function getWalletBalance(walletAddress: string): Promise<number> {
  try {
    // Solana address
    const walletAddr = address(walletAddress);

    // balance in lamports
    const balanceResponse = await rpc.getBalance(walletAddr).send();

    // Convert lamports to SOL
    const balanceInSol = Number(balanceResponse.value) / 1_000_000_000;

    return balanceInSol;
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
    throw new Error("Invalid wallet address or network error");
  }
}
