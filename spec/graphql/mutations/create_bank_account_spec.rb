# frozen_string_literal: true

require "rails_helper"

module Mutations
  RSpec.describe(CreateBankAccount, type: :request) do
    let(:user) { create(:user) }
    let(:headers) { Devise::JWT::TestHelpers.auth_headers({}, user) }

    it "returns created BankAccount" do
      post("/graphql", params: { query: }, headers:)

      json = JSON.parse(response.body)
      data = json["data"]["createBankAccount"]

      expect(data["bankAccount"]["id"]).to(be_present)
    end

    it "returns UNAUTHORIZED without a valid token" do
      post("/graphql", params: { query: })

      json = JSON.parse(response.body)
      message = json["errors"].first["message"]

      expect(message).to(eq("UNAUTHORIZED"))
    end

    private

    def query
      <<~GQL
        mutation {
          createBankAccount(input: {
            bankAccountInput: {
              amount: 1234.56,
              description: "Bank of America - LOREM IPSUM...",
              name: "ACCOUNT NAME"
            }
          }) {
            bankAccount {
              id
              name
              amount
              description
            }
          }
        }
      GQL
    end
  end
end
