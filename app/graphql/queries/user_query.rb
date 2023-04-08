# frozen_string_literal: true

module Queries
  class UserQuery < BaseQuery
    description "GET User by ID"

    type Types::User, null: false

    argument :id, String, "User ID", required: true

    def resolve(id:)
      User.find(id)
    end
  end
end
