# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    class << self
      def authorized?(user, _context)
        super && user.present?
      end
    end

    description "Types for User"

    field :bank_accounts,
          [Types::BankAccountType],
          "Lista de contas bancárias",
          null: false
    field :email, String, "E-mail", null: false
    field :first_name, String, "Primeiro nome", null: false
    field :full_name, String, "Nome completo", null: false
    field :id, ID, "ID", null: false
    field :last_name, String, "Último nome", null: false
  end
end
