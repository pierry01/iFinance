import React from "react";
import PropTypes from "prop-types";

function BankAccount({ bankAccount }) {
  return (
    <div className="mb-4 rounded-md border bg-gray-200 p-4">
      <h1>BankAccount</h1>

      <p>{bankAccount.name}</p>
      <p>{bankAccount.amount}</p>
      <p>{bankAccount.description}</p>

      <h1>Transactions</h1>

      <ul>
        {bankAccount.transactions.map((transaction) => (
          <div key={transaction.id}>
            <p>{transaction.done}</p>
            <p>{transaction.kind}</p>
            <p>{transaction.name}</p>
            <p>{transaction.amount}</p>
            <p>{transaction.description}</p>
            <p>{transaction.due_date}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

BankAccount.propTypes = {
  bankAccount: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    description: PropTypes.string,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        done: PropTypes.bool,
        kind: PropTypes.string,
        name: PropTypes.string,
        amount: PropTypes.number,
        description: PropTypes.string,
        due_date: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default BankAccount;
