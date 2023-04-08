# frozen_string_literal: true

module Queries
  class UserQuery < BaseQuery
    description "GET User by ID"

    type Types::UserType, null: false

    argument :id, String, "User ID", required: true

    def resolve(id:)
      User.find(id)
    end
  end
end
