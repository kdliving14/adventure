class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.belongs_to :story, null: false, foreign_key: true
      t.string :name
      t.text :short_description
      t.text :long_description
      t.string :image_url
      t.string :sound_effect
      t.integer :delay

      t.timestamps
    end
  end
end
