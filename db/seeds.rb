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

incomes = bank_account.transactions.income.sum(:amount)
expenses = bank_account.transactions.expense.sum(:amount)

bank_account.update!(amount: incomes - expenses)
