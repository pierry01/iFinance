# frozen_string_literal: true

class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :trackable

  has_many :categories, dependent: :destroy
  has_many :bank_accounts, dependent: :destroy
  has_many :transactions, through: :bank_accounts
end
