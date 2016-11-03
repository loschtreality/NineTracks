class AddMissingIndexes < ActiveRecord::Migration[5.0]
  def change
        add_index :comments, :user_id
        add_index :comments, :playlist_id
        add_index :mixes, :playlist_id
        add_index :mixes, :song_id
        add_index :songs, :user_id
  end
end
