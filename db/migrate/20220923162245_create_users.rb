class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :image_url
      t.integer :left_off

      t.timestamps
    end
  end
end
