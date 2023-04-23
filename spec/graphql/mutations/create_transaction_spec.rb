# frozen_string_literal: true

require "rails_helper"

module Mutations
  RSpec.describe(CreateTransaction, type: :request) do
    let(:user) { create(:user) }
    let(:name) { "ACCOUNT NAME" }
    let(:bank_account) { create(:bank_account, user:) }
    let(:headers) { Devise::JWT::TestHelpers.auth_headers({}, user) }

    it "returns created Transaction" do
      post("/graphql", params: { query: }, headers:)

      json = JSON.parse(response.body)
      data = json["data"]["createTransaction"]

      expect(data["transaction"]["id"]).to(be_present)
    end

    it "returns UNAUTHORIZED without a valid token" do
      post("/graphql", params: { query: })

      json = JSON.parse(response.body)
      message = json["errors"].first["message"]

      expect(message).to(eq("UNAUTHORIZED"))
    end

    context "with invalid data" do
      let(:name) { nil }

      it "returns errors" do
        post("/graphql", params: { query: }, headers:)

        json = JSON.parse(response.body)
        errors = json["data"]["createTransaction"]["errors"]

        expect(errors).to(eq(["Name can't be blank"]))
      end
    end

    private

    def query
      <<~GQL
        mutation {
          createTransaction(input: {
            transactionInput: {
              done: true,
              kind: "INCOME",
              name: "#{name}",
              amount: 1234.56,
              description: "LOREM IPSUM...",
              bankAccountId: "#{bank_account.id}"
            }
          }) {
            errors
            transaction {
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
