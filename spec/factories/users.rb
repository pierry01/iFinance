# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { "user@email.com" }
    password { "random-password" }
    first_name { "first_name" }
    last_name { "last_name" }
  end
end
