# frozen_string_literal: true

module Mutations
  class CreateBankAccount < Mutations::BaseMutation
    description "CREATE a BankAccount"

    field :bank_account,
          Types::BankAccountType,
          "Created BankAccount",
          null: false

    argument :bank_account_input,
             Types::BankAccountInput,
             "BankAccount Input Type",
             required: true

    def resolve(bank_account_input:)
      Graphql::CreateBankAccount.new(
        context:,
        bank_account_input: bank_account_input.to_h
      ).response
    end

    def authorized?(bank_account_input:)
      BankAccount.new(**bank_account_input, user: context[:current_user]).valid?
    end
  end
end
