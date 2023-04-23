# frozen_string_literal: true

class BankAccount < ApplicationRecord
  belongs_to :user

  has_many :transactions, dependent: :destroy

  validates :name, :description, presence: true

  def sum_of_expenses
    transactions.where(kind: Transaction::EXPENSE).sum(:amount)
  end

  def sum_of_incomes
    transactions.where(kind: Transaction::INCOME).sum(:amount)
  end

  def amount
    sum_of_incomes - sum_of_expenses
  end
end
