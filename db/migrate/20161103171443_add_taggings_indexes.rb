class AddTaggingsIndexes < ActiveRecord::Migration[5.0]
  def change
    add_index :taggings, [:playlist_id, :tag_id]
    add_index :taggings, :playlist_id
    add_index :taggings, :tag_id
  end
end
