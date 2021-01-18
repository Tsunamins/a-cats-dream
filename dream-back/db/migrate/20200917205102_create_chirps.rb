class CreateChirps < ActiveRecord::Migration[5.2]
  def change
    create_table :chirps do |t|
      t.text :body
      t.boolean :published

      t.timestamps
    end
  end
end
