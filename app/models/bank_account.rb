# frozen_string_literal: true

class BankAccount < ApplicationRecord
  belongs_to :user

  has_many :transactions, dependent: :destroy

  validates :name, :description, presence: true

  def amount
    transactions.income.sum(:amount) - transactions.expense.sum(:amount)
  end
end
