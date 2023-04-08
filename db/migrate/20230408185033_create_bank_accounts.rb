class CreateBankAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :bank_accounts, id: :uuid do |t|
      t.string :name, null: false, default: ""
      t.float :amount, null: false, default: 0
      t.text :description, null: false, default: ""
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
