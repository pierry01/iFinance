# frozen_string_literal: true

class GraphqlController < ApplicationController
  def execute
    render(json: json(params))
  rescue StandardError => error
    raise error unless Rails.env.development?

    handle_error_in_development(error)
  end

  private

  def json(params)
    IFinanceSchema.execute(
      params[:query],
      variables: prepare_variables(params[:variables]),
      context: {
        current_user:,
        ip_address: request.remote_ip
      },
      operation_name: params[:operationName]
    )
  end

  def prepare_variables(variables_param)
    case variables_param
    when String
      variables_param.present? ? JSON.parse(variables_param) || {} : {}
    when Hash
      variables_param
    when ActionController::Parameters
      variables_param.to_unsafe_hash
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{variables_param}"
    end
  end

  def handle_error_in_development(error)
    logger.error(e.message)
    logger.error(e.backtrace.join("\n"))

    render(
      json: {
        errors: [{ message: e.message, backtrace: e.backtrace }],
        data: {
        }
      },
      status: :internal_server_error
    )
  end
end
