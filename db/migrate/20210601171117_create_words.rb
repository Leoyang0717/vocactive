class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :chinese
      t.string :korean

      t.timestamps
    end
  end
end
