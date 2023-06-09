# frozen_string_literal: true

require "spec_helper"
ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"

if Rails.env.production?
  abort("The Rails environment is running in production mode!")
end

require "rspec/rails"
require "support/factory_bot"
require "devise/jwt/test_helpers"
require "support/shoulda_matchers"

begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  abort(e.to_s.strip)
end

RSpec.configure do |config|
  config.filter_rails_from_backtrace!
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
end
