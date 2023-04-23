import React from "react";
import { Link } from "react-router-dom";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import BankAccount from "components/BankAccount";

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

  if (loading) return "CARREGANDO...";

  const { user } = data;

  return (
    <div className="p-4">
      <Link to="create-bank-account" className="rounded-md bg-gray-300 p-2">
        ADICIONAR CONTA BANCÁRIA
      </Link>

      <ul className="mt-4 flex flex-row flex-wrap items-center gap-4">
        {user.bankAccounts.map((bankAccount) => (
          <BankAccount key={bankAccount.id} bankAccount={bankAccount} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
