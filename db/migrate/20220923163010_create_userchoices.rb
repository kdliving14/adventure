class CreateUserchoices < ActiveRecord::Migration[7.0]
  def change
    create_table :userchoices do |t|
      t.belongs_to :userstory, null: false, foreign_key: true
      t.belongs_to :event, null: false, foreign_key: true
      t.belongs_to :choice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
