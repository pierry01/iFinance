# frozen_string_literal: true

module Mutations
  class CreateBankAccount < Mutations::BaseMutation
    description "CREATE a BankAccount"

    field :bank_account, Types::BankAccountType, "BankAccount", null: true
    field :errors, [String], "Possible errors", null: true

    argument :bank_account_input,
             Types::BankAccountInput,
             "BankAccount Input",
             required: true

    def resolve(bank_account_input:)
      Graphql::CreateBankAccount.new(context:, bank_account_input:).response
    end

    def authorized?(bank_account_input:)
      context[:current_user].present?
    end
  end
end
