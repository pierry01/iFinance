# frozen_string_literal: true

module Mutations
  class CreateBankAccount
    description "CREATE a BankAccount"

    field :bank_account,
          Types::BankAccountType,
          "Created BankAccount",
          null: false

    argument :bank_account_input_type,
             Types::BankAccountInputType,
             "BankAccount Input Type",
             required: true

    def resolve(bank_account_input_type:)
      Graphql::CreateBankAccount.new(
        context:,
        bank_account_input_type:
      ).response
    end

    def authorized?(bank_account_input_type:)
      BankAccount.new(
        **bank_account_input_type,
        user: context[:current_user]
      ).valid?
    end
  end
end
