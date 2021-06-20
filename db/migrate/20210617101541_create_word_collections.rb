class CreateWordCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :word_collections do |t|
      t.references :word, null: false, foreign_key: true
      t.references :collection, null: false, foreign_key: true

      t.timestamps
    end
  end
end
