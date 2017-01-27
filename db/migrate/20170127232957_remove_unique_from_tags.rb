class RemoveUniqueFromTags < ActiveRecord::Migration[5.0]
  def change
    remove_index :tags, [:title]
    add_index :tags, [:title]
  end
end
