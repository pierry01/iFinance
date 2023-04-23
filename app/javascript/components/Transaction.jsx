import React from "react";
import PropTypes from "prop-types";

import { INCOME } from "config/transaction";
import formatCurrency from "config/formatCurrency";

function Transaction({ transaction }) {
  const { kind, dueDate } = transaction;
  const amountColor = kind === INCOME ? "text-green-500" : "text-red-500";

  return (
    <div className="w-80 rounded-md border bg-gray-100 p-4">
      <h1>{transaction.name}</h1>

      <div className="flex flex-row justify-between">
        <p>Valor:</p>
        <p className={`font-medium ${amountColor}`}>
          {formatCurrency(transaction.amount)}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <p>Finalizada?</p>
        <p>{transaction.done ? "Sim" : "Não"}</p>
      </div>

      {dueDate ? (
        <div className="flex flex-row justify-between">
          <p>Vencimento:</p>
          <p>{dueDate}</p>
        </div>
      ) : null}
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
    dueDate: PropTypes.string,
    due_date: PropTypes.string,
  }).isRequired,
};

export default Transaction;
