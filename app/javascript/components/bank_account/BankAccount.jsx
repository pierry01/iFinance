import React, { useState } from "react";
import PropTypes from "prop-types";

import formatCurrency from "config/formatCurrency";

import Modal from "components/Modal";

function BankAccount({ bankAccount }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <div className="mb-4 rounded-md border bg-gray-200 p-4">
        <div className="flex flex-row items-center gap-4">
          <img
            alt="BankAccount LOGO"
            className="h-10 w-10 rounded-full"
            src="https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg"
          />

          <p>{bankAccount.name}</p>

          <button type="button">+</button>
          <button type="button">*</button>
          <button type="button">...</button>
        </div>

        <p>Saldo: {formatCurrency(bankAccount.amount)}</p>
        <p>Soma das receitas: {formatCurrency(bankAccount.sumOfIncomes)}</p>
        <p>Soma das despesas: {formatCurrency(bankAccount.sumOfExpenses)}</p>
        <p>Descrição: {bankAccount.description}</p>

        <button type="button" onClick={() => setModalVisible(true)}>
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
                <p>{transaction.description}</p>
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
    description: PropTypes.string,
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
        description: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default BankAccount;
