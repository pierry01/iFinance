FactoryBot.define do
  factory :bank_account do
    name { "MyString" }
    amount { 1.5 }
    description { "MyText" }
    user { nil }
  end
end
