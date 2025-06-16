import React, { useState } from "react";
import WalletInput from "./WalletInput";
import BalanceCard from "./BalanceCard";
import RecentTransactions from "./RecentTransactions";
import { getWalletBalance } from "../services/services";
import type { Transaction } from "../components/transactionType";
import { getWalletTransactions } from "../services/services";

function Dashboard(): React.ReactElement {
  const [showTransactions, setShowTransactions] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleWalletSubmit = async (walletAddress: string) => {
    console.log("Wallet submitted:", walletAddress);

    setLoading(true);
    setError(null);
    setBalance(null);

    try {
      const [walletBalance, walletTransactions] = await Promise.all([
        getWalletBalance(walletAddress),
        getWalletTransactions(walletAddress), // This will trigger our debug logs
      ]);

      setBalance(walletBalance);
      setTransactions(walletTransactions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-6">
      <section className="max-w-md mt-10 mx-auto">
        <article className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
          <header className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-white mb-2">
              Verify Your Wallet.
              <span className="text-blue-500"> Instantly.</span>
            </h1>
          </header>
          <section>
            <WalletInput
              onWalletSubmit={handleWalletSubmit}
              loading={loading}
            />
          </section>

          {(balance !== null || loading || error) && (
            <section>
              <BalanceCard
                onToggleTransactions={() =>
                  setShowTransactions(!showTransactions)
                }
                showTransactions={showTransactions}
                balance={balance}
                loading={loading}
                error={error}
              />
            </section>
          )}
        </article>

        {/* RecentTransactions only shows when isVisible */}
        <aside>
          <RecentTransactions
            isVisible={showTransactions}
            transactions={transactions}
          />
        </aside>
      </section>
    </main>
  );
}

export default Dashboard;
