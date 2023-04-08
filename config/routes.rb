# frozen_string_literal: true

Rails.application.routes.draw do
  root("components#index")

  devise_for(:users)

  post("/graphql", to: "graphql#execute")

  return unless Rails.env.development?

  mount(GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql")
end
