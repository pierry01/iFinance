# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    class << self
      def authorized?(user, _context)
        super && user.present?
      end
    end

    description "Types for User"

    field :bank_accounts,
          [Types::BankAccountType],
          "Lista de contas bancárias",
          null: false
    field :email, String, "E-mail", null: false
    field :first_name, String, "Primeiro nome", null: false
    field :full_name, String, "Nome completo", null: false
    field :id, ID, "ID", null: false
    field :last_name, String, "Último nome", null: false
    field :transactions,
          [Types::TransactionType],
          "Lista de transações",
          null: false do
      argument :bank_account_id, ID, "BankAccount ID", required: true
    end

    def transactions(bank_account_id:)
      bank_account = object.bank_accounts.find(bank_account_id)

      bank_account.transactions
    end
  end
end
