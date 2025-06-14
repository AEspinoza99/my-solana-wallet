import { useState } from "react";
import WalletInput from "./WalletInput";
import BalanceCard from "./BalanceCard";
import RecentTransactions from "./RecentTransactions";

function Dashboard() {
  const [showTransactions, setShowTransactions] = useState(false);

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
            <WalletInput />
          </section>

          <section>
            <BalanceCard
              onToggleTransactions={() =>
                setShowTransactions(!showTransactions)
              }
              showTransactions={showTransactions}
            />
          </section>
        </article>

        {/* RecentTransactions only shows when isVisible */}
        <aside>
          <RecentTransactions isVisible={showTransactions} />
        </aside>
      </section>
    </main>
  );
}

export default Dashboard;
