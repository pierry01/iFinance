# frozen_string_literal: true

require "rails_helper"

module Graphql
  RSpec.describe(CreateBankAccount, type: :service) do
    subject(:service) do
      described_class.new(bank_account_input_type:, context:).response
    end

    let(:bank_account_input_type) do
      { amount:, description: "DESCRIPTION", name: "NAME" }
    end

    let(:amount) { 1234.56 }
    let(:context) { { current_user: create(:user), ip_address: "192.168.0.1" } }

    it { expect { service }.to(change(BankAccount, :count).by(1)) }

    context "with invalid params" do
      let(:amount) { nil }

      it { expect { service }.not_to(change(BankAccount, :count)) }
    end
  end
end
