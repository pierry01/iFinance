class CreateTransaction < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :type, null: false, default: ""
      t.string :name, null: false, default: ""
      t.boolean :done, null: false, default: false
      t.float :amount, null: false, default: 0
      t.date :due_date
      t.text :description, null: false, default: ""
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
