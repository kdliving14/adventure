class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :name
      t.text :description
      t.string :image_url
      t.string :trigger_warnings

      t.timestamps
    end
  end
end
