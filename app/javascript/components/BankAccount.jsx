import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import formatCurrency from "config/formatCurrency";
import Modal from "components/Modal";
import CreateTransaction from "components/transaction/CreateTransaction";

function BankAccount({ bankAccount }) {
  const { amount } = bankAccount;
  const [modal, setModal] = useState(false);

  const onClose = () => setModal(false);
  const amountColor = amount >= 0 ? "text-green-500" : "text-red-500";

  return (
    <>
      <div className="w-80 rounded-md border bg-gray-100 p-4">
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
            <button type="button" onClick={() => setModal(true)}>
              +
            </button>

            <button type="button">*</button>
            <button type="button">...</button>
          </div>
        </div>

        <div className="mb-4">
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

        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-row items-center gap-2">
            <p>Saldo:</p>
            <p className={`font-medium ${amountColor}`}>
              {formatCurrency(amount)}
            </p>
          </div>

          <Link
            className="text-blue-500 underline"
            to={`${bankAccount.id}/transactions`}
          >
            Ver transações
          </Link>
        </div>
      </div>

      {modal ? (
        <Modal title="CREATE Transaction" onClose={onClose}>
          <CreateTransaction onClose={onClose} />
        </Modal>
      ) : null}
    </>
  );
}

BankAccount.propTypes = {
  bankAccount: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    sumOfIncomes: PropTypes.number,
    sumOfExpenses: PropTypes.number,
  }).isRequired,
};

export default BankAccount;
