user = FactoryBot.create(:user)
bank_account = FactoryBot.create(:bank_account, user:)

10.times do
  FactoryBot.create(
    :transaction,
    bank_account:,
    amount: rand(1..1000),
    kind: [Transaction::INCOME, Transaction::EXPENSE].sample
  )
end

