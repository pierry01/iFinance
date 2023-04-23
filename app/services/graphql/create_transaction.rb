# frozen_string_literal: true

module Graphql
  class CreateTransaction
    def initialize(transaction_input:)
      @transaction = Transaction.new(**transaction_input)
    end

    def response
      if @transaction.save
        handle_bank_account_amount

        { transaction: @transaction }
      else
        { errors: @transaction.errors.full_messages }
      end
    end

    private

    def handle_bank_account_amount
      amount = @transaction.amount
      bank_account = @transaction.bank_account

      if @transaction.kind == Transaction::INCOME
        bank_account.increment(:amount, amount)
      else
        bank_account.decrement(:amount, amount)
      end

      bank_account.save!
    end
  end
end
