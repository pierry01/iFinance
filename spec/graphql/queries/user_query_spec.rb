# frozen_string_literal: true

require "rails_helper"

module Queries
  RSpec.describe(UserQuery, type: :request) do
    let(:user) { create(:user) }

    it "returns User" do
      post("/graphql", params: { query: })

      json = JSON.parse(response.body)
      data = json["data"]["userQuery"]

      expect(data["fullName"]).to(eq("first_name last_name"))
    end

    private

    def query
      <<~GQL
        {
          userQuery(id: "#{user.id}") {
            id
            fullName
          }
        }
      GQL
    end
  end
end
