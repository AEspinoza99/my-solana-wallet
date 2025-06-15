type BalanceCardProps = {
  onToggleTransactions: () => void;
  showTransactions: boolean;
  balance: number | null; // The actual SOL balance (null when no wallet verified)
  loading: boolean; // True when fetching data from blockchain
  error: string | null; // Error message if something goes wrong
};

function BalanceCard({
  onToggleTransactions,
  showTransactions,
  balance,
  loading,
  error,
}: BalanceCardProps) {
  return (
    <section className="bg-slate-700 border border-slate-600 rounded-xl p-6">
      <header>
        <h2 className="text-slate-300 text-sm mb-4">Balance</h2>
      </header>

      <main className="flex items-center mb-6">
        <figure className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <img
            src="/Solana-Crypto-Logo-Transparent-deepblue.webp"
            alt="Solana Logo"
            className="w-4 h-4 object-contain"
          />
        </figure>
        <span className="text-white text-xl font-semibold">
          {loading
            ? "Loading..."
            : balance !== null
            ? `${balance.toFixed(2)} SOL`
            : "0.00 SOL"}
        </span>
      </main>

      {error && (
        <div className="bg-red-500/10 border border-red-500 rounded-lg p-3 mb-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <footer className="flex gap-4">
        <button
          onClick={onToggleTransactions}
          className={`btn-transaction-toggle ${
            showTransactions ? "active" : ""
          }`}
          disabled={loading || error !== null || balance === null}
        >
          {showTransactions ? "Hide Transactions" : "View Transactions"}
        </button>
      </footer>
    </section>
  );
}

export default BalanceCard;
