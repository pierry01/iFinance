# frozen_string_literal: true

module Mutations
  class CreateBankAccount
    def initialize(bank_account_input_type:, context:)
      @context = context
      @bank_account = bank_account_input_type
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
