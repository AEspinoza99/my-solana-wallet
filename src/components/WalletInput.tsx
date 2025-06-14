import type React from "react";
import { useState } from "react";

function WalletInput(): React.ReactElement {
  const [walletAddress, setWalletAddress] = useState<string>("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("Button clicked");
    setWalletAddress(walletAddress);

    // Insert API call here

    setWalletAddress("");
    console.log(walletAddress);
  }

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
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
        onChange={(input) => setWalletAddress(input.target.value)}
        value={walletAddress}
        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white
         placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
      />

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg mt-3 transition-colors">
        Verify
      </button>
    </form>
  );
}

export default WalletInput;
