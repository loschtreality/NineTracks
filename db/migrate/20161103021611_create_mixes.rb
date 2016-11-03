class CreateMixes < ActiveRecord::Migration[5.0]
  def change
    create_table :mixes do |t|
      t.integer :playlist_id
      t.integer :song_id
      t.timestamps
    end
  end
end
