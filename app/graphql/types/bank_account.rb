# frozen_string_literal: true

module Types
  class BankAccount < Types::BaseObject
    description "Types for BankAccount"

    field :amount, Float, "Valor", null: false
    field :description, String, "Descrição", null: false
    field :name, String, "Nome", null: false
    field :transactions,
          [Types::Transaction],
          "Lista de transações",
          null: false
  end
end
