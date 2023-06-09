# frozen_string_literal: true

module Types
  class BankAccountInput < Types::BaseInputObject
    description "Input for BankAccount"

    argument :description, String, "Description", required: true
    argument :name, String, "Name", required: true
  end
end
