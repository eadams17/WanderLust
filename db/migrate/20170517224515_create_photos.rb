class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.string :caption
      t.string :img_url, null: false
      t.integer :user_id, null: false, unique: true
      t.integer :album_id
      t.timestamps
    end
    add_index :photos, :img_url
    add_index :photos, :user_id
  end
end
