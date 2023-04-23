# frozen_string_literal: true

require "rails_helper"

module Graphql
  RSpec.describe(CreateTransaction, type: :service) do
    subject(:service) { described_class.new(transaction_input:).response }

    let(:amount) { 1234.56 }
    let(:user) { create(:user) }
    let(:bank_account) { create(:bank_account, user:) }
    let(:context) { { current_user: user, ip_address: "192.168.0.1" } }

    let(:transaction_input) do
      {
        amount:,
        done: true,
        kind: "EXPENSE",
        name: "TRANSACTION NAME",
        description: "LOREM IPSUM...",
        bank_account_id: bank_account.id
      }
    end

    it { expect { service }.to(change(Transaction, :count).by(1)) }

    context "with invalid params" do
      let(:amount) { nil }

      it { expect { service }.not_to(change(Transaction, :count)) }
    end
  end
end
