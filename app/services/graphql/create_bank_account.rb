# frozen_string_literal: true

module Graphql
  class CreateBankAccount
    def initialize(bank_account_input:, context:)
      @bank_account =
        BankAccount.new(**bank_account_input, user: context[:current_user])
    end

    def response
      if @bank_account.save
        { bank_account: @bank_account }
      else
        { errors: @bank_account.errors.full_messages }
      end
    end
  end
end
