class AddPlayerPositionToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :playerX, :float
    add_column :games, :playerY, :float
  end
end
