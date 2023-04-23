# frozen_string_literal: true

class Transaction < ApplicationRecord
  KINDS = [INCOME = "INCOME", EXPENSE = "EXPENSE", TRANSFER = "TRANSFER"]

  belongs_to :bank_account

  validates :kind, :name, :amount, :description, presence: true
  validates :kind, inclusion: KINDS
end
