class CreateUserstories < ActiveRecord::Migration[7.0]
  def change
    create_table :userstories do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :story, null: false, foreign_key: true
      t.integer :left_off

      t.timestamps
    end
  end
end
