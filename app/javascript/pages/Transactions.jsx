import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import Transaction from "components/Transaction";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const QUERY = gql`
  query Transactions($bankAccountId: ID!) {
    user: userQuery {
      id
      transactions(bankAccountId: $bankAccountId) {
        id
        name
        kind
        done
        amount
        dueDate
      }
    }
  }
`;

function Transactions() {
  const { bankAccountId } = useParams();
  const { loading, data } = useQuery(QUERY, { variables: { bankAccountId } });

  if (loading) return "CARREGANDO...";

  const { transactions } = data.user;

  if (!transactions.length)
    return (
      <div className="p-4">
        <h1>BankAccount NÃO POSSUI Transaction</h1>

        <div className="mt-4 text-blue-500 underline">
          <Link to="/">Voltar para o início</Link>
        </div>
      </div>
    );

  return (
    <div className="p-4">
      <div className="mb-4 text-blue-500 underline">
        <Link to="/">Voltar para o início</Link>
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );

  // return
}

export default Transactions;
