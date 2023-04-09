# frozen_string_literal: true

module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    field_class(Types::BaseField)
    object_class(Types::BaseObject)
    argument_class(Types::BaseArgument)
    input_object_class(Types::BaseInputObject)
  end
end
