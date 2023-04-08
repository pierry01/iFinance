# frozen_string_literal: true

module Types
  class User < Types::BaseObject
    description "Types for User"

    field :bank_accounts,
          [Types::BankAccount],
          "Lista de contas bancárias",
          null: false
    field :email, String, "E-mail", null: false
    field :first_name, String, "Primeiro nome", null: false
    field :full_name, String, "Nome completo", null: false
    field :last_name, String, "Último nome", null: false
    field :transactions,
          [Types::Transaction],
          "Lista de transações",
          null: false
  end
end
