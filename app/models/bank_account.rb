# frozen_string_literal: true

class BankAccount < ApplicationRecord
  belongs_to :user

  has_many :transactions, dependent: :destroy

  validates :amount, presence: true
end
