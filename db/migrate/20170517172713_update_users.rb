class UpdateUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :firstname, :string, null: false
    add_column :users, :lastname, :string, null: false
    add_column :users, :username, :string, null: false, unique: true
  end
end
