import { Link } from "react-router-dom";

function History() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Transaction History
      </h1>
      <p className="text-gray-600 mb-6">View all your past transactions</p>

      <div className="mt-8">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 underline text-sm"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default History;
