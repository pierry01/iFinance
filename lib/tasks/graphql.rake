# frozen_string_literal: true

namespace :graphql do
  desc "Generate GraphQL schema"

  task dump_schema: :environment do
    Rails
      .root
      .join("app/graphql/schema.graphql")
      .write(IFinanceSchema.to_definition)

    puts "Schema dumped to app/graphql/schema.graphql"
  end
end
