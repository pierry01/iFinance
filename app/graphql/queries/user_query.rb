# frozen_string_literal: true

module Queries
  class UserQuery < BaseQuery
    description "GET the CurrentUser"

    type Types::UserType, null: true

    def resolve
      context[:current_user]
    end
  end
end
