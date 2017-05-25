class UpdatePhotosTagsTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :photos_tags, :photo_tags
  end
end
