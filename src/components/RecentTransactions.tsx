import type { Transaction } from "./transactionType";

type RecentTransactionsProps = {
  isVisible: boolean;
  transactions?: Transaction[];
};

export default function RecentTransactions({
  isVisible,
  transactions = [],
}: RecentTransactionsProps) {
  // Mock data for now - later will come from Solana kit API
  const mockTransactions: Transaction[] = [
    {
      id: "1",
      type: "Received",
      amount: "+0.5 SOL",
      time: "2 hours ago",
      address: "3Kx7...9Yz2",
    },
    {
      id: "2",
      type: "Sent",
      amount: "-0.25 SOL",
      time: "1 day ago",
      address: "7Mx4...3Kl8",
    },
    {
      id: "3",
      type: "Received",
      amount: "+1.0 SOL",
      time: "3 days ago",
      address: "9Qr6...7Hn5",
    },
    {
      id: "4",
      type: "Sent",
      amount: "-0.75 SOL",
      time: "5 days ago",
      address: "2Lp3...8Ym1",
    },
    {
      id: "5",
      type: "Received",
      amount: "+0.8 SOL",
      time: "1 week ago",
      address: "6Tr9...4Kn7",
    },
  ];

  const displayTransactions =
    transactions.length > 0 ? transactions.slice(0, 5) : mockTransactions;

  return (
    <section
      className={`bg-slate-700 border border-slate-600 rounded-xl mt-4 fadein-transition
                ${
                  isVisible
                    ? "max-h-screen opacity-100 p-6"
                    : "max-h-0 opacity-0 p-0"
                }`}
    >
      <header>
        <h3 className="text-slate-300 text-sm font-medium mb-3">
          Recent Transactions
        </h3>
      </header>

      <main>
        <ul className="space-y-2">
          {displayTransactions.map((transaction) => (
            <li key={transaction.id}>
              <article className="bg-slate-800 rounded-lg p-3">
                <header className="flex justify-between items-center">
                  <span
                    className={`text-sm font-medium ${
                      transaction.type === "Received"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type}
                  </span>
                  <data
                    value={transaction.amount}
                    className={`text-sm font-medium ${
                      transaction.type === "Received"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.amount}
                  </data>
                </header>
                <footer className="flex justify-between items-center mt-1">
                  <address className="text-xs text-slate-400 not-italic">
                    {transaction.address}
                  </address>
                  <time className="text-xs text-slate-400">
                    {transaction.time}
                  </time>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
