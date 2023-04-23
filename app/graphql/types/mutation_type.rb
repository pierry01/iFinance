# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    description "Mutation ROOT"

    field :create_bank_account,
          mutation: Mutations::CreateBankAccount,
          description: "CREATE a BankAccount"
    field :create_transaction,
          mutation: Mutations::CreateTransaction,
          description: "CREATE a Transaction"
  end
end
