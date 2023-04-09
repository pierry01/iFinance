# frozen_string_literal: true

require "rails_helper"

RSpec.describe(Transaction) do
  it { is_expected.to(belong_to(:bank_account)) }
  it { is_expected.to(validate_presence_of(:kind)) }
  it { is_expected.to(validate_presence_of(:name)) }
  it { is_expected.to(validate_presence_of(:amount)) }
  it { is_expected.to(validate_presence_of(:description)) }
end
