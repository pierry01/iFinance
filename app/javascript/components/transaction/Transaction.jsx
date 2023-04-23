import React from "react";
import PropTypes from "prop-types";

import formatCurrency from "config/formatCurrency";

function Transaction({ transaction }) {
  const { amount } = transaction;
  const amountColor = amount >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="mb-4 w-80 rounded-md border bg-gray-100 p-4">
      <div className="mb-4 flex flex-row items-center justify-between gap-4">
        <p>{transaction.name}</p>

        <button type="button">...</button>
      </div>

      <div className="flex flex-row justify-between">
        <p>Valor:</p>
        <p className={`font-medium ${amountColor}`}>{formatCurrency(amount)}</p>
      </div>
    </div>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    kind: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    due_date: PropTypes.string,
  }).isRequired,
};

export default Transaction;
