import React from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const QUERY = gql`
  query Home {
    user: userQuery {
      id
      email
      fullName
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(QUERY);

  if (loading) return "CARREGANDO...";

  const { user } = data;

  if (!user) return "NÃO HÁ USUÁRIO LOGADO";

  return (
    <div className="p-4">
      <h1 className="text-red-500">{user.id}</h1>
      <h1>{user.email}</h1>
      <h1>{user.fullName}</h1>
    </div>
  );
}

export default Home;
