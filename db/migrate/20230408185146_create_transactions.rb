class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions, id: :uuid do |t|
      t.string :type
      t.string :name
      t.boolean :done
      t.float :amount
      t.date :due_date
      t.text :description
      t.references :bank_account, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
