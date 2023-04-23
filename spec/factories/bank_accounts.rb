# frozen_string_literal: true

FactoryBot.define do
  factory :bank_account do
    user

    name { "name" }
    description { "description" }
  end
end
