class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.belongs_to :userstory, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
