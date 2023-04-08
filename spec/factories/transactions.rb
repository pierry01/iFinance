# frozen_string_literal: true

FactoryBot.define do
  factory :transaction do
    bank_account

    type { "type" }
    name { "name" }
    done { false }
    amount { 1.5 }
    due_date { "due_date" }
    description { "description" }
  end
end
