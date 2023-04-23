import React, { useState } from "react";
import PropTypes from "prop-types";

import formatCurrency from "config/formatCurrency";

import Modal from "components/Modal";

function BankAccount({ bankAccount }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div className="mb-4 w-80 rounded-md border bg-gray-100 p-4">
        <div className="mb-4 flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-4">
            <img
              alt="BankAccount LOGO"
              className="h-10 w-10 rounded-full"
              src="https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg"
            />

            <p>{bankAccount.name}</p>
          </div>

          <div className="flex flex-row items-center gap-4">
            <button type="button">+</button>
            <button type="button">*</button>
            <button type="button">...</button>
          </div>
        </div>

        <div>
          <div className="flex flex-row justify-between">
            <p>Saldo:</p>
            <p>{formatCurrency(bankAccount.amount)}</p>
          </div>

          <div className="flex flex-row justify-between">
            <p>Soma das receitas:</p>
            <p className="font-medium text-green-500">
              {formatCurrency(bankAccount.sumOfIncomes)}
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p>Soma das despesas:</p>
            <p className="font-medium text-red-500">
              {formatCurrency(bankAccount.sumOfExpenses)}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-4"
          onClick={() => setModalVisible(true)}
        >
          Ver transações
        </button>
      </div>

      {modalVisible ? (
        <Modal title="Transactions" onClose={() => setModalVisible(false)}>
          <ul>
            {bankAccount.transactions.map((transaction) => (
              <div key={transaction.id}>
                <p>{transaction.done}</p>
                <p>{transaction.kind}</p>
                <p>{transaction.name}</p>
                <p>{formatCurrency(transaction.amount)}</p>
                <p>{transaction.due_date}</p>
              </div>
            ))}
          </ul>
        </Modal>
      ) : null}
    </>
  );
}

BankAccount.propTypes = {
  bankAccount: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    sumOfIncomes: PropTypes.number,
    sumOfExpenses: PropTypes.number,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        done: PropTypes.bool,
        kind: PropTypes.string,
        name: PropTypes.string,
        amount: PropTypes.number,
        due_date: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default BankAccount;
