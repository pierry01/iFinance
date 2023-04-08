# frozen_string_literal: true

module Types
  class TransactionType < Types::BaseObject
    class << self
      def authorized?(transaction, _context)
        super && transaction.present?
      end
    end

    description "Types for Transaction"

    field :amount, Float, "Valor", null: false
    field :bank_account, Types::BankAccountType, "Conta bancária", null: false
    field :description, String, "Descrição", null: false
    field :done, Boolean, "Finalizada?", null: false
    field :due_date,
          GraphQL::Types::ISO8601DateTime,
          "Data de vencimento",
          null: true
    field :id, ID, "ID", null: false
    field :kind, String, "Tipo", null: false
    field :name, String, "Nome", null: false
  end
end
