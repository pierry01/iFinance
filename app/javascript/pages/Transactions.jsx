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
        amount
      }
    }
  }
`;

function Transactions() {
  const { bankAccountId } = useParams();
  const { loading, data } = useQuery(QUERY, { variables: { bankAccountId } });

  if (loading) return "CARREGANDO...";

  return (
    <div className="p-4">
      <div className="mb-4 text-blue-500 underline">
        <Link to="/">Voltar para o início</Link>
      </div>

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
        {data.user.transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );

  // return
}

export default Transactions;
