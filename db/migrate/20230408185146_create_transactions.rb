class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions, id: :uuid do |t|
      t.string :kind, null: false, default: ""
      t.string :name, null: false, default: ""
      t.boolean :done, null: false, default: false
      t.float :amount, null: false, default: 0
      t.date :due_date
      t.text :description, null: false, default: ""
      t.references :bank_account, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
