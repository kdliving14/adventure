class CreateChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :choices do |t|
      t.belongs_to :event, null: false, foreign_key: true
      t.string :content
      t.string :image_url
      t.integer :item_needed
      t.integer :next_event_id

      t.timestamps
    end
  end
end
