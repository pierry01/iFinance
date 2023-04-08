# frozen_string_literal: true

module Types
  class Transaction < Types::BaseObject
    description "Types for Transaction"

    field :amount, Float, "Valor", null: false
    field :bank_account, Types::BankAccount, "Conta bancária", null: false
    field :description, String, "Descrição", null: false
    field :done, Boolean, "Finalizada?", null: false
    field :due_date, Date, "Data de vencimento", null: true
    field :kind, String, "Tipo", null: false
    field :name, String, "Nome", null: false
  end
end
