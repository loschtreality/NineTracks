class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.text :description
      t.string :picture_url
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :playlists, :user_id 
  end
end
