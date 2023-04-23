# frozen_string_literal: true

module Graphql
  class CreateTransaction
    def initialize(transaction_input:)
      @transaction = Transaction.new(**transaction_input)
    end

    def response
      if @transaction.save
        { transaction: @transaction }
      else
        { errors: @transaction.errors.full_messages }
      end
    end
  end
end
