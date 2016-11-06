class AddUsernameToPlaylists < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :username, :string
  end
end
