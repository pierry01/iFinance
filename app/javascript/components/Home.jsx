import React from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const QUERY = gql`
  query App($id: ID!) {
    user: userQuery(id: $id) {
      id
      fullName
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(QUERY, {
    variables: { id: "38012d9f-d409-49c1-afaa-eefa0b158c23" },
  });

  if (loading) return "CARREGANDO...";

  const { user } = data;

  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.fullName}</h1>
    </div>
  );
}

export default Home;
