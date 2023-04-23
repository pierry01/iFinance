# frozen_string_literal: true

require "rails_helper"

module Graphql
  RSpec.describe(CreateTransaction, type: :service) do
    subject(:service) { described_class.new(transaction_input:).response }

    let(:kind) { "EXPENSE" }
    let(:user) { create(:user) }
    let(:bank_account) { create(:bank_account, user:, amount: 10) }
    let(:context) { { current_user: user, ip_address: "192.168.0.1" } }

    let(:transaction_input) do
      {
        kind:,
        done: true,
        amount: 12.34,
        name: "TRANSACTION NAME",
        description: "LOREM IPSUM...",
        bank_account_id: bank_account.id
      }
    end

    it { expect { service }.to(change(Transaction, :count).by(1)) }

    it do
      expect { service }.to(
        change { bank_account.reload.amount }.from(10).to(-2.34)
      )
    end

    context "when transaction kind is INCOME" do
      let(:kind) { "INCOME" }

      it do
        expect { service }.to(
          change { bank_account.reload.amount }.from(10).to(22.34)
        )
      end
    end

    context "with invalid params" do
      let(:kind) { nil }

      it { expect { service }.not_to(change(Transaction, :count)) }
    end
  end
end
