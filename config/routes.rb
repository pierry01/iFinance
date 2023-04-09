# frozen_string_literal: true

Rails.application.routes.draw do
  root("application#index")

  devise_for(:users)

  post("/graphql", to: "graphql#execute")

  constraints = ->(request) { !request.xhr? && request.format.html? }

  get "/login", to: "application#index", constraints: constraints

  return unless Rails.env.development?

  mount(GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql")
end
