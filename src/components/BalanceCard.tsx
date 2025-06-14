type BalanceCardProps = {
  onToggleTransactions: () => void;
  showTransactions: boolean;
};

function BalanceCard({
  onToggleTransactions,
  showTransactions,
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
        <span className="text-white text-xl font-semibold">1.54 SOL</span>
      </main>
      <footer>
        <button
          onClick={onToggleTransactions}
          className={`btn-transaction-toggle ${
            showTransactions ? "active" : ""
          }`}
        >
          {showTransactions ? "Hide Transactions" : "View Transactions"}
        </button>
      </footer>
    </section>
  );
}

export default BalanceCard;
