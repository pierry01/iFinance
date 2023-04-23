import React, { useState } from "react";
import PropTypes from "prop-types";

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

        <p>Saldo: {bankAccount.amount}</p>
        <p>Soma das receitas: {bankAccount.sumOfIncomes}</p>
        <p>Soma das despesas: {bankAccount.sumOfExpenses}</p>
        <p>Descrição: {bankAccount.description}</p>

        <button type="button" onClick={() => setModalVisible(true)}>
          Ver transações
        </button>
      </div>

      {modalVisible ? (
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
      ) : null}
    </>
  );
}

BankAccount.propTypes = {
  bankAccount: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    sumOfExpenses: PropTypes.number,
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
