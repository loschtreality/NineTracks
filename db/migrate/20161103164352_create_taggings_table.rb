class CreateTaggingsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :playlist_id
      t.integer :tag_id
    end
  end
end
