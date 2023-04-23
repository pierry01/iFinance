class RemoveAmountFromBankAccount < ActiveRecord::Migration[7.0]
  def change
    remove_column :bank_accounts, :amount, :float, null: false, default: 0.0
  end
end
