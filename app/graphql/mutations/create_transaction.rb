# frozen_string_literal: true

module Mutations
  class CreateTransaction < Mutations::BaseMutation
    description "CREATE a Transaction"

    field :errors, [String], "Possible errors", null: true
    field :transaction, Types::TransactionType, "Transaction", null: true

    argument :transaction_input,
             Types::TransactionInput,
             "Transaction Input",
             required: true

    def resolve(transaction_input:)
      Graphql::CreateTransaction.new(transaction_input:).response
    end

    def authorized?(transaction_input:)
      context[:current_user].present?
    end
  end
end
