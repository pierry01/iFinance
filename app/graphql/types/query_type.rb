# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    description "Query ROOT"

    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :user_query,
          resolver: Queries::UserQuery,
          description: "GET User by ID"
  end
end
