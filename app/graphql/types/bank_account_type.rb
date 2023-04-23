# frozen_string_literal: true

module Types
  class BankAccountType < Types::BaseObject
    class << self
      def authorized?(bank_account, _context)
        super && bank_account.present?
      end
    end

    description "Types for BankAccount"

    field :amount, Float, "Valor", null: false
    field :description, String, "Descrição", null: false
    field :id, ID, "ID", null: false
    field :name, String, "Nome", null: false
    field :sum_of_expenses, Float, "Soma das despesas", null: false
    field :sum_of_incomes, Float, "Soma das receitas", null: false
    field :transactions,
          [Types::TransactionType],
          "Lista de transações",
          null: false
    field :user, Types::UserType, "User", null: false

    def sum_of_expenses
      object.transactions.where(kind: "EXPENSE").sum(:amount)
    end

    def sum_of_incomes
      object.transactions.where(kind: "INCOME").sum(:amount)
    end
  end
end
