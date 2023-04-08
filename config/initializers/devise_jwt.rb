# frozen_string_literal: true

module Devise
  module JWT
    module WardenStrategy
      def authenticate!
        super
        env["devise.skip_trackable"] = true if valid?
      end
    end
  end
end

Warden::JWTAuth::Strategy.prepend(Devise::JWT::WardenStrategy)
