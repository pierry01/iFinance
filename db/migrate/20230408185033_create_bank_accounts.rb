class CreateBankAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :bank_accounts do |t|
      t.string :name
      t.float :amount
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
