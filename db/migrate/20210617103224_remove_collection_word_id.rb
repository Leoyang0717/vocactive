class RemoveCollectionWordId < ActiveRecord::Migration[6.1]
  def change
    remove_column :collections, :word_id
  end
end
