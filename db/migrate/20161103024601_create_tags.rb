class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.timestamps
    end
    add_index :tags, :title
  end
end
