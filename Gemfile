# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.3'

gem 'bootsnap', '~> 1.16.0', require: false
gem 'pg', '~> 1.4.6'
gem 'puma', '~> 5.6.5'
gem 'rails', '~> 7.0.4'
gem 'redis', '~> 4.8.1'

gem 'cssbundling-rails', '~> 1.1.2'
gem 'jsbundling-rails', '~> 1.1.1'
gem 'propshaft', '~> 0.7.0'
gem 'stimulus-rails', '~> 1.2.1'
gem 'turbo-rails', '~> 1.4.0'

group :development, :test do
  gem 'debug', '~> 1.7.2', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails', '~> 6.2.0'
  gem 'rspec-rails', '~> 6.0.1'
  gem 'shoulda-matchers', '~> 5.3.0'
end

group :development do
  gem 'bullet', '~> 7.0.7'
  gem 'prettier', '~> 3.2.2'
  gem 'reek', '~> 6.1.4'
  gem 'rubocop', '~> 1.44.1'
  gem 'rubocop-graphql', '~> 0.19.0'
  gem 'rubocop-performance', '~> 1.15.2'
  gem 'rubocop-rails', '~> 2.17.4'
  gem 'rubocop-rspec', '~> 2.18.1'
  gem 'rubocop-shopify', '~> 2.11.1'
  gem 'solargraph', '~> 0.48.0'
  gem 'solargraph-rails', '~> 1.1.0'
  gem 'web-console', '~> 4.2.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
