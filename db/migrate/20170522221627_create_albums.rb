class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description
      t.string :thumbnail_url, null: false
      t.timestamps
    end
    add_index :albums, :user_id
  end
end
