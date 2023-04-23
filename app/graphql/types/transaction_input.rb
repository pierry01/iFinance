# frozen_string_literal: true

module Types
  class TransactionInput < Types::BaseInputObject
    description "Input for Transaction"

    argument :amount, Float, "Amount", required: true
    argument :bank_account_id, ID, "BankAccount ID", required: true
    argument :description, String, "Description", required: true
    argument :done, Boolean, "Done", required: true
    argument :due_date, String, "Due date", required: false
    argument :kind, String, "Kind", required: true
    argument :name, String, "Name", required: true
  end
end
