class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.integer :photo_id, null: false
      t.string :tag_name, null: false
      t.timestamps
    end
    add_index :tags, :photo_id
    add_index :tags, :tag_name
  end
end
