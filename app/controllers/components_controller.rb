# frozen_string_literal: true

class ComponentsController < ApplicationController
  after_action -> { request.session_options[:skip] = true }

  def index
  end
end
