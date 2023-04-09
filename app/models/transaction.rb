# frozen_string_literal: true

class Transaction < ApplicationRecord
  belongs_to :bank_account

  validates :kind, :name, :amount, :description, presence: true
end
