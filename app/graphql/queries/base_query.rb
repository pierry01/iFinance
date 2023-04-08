# frozen_string_literal: true

module Queries
  class BaseQuery < GraphQL::Schema::Resolver
    def current_user
      context[:current_user] || raise(GraphQL::ExecutionError, "UNAUTHORIZED")
    end
  end
end
