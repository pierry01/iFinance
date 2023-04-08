class CreateBankAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :bank_accounts, id: :uuid do |t|
      t.string :name
      t.float :amount
      t.text :description
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
