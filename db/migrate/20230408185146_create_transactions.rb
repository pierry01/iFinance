class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :type
      t.string :name
      t.boolean :done
      t.float :amount
      t.date :due_date
      t.text :description
      t.references :bank_account, null: false, foreign_key: true

      t.timestamps
    end
  end
end
