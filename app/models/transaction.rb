# frozen_string_literal: true

class Transaction < ApplicationRecord
  ALL_KINDS = [
    INCOME = "INCOME",
    EXPENSE = "EXPENSE",
    TRANSFER = "TRANSFER"
  ].freeze

  belongs_to :bank_account

  validates :kind, :name, :amount, :description, presence: true
  validates :kind, inclusion: ALL_KINDS

  scope :income, -> { where(kind: INCOME) }
  scope :expense, -> { where(kind: EXPENSE) }
end
