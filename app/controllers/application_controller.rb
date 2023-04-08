# frozen_string_literal: true

class ApplicationController < ActionController::Base
  respond_to :html, :json
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
end
