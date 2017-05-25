class UpdateTagsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :tags, :photo_id, :integer
  end
end
