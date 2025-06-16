import { useState } from "react";

type WalletInputProps = {
  onWalletSubmit: (walletAddress: string) => Promise<void>;
  loading: boolean;
};

function WalletInput({
  onWalletSubmit,
  loading,
}: WalletInputProps): React.ReactElement {
  const [walletAddress, setWalletAddress] = useState<string>("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!walletAddress.trim()) {
      return;
    }

    // This calls the function from Dashboard
    await onWalletSubmit(walletAddress.trim());
    setWalletAddress(""); // Clear input after submit
  }

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="wallet-address"
          className="block text-sm font-medium text-slate-300 mb-1 ml-2.5"
        >
          Wallet Address:
        </label>
        <input
          id="wallet-address"
          type="text"
          placeholder="Enter your Solana wallet address"
          onClick={(e) => {
            console.log("Input clicked");
            e.currentTarget.focus();
          }}
          onChange={(input) => setWalletAddress(input.target.value)}
          value={walletAddress}
          disabled={loading} // Disable input while loading
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white
           placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors
           disabled:opacity-50 disabled:cursor-not-allowed"
        />

        <button
          type="submit"
          disabled={loading || !walletAddress.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed 
           text-white font-medium py-3 px-4 rounded-lg mt-3 transition-colors"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
}

export default WalletInput;
