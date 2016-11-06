class RemovePicUrlFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :picture_url
  end
end
