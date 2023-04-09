# frozen_string_literal: true

require "rails_helper"

RSpec.describe(User) do
  it { is_expected.to(validate_presence_of(:last_name)) }
  it { is_expected.to(validate_presence_of(:first_name)) }
  it { is_expected.to(have_many(:bank_accounts).dependent(:destroy)) }
  it { is_expected.to(have_many(:transactions).through(:bank_accounts)) }
end
