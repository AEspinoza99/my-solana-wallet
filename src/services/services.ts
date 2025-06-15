import { createSolanaRpc, address } from "@solana/kit";

// Create RPC connection to Solana mainnet
const rpc = createSolanaRpc("https://solana-api.projectserum.com");

export async function getWalletBalance(walletAddress: string): Promise<number> {
  try {
    console.log("Fetching balance for:", walletAddress);

    // Solana address
    const walletAddr = address(walletAddress);
    console.log("Address conversion successful");

    // balance in lamports
    const balanceResponse = await rpc.getBalance(walletAddr).send();
    console.log("Raw balance response:", balanceResponse);

    // Convert lamports to SOL
    const balanceInSol = Number(balanceResponse.value) / 1_000_000_000;
    console.log("💰 Balance in SOL:", balanceInSol);

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
