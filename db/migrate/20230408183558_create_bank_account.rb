class CreateBankAccount < ActiveRecord::Migration[7.0]
  def change
    create_table :bank_accounts do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name, null: false, default: ""
      t.float :amount, null: false, default: 0
      t.text :description, null: false, default: ""

      t.timestamps
    end
  end
end
