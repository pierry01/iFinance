import React from "react";
import { useNavigate } from "react-router";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import BankAccount from "components/bank_account/BankAccount";

const QUERY = gql`
  query Home {
    user: userQuery {
      id
      email
      bankAccounts {
        id
        name
        amount
        description
        sumOfIncomes
        sumOfExpenses
        transactions {
          id
          name
          kind
          amount
        }
      }
    }
  }
`;

function Home() {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY);

  if (loading) return "CARREGANDO...";

  const { user } = data;

  return (
    <div className="p-4">
      <button
        type="button"
        className="mb-2 rounded-md bg-gray-300 p-2"
        onClick={() => navigate("create-bank-account")}
      >
        ADICIONAR CONTA BANCÁRIA
      </button>

      <p>User: {user.email}</p>

      <ul className="mt-4 flex flex-row flex-wrap items-center gap-4">
        {user.bankAccounts.map((bankAccount) => (
          <BankAccount key={bankAccount.id} bankAccount={bankAccount} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
