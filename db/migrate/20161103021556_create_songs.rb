class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, default: "Anonymous"
      t.string :artist, default: "Anonymous"
      t.string :url, null: false
      t.string :picture_url
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
