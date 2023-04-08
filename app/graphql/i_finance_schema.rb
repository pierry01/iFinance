# frozen_string_literal: true

class IFinanceSchema < GraphQL::Schema
  use(GraphQL::Dataloader)

  query(Types::QueryType)
  mutation(Types::MutationType)

  class << self
    def type_error(err, context)
      super
    end

    def resolve_type(_abstract_type, _obj, _ctx)
      raise(GraphQL::RequiredImplementationMissingError)
    end

    def id_from_object(object, _type_definition, _query_ctx)
      object.to_gid_param
    end

    def object_from_id(global_id, _query_ctx)
      GlobalID.find(global_id)
    end

    def unauthorized_object(_error)
      raise(GraphQL::ExecutionError, "UNAUTHORIZED")
    end
  end
end
