# frozen_string_literal: true

FactoryBot.define do
  factory :bank_account do
    user

    name { "name" }
    amount { 1.5 }
    description { "description" }
  end
end
