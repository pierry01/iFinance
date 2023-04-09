import React from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const QUERY = gql`
  query Home {
    user: userQuery {
      id
      email
      bankAccounts {
        id
        name
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
  const { loading, data } = useQuery(QUERY);

  if (loading) return "CARREGANDO...";

  const { user } = data;

  return (
    <div className="p-4">
      <p>User: {user.email}</p>

      <ul className="mt-2">
        {user.bankAccounts.map((bankAccount) => (
          <div key={bankAccount.id}>
            <p>BankAccount</p>
            <p>{bankAccount.name}</p>

            <ul>
              {bankAccount.transactions.map((transaction) => (
                <div key={transaction.id} className="my-2">
                  <p>Transaction</p>
                  <p>{transaction.name}</p>
                  <p>{transaction.amount}</p>
                  <p>{transaction.kind}</p>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
