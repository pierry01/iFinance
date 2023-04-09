# frozen_string_literal: true

require "rails_helper"

module Mutations
  RSpec.describe(CreateBankAccount, type: :request) do
    let(:user) { create(:user) }

    it "returns created BankAccount" do
      post("/graphql", params: { query: })

      json = JSON.parse(response.body)
      data = json["data"]["createBankAccount"]

      expect(data["bankAccount"]["id"]).to(be_present)
    end

    private

    def query
      <<~GQL
        mutation {
          createBankAccount(input: {
            bankAccountInputType: {
              amount: 1234.56,
              description: "Bank of America - LOREM IPSUM...",
              name: "ACCOUNT NAME"
            }
          }) {
            createBankAccount {
              bankAccount {
                id
                name
                amount
                description
              }
            }
          }
        }
      GQL
    end
  end
end
