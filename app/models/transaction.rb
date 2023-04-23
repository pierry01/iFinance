# frozen_string_literal: true

class Transaction < ApplicationRecord
  KINDS = [INCOME = "INCOME", EXPENSE = "EXPENSE"]

  belongs_to :bank_account

  validates :kind, :name, :amount, :description, presence: true
  validates :kind, inclusion: KINDS

  scope :income, -> { where(kind: INCOME) }
  scope :expense, -> { where(kind: EXPENSE) }
end
