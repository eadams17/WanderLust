class CreatePhotoTags < ActiveRecord::Migration[5.0]
  def change
    create_table :photos_tags, id: false do |t|
      t.belongs_to :photo, index: true
      t.belongs_to :tag, index: true
    end
  end
end
