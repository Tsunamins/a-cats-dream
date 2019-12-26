class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.integer :fireflies_collected
      t.integer :enemies_defeated
      t.integer :hit_by_enemy
      t.integer :strategy_score
      t.belongs_to :game, foreign_key: true
      t.timestamps
    end
  end
end
