# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.3'

gem 'bootsnap', '~> 1.16.0', require: false
gem 'pg', '~> 1.4.6'
gem 'puma', '~> 5.6.5'
gem 'rails', '~> 7.0.4.3'
gem 'redis', '~> 4.8.1'

gem 'cssbundling-rails', '~> 1.1.2'
gem 'jsbundling-rails', '~> 1.1.1'
gem 'propshaft', '~> 0.7.0'

group :development, :test do
  gem 'debug', '~> 1.7.2', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'web-console', '~> 4.2.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
