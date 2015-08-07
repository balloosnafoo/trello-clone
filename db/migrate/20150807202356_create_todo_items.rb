class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :description, null: false
      t.integer :card_id

      t.timestamps null: false
    end
  end
end
