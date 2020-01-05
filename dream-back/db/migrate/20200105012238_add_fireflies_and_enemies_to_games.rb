class AddFirefliesAndEnemiesToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :fireflies_collected, :integer
    add_column :games, :enemies_defeated, :integer
    remove_column :games, :game_save
  end
end
