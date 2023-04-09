# frozen_string_literal: true

require "rails_helper"

module Queries
  RSpec.describe(UserQuery, type: :request) do
    let(:user) { create(:user) }
    let(:headers) { Devise::JWT::TestHelpers.auth_headers({}, user) }

    it "returns the CurrentUser" do
      post("/graphql", params: { query: }, headers:)

      json = JSON.parse(response.body)
      data = json["data"]["userQuery"]

      expect(data["fullName"]).to(eq("first_name last_name"))
    end

    it "returns nil" do
      post("/graphql", params: { query: })

      json = JSON.parse(response.body)
      data = json["data"]["userQuery"]

      expect(data).to(be_nil)
    end

    private

    def query
      <<~GQL
        {
          userQuery {
            id
            fullName
          }
        }
      GQL
    end
  end
end
