import React, { useState } from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import BankAccount from "components/BankAccount";
import Modal from "components/Modal";
import CreateBankAccount from "components/bank_account/CreateBankAccount";

const QUERY = gql`
  query Home {
    user: userQuery {
      id
      bankAccounts {
        id
        name
        amount
        sumOfIncomes
        sumOfExpenses
      }
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(QUERY);
  const [modal, setModal] = useState(false);

  if (loading) return "CARREGANDO...";

  const { user } = data;

  const onClose = () => setModal(false);

  return (
    <>
      <div className="p-4">
        <button
          type="button"
          className="rounded-md bg-gray-300 p-2"
          onClick={() => setModal(true)}
        >
          ADICIONAR CONTA BANCÁRIA
        </button>

        <ul className="mt-4 flex flex-row flex-wrap items-center gap-4">
          {user.bankAccounts.map((bankAccount) => (
            <BankAccount key={bankAccount.id} bankAccount={bankAccount} />
          ))}
        </ul>
      </div>

      {modal ? (
        <Modal title="CREATE BankAccount" onClose={onClose}>
          <CreateBankAccount onClose={onClose} />
        </Modal>
      ) : null}
    </>
  );
}

export default Home;
