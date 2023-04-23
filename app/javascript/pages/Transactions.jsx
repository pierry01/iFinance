import React from "react";
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

  return data.user.transactions.map((transaction) => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));
}

export default Transactions;
