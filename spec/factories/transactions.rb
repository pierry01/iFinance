# frozen_string_literal: true

FactoryBot.define do
  factory :transaction do
    bank_account

    name { "name" }
    done { false }
    amount { 1.5 }
    due_date { "due_date" }
    kind { Transaction::INCOME }
    description { "description" }
  end
end
