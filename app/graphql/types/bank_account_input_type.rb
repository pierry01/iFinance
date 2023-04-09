# frozen_string_literal: true

module Types
  class BankAccountInputType < Types::BaseInputObject
    description "Input for BankAccount"

    argument :amount, Float, "Amount", required: true
    argument :description, String, "Description", required: true
    argument :name, String, "Name", required: true
  end
end
