# frozen_string_literal: true

class IFinanceSchema < GraphQL::Schema
  use(GraphQL::Dataloader)

  query(Types::QueryType)
  mutation(Types::MutationType)

  class << self
    def type_error(err, context)
      super
    end

    def resolve_type(abstract_type, obj, ctx)
      raise(GraphQL::RequiredImplementationMissingError)
    end

    def id_from_object(object, type_definition, query_ctx)
      object.to_gid_param
    end

    def object_from_id(global_id, query_ctx)
      GlobalID.find(global_id)
    end
  end
end
