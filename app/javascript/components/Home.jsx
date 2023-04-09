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
    variables: { id: "c5c294a4-4a56-441b-9aff-2b9ff7c3dfd8" },
  });

  if (loading) return "CARREGANDO...";

  const { user } = data;

  return (
    <div className="p-4">
      <h1 className="text-red-500">{user.id}</h1>
      <h1>{user.fullName}</h1>
    </div>
  );
}

export default Home;
