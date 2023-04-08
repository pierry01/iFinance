FactoryBot.define do
  factory :transaction do
    type { "" }
    name { "MyString" }
    done { false }
    amount { 1.5 }
    due_date { "2023-04-08" }
    description { "MyText" }
    bank_account { nil }
  end
end
